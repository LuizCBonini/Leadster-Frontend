import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          as="font"
          crossOrigin=""
          href="/fonts/PlusJakartaSans-BoldItalic.ttf"
          rel="preload"
          type="font/ttf"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
