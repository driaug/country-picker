import 'tailwindcss/tailwind.css'
import {AppProps} from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>React Country Selector</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key={'viewport'} />
      <meta name="description" content="A pretty cool country selector for React!" key={'description'} />
      <meta name="keywords" content="React, country, forms, tailwind" key={'keywords'} />
      <meta name="theme-color" content="#5D85F2" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default App
