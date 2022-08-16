import React, { createContext, useContext, useState, useMemo } from 'react'

export const CompensationsContext = createContext({})

export const calculateTotal = (compensations) => {
  return compensations.reduce((acc, item) => {
    return acc + item.value
  }, 0)
}

export const CompensationsProvider = ({ children }) => {
  const [compensations, setCompensations] = useState([
    {
      id: 0,
      title: 'Sueldo base',
      subtitle: 'Sueldo mensual',
      value: 500,
      minValue: 500,
      maxValue: 2500,
      multiplier: 2,
      color: 'green',
    },
    {
      id: 1,
      title: 'Puntos maslow',
      subtitle: 'Puntos canjeables en marketplace',
      value: 0,
      minValue: 0,
      maxValue: 1000,
      multiplier: 1,
      color: 'sky',
    },
    {
      id: 2,
      title: 'Bono anual',
      subtitle: null,
      value: 1000,
      minValue: 1000,
      maxValue: 3000,
      multiplier: 0.5,
      color: 'green',
    },
  ])

  const total = useMemo(() => {
    return compensations.reduce((acc, item) => {
      return acc + item.value
    }, 0)
  }, [compensations])

  const [amountOfMoney, setAmountOfMoney] = useState(3428 - total)

  const updateCompensation = (id, value) => {
    if (amountOfMoney < value) return null

    setCompensations((previousState) =>
      previousState.map((comp) => {
        if (comp.id === id && comp.value !== value) {
          setAmountOfMoney((previousValue) => {
            if (value < comp.value) {
              return previousValue + value * comp.multiplier
            } else if (value > comp.value) {
              return previousValue - value * comp.multiplier
            }
            return previousValue
          })

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
    updateCompensation,
  }

  return (
    <CompensationsContext.Provider value={{ ...values, ...actions }}>
      {children}
    </CompensationsContext.Provider>
  )
}

export const useCompensations = () => useContext(CompensationsContext)
