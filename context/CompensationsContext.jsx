import React, { createContext, useContext, useState, useMemo } from 'react'

export const CompensationsContext = createContext({})

export const calculateTotal = (compensations) => {
  return compensations.reduce((acc, item) => {
    return acc + item.value
  }, 0)
}

export const bgColors = {
  'Sueldo base': {
    utility: 'bg-green-500',
    hexa: '#34D399',
  },
  'Puntos maslow': {
    utility: 'bg-sky-500',
    hexa: '#0EA5E9',
  },
  'Bono anual': {
    utility: 'bg-amber-500',
    hexa: '#F59E0B',
  },
}

const initialCompensations = [
  {
    id: 0,
    title: 'Sueldo base',
    subtitle: 'Sueldo mensual',
    value: 500,
    minValue: 500,
    maxValue: 2000,
    multiplier: 2,
  },
  {
    id: 1,
    title: 'Puntos maslow',
    subtitle: 'Puntos canjeables en marketplace',
    value: 0,
    minValue: 0,
    maxValue: 1000,
    multiplier: 1,
  },
  {
    id: 2,
    title: 'Bono anual',
    subtitle: null,
    value: 1000,
    minValue: 1000,
    maxValue: 3000,
    multiplier: 0.5,
  },
]

export const CompensationsProvider = ({ children }) => {
  const [compensations, setCompensations] = useState(initialCompensations)

  const total = useMemo(() => {
    return compensations.reduce((acc, item) => {
      return acc + item.value
    }, 0)
  }, [compensations])

  const maxValue = compensations.reduce(
    (acc, item) => acc + (item.maxValue - item.minValue) * item.multiplier,
    0,
  )
  const [amountOfMoney, setAmountOfMoney] = useState(maxValue - total)

  const resetCompensations = () => setCompensations(initialCompensations)

  const updateCompensation = (id, value) => {
    if (amountOfMoney < value) return null

    setCompensations((previousState) =>
      previousState.map((comp) => {
        if (comp.id === id && comp.value !== value) {
          const diff = Math.abs(comp.value - value)
          if (comp.value > value) {
            setAmountOfMoney(amountOfMoney + diff / comp.multiplier)
          } else setAmountOfMoney(amountOfMoney - diff * comp.multiplier)

          return { ...comp, value }
        }

        return comp
      }),
    )
  }

  const values = {
    total,
    amountOfMoney,
    compensations,
  }

  const actions = {
    resetCompensations,
    updateCompensation,
  }

  return (
    <CompensationsContext.Provider value={{ ...values, ...actions }}>
      {children}
    </CompensationsContext.Provider>
  )
}

export const useCompensations = () => useContext(CompensationsContext)
