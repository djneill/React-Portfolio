import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/custom.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="Portfolio for Full Stack Software Engineer & Web Developer"
          content="Portfolio for Full Stack Software Engineer & Web Developer"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="Full Stack Software Engineer & Web Developer"
          content="Full Stack Software Engineer & Web Developer"
        />
        <meta name="ibthemes" content="ATFN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
