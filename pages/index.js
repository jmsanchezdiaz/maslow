import Head from 'next/head'
import { Card, ConfirmationModal, GraphicRepresentation } from '../components'
import { useCompensations } from '../context/CompensationsContext'
import useModal from '../hook/useModal'

export default function Home() {
  const { compensations, total, amountOfMoney } = useCompensations()
  const { isOpen, closeModal, openModal } = useModal(false)

  return (
    <div id="container" className="relative p-4">
      <Head>
        <title>MASLOW Challenge</title>
        <meta
          name="description"
          content="My application for maslow challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex gap-4">
        <main className="flex-1 flex flex-col gap-8">
          {compensations?.map((compesation, i) => (
            <Card key={i + compesation.title} compensation={compesation} />
          ))}
        </main>
        <aside className="space-y-4">
          <GraphicRepresentation compensations={compensations} />
          <section className="shadow-lg space-y-2 p-4">
            <div className="flex justify-between align-middle opacity-60">
              <h4 className="text-md">Para distribuir</h4>
              <span style={{ color: amountOfMoney < 0 ? 'red' : 'black' }}>
                ARS {amountOfMoney}
              </span>
            </div>
            <div className="font-semibold flex justify-between align-middle">
              <h4 className="text-md">Total</h4>
              <span>ARS {total}</span>
            </div>
          </section>
          <button onClick={openModal} className="btn btn-success float-right">
            Enviar confirmación
          </button>
        </aside>
      </div>
      <ConfirmationModal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}
