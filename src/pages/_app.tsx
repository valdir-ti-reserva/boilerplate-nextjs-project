import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/globals'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>React Avançado - Boilerplate</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <meta
                    name="description"
                    content="A simple project building a boilerplate"
                />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default App
