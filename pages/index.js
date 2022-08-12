import Head from 'next/head'
import { useMemo } from 'react'
import { VictoryPie } from 'victory-pie'
import { Card } from '../components'
import { useCompensations } from '../context/CompensationsContext'

const formatCompensationsToChart = (compensations) => {
  return compensations.map((compensation) => ({
    x: compensation.title,
    y: compensation.value,
  }))
}

export default function Home() {
  const [{ compensations, amountOfMoney }] = useCompensations()

  const total = useMemo(() => {
    return compensations.reduce((acc, item) => {
      return acc + item.value
    }, 0)
  }, [compensations])

  return (
    <div id="container" className="relative">
      <Head>
        <title>MASLOW Challenge</title>
        <meta
          name="description"
          content="My application for maslow challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main>
          {compensations?.map((compesation, i) => (
            <Card key={i + compesation.title} compensation={compesation} />
          ))}
        </main>
        <aside>
          <section className="shadow-lg space-y-2 p-4">
            <h2 className="font-semibold">Tu compensación:</h2>
            <h4 className="opacity-80 text-sm">
              Representación grafica de tu compensación:{' '}
            </h4>

            <div className="max-w-sm">
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
              {compensations?.map(({ title, color, value }, i) => (
                <div
                  key={title + i}
                  className="flex gap-2 justify-start align-middle"
                >
                  <span className={`p-2 w-5 h-5 ${color}`} />
                  <h4 className="opacity-80 text-sm">
                    {title} ARS ${value}
                  </h4>
                </div>
              ))}
            </div>
          </section>
          <section className="shadow-lg space-y-2 p-4">
            <div className="flex justify-between align-middle opacity-60">
              <h4 className="text-md">Para distribuir</h4>
              <span>ARS {amountOfMoney}</span>
            </div>
            <div className="font-semibold flex justify-between align-middle">
              <h4 className="text-md">Total</h4>
              <span>ARS {total}</span>
            </div>
          </section>
          <button className="btn btn-success">Enviar confirmación</button>
        </aside>
      </div>
    </div>
  )
}
