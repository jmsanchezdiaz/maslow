import { CompensationsProvider } from '../context/CompensationsContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CompensationsProvider>
      <Component {...pageProps} />
    </CompensationsProvider>
  )
}

export default MyApp
