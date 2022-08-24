import React from 'react'
import { VictoryPie } from 'victory-pie'

const formatCompensationsToChart = (compensations) => {
  return compensations.map((compensation) => ({
    x: compensation.title,
    y: compensation.value,
  }))
}

const GraphicRepresentation = ({ compensations }) => {
  return (
    <section className="shadow-lg space-y-2 py-4 px-8">
      <h2 className="font-semibold">Tu compensación:</h2>
      <h4 className="opacity-80 text-sm">
        Representación grafica de tu compensación:{' '}
      </h4>

      <div className="max-w-xs">
        <VictoryPie
          labels={({ datum }) => datum.y}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 2,
            },
          }}
          data={formatCompensationsToChart(compensations)}
          colorScale={['#34D399', '#0EA5E9', '#F59E0B']}
        />
      </div>

      <div className="space-y-2 ">
        {compensations?.map(({ title, color, value, id }, i) => (
          <div key={id} className="flex gap-2">
            <div className={`w-4 h-4 ${color}`}></div>
            <h4 className="opacity-80 text-sm">
              {title} ARS ${value}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GraphicRepresentation
