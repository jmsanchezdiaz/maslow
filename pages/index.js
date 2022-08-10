import Head from 'next/head'
import Card from '../components/Card'
import { useMemo, useState } from 'react'
import { VictoryPie } from 'victory-pie'
import Modal from '../components/Modal'

export default function Home() {
  const [amountOfMoney, setAmountOfMoney] = useState(50000)
  const [compensations, setCompensations] = useState([
    {
      title: 'Sueldo base',
      subtitle: 'Sueldo mensual',
      value: 856,
      minValue: 500,
      maxValue: 2500,
      multiplier: 2,
      color: 'bg-emerald-400',
    },
    {
      title: 'Puntos maslow',
      subtitle: 'Puntos canjeables en marketplace',
      value: 500,
      minValue: 0,
      maxValue: 1000,
      multiplier: 1,
      color: 'bg-sky-500',
    },
    {
      title: 'Bono anual',
      subtitle: null,
      value: 2000,
      minValue: 1000,
      maxValue: 3000,
      multiplier: 0.5,
      color: 'bg-amber-500',
    },
  ])

  const total = useMemo(() => {
    return compensations.reduce((acc, item) => {
      return acc + item.value
    }, 0)
  }, [compensations])

  return (
    <div className="relative">
      <Head>
        <title>MASLOW Challenge</title>
        <meta
          name="description"
          content="My application for maslow challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal>
        <h2 className="text-xl font-semibold">Actualizar Compensación</h2>

        <form action="">
          <div>
            <label htmlFor="compensation">Valor:</label>
            <input
              className="block"
              type="number"
              name="compensation"
              min="0"
              id="compensation"
            />
          </div>
        </form>

        <div className="space-x-2">
          <button type="submit" className="btn btn-success">
            Confirmar
          </button>
          <button type="button" className="btn btn-danger">
            Cancelar
          </button>
        </div>
      </Modal>

      <div>
        <main>
          {compensations?.map((compesation, i) => (
            <Card key={i + compesation.title} {...compesation} />
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
                style={{
                  data: {
                    stroke: 'white',
                    strokeWidth: 2,
                  },
                }}
                data={[
                  { x: 'Sueldo', y: 856 },
                  { x: 'Puntos', y: 500 },
                  { x: 'Bono', y: 2000 },
                ]}
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
