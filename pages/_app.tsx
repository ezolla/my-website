import Head from 'next/head'
import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const App = (props: AppProps): JSX.Element => {
  return <AppContent {...props} />
}

export default App

const AppContent = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Ethan Zoller</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />

        {/* Google Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #EEEEEE;
    --color-grey: #AAAAAA;
    --color-silver: #777777;
    --color-black: #222222;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--color-black);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-white);
    margin: 0;
  }

  h1 {
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }

  h2, h3 {
    font-size: 14px;
    font-weight: 400;
    line-height: 22.4px;
  }

  p {
    color: var(--color-grey);
    margin: 0;
    font-size: 14px;
    line-height: 22.4px;
  }

  a {
    font-size: 14px;
    line-height: 22.4px;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
  
  img {
    user-select: none;
    user-drag: none;
  }

  input, select, textarea, button {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  li {
    color: var(--color-grey);
    font-size: 14px;
    line-height: 22.4px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`
