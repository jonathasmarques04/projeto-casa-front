import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/logo-icon.svg" />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
      <body style={{ margin: '0' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
