import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Diego Hermida Portfolio" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>Diego Hermida Dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
