import { createContext, useContext, useState } from 'react'

export const CompensationsContext = createContext({})

export const CompensationsProvider = ({ children }) => {
  const [amountOfMoney, setAmountOfMoney] = useState(50000)
  const [compensations, setCompensations] = useState([
    {
      id: 0,
      title: 'Sueldo base',
      subtitle: 'Sueldo mensual',
      value: 856,
      minValue: 500,
      maxValue: 2500,
      multiplier: 2,
      color: 'bg-emerald-400',
    },
    {
      id: 1,
      title: 'Puntos maslow',
      subtitle: 'Puntos canjeables en marketplace',
      value: 500,
      minValue: 0,
      maxValue: 1000,
      multiplier: 1,
      color: 'bg-sky-500',
    },
    {
      id: 2,
      title: 'Bono anual',
      subtitle: null,
      value: 2000,
      minValue: 1000,
      maxValue: 3000,
      multiplier: 0.5,
      color: 'bg-amber-500',
    },
  ])

  const values = {
    amountOfMoney,
    compensations,
  }

  const updateCompensation = (id, updatedValues) => {
    if (amountOfMoney < updatedValues.value) return null

    setCompensations((previousState) =>
      previousState.map((comp) => {
        if (comp.id === id && comp.value !== updatedValues.value) {
          setAmountOfMoney((previousValue) => {
            if (updatedValues.value < comp.value) {
              return previousValue + updatedValues.value * comp.multiplier
            } else if (updatedValues.value > comp.value) {
              return previousValue - updatedValues.value * comp.multiplier
            }
            return previousValue
          })

          return { ...comp, ...updatedValues }
        }

        return comp
      }),
    )
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
