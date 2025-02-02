import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const getLayout = Component?.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>ScholerMatch AI</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

