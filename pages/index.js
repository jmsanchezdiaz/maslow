import Head from 'next/head'
import Card from '../components/Card'
import { useState } from 'react'

export default function Home() {
  const [compensations, setCompensations] = useState([
    {
      title: 'Sueldo mensual',
      subtitle: 'Sueldo base',
      value: 856,
      minValue: 500,
      maxValue: 2500,
      multiplier: 2,
      color: 'bg-emerald-500',
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

  return (
    <div>
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
            <Card key={i + compesation.title} {...compesation} />
          ))}
        </main>
        <aside>
          <section className="shadow-lg space-y-2 p-4">
            <h2 className="font-semibold">Tu compensación:</h2>
            <h4 className="opacity-80 text-sm">
              Representación grafica de tu compensación:{' '}
            </h4>

            <div className="space-y-2 ">
              {compensations?.map(({ title, color }, i) => (
                <div
                  key={title + i}
                  className="flex gap-2 justify-start align-middle"
                >
                  <span className={`p-2 w-5 h-5 ${color}`} />
                  <h4 className="opacity-80 text-sm">{title}</h4>
                </div>
              ))}
            </div>
          </section>
          <section className="shadow-lg space-y-2 p-4">
            <div className="flex justify-between align-middle opacity-60">
              <h4 className="text-md">Para distribuir</h4>
              <span>ARS 72</span>
            </div>
            <div className="font-semibold flex justify-between align-middle">
              <h4 className="text-md">Total</h4>
              <span>ARS 3556</span>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}
