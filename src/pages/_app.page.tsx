import { AppProps } from 'next/app'
import AppContainer from 'src/containers/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  )
}
