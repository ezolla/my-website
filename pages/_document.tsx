import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang={'en'}>
        <Head>
          {/* SEO */}
          <link rel='shortcut icon' href='/public/favicon.ico' />
          <link rel='canonical' href='https://ethanzoller.com' />
          <meta
            name='description'
            content='Frontend Software Engineer in Seattle, WA'
          />
          <meta name='author' content='Ethan Zoller' />
          <meta httpEquiv='Content-Language' content='en' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
