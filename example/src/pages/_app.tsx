import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import Head from "next/head";
import GithubCorner from "react-github-corner";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Country Selector</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key={"viewport"}
        />
        <meta
          name="description"
          content="A pretty cool country selector for React!"
          key={"description"}
        />
        {/* Start favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#1f1f1f"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#4F58F5" />
        {/* End favicon */}
      </Head>
      <GithubCorner href={"https://github.com/driaug/react-country-selector"} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
