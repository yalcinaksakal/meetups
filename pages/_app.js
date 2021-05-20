import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "../components/ui/Spinner";
function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const start = () => setIsLoading(true);
    const end = () => setIsLoading(false);
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
        />
      </Head>
      <Layout>{isLoading ? <Spinner /> : <Component {...pageProps} />}</Layout>
    </>
  );
}

export default MyApp;
