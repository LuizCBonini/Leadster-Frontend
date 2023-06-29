import Footer from '@components/Footer'
import Header from '@components/Header'
import { AppProps } from 'next/app'
import AppContainer from 'src/containers/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppContainer>
  )
}
