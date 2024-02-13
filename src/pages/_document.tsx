import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/logo-icon.svg" />
      <body style={{ margin: '0' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
