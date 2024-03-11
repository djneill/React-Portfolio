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
          name="description"
          content="Experienced fullstack software engineer and web developer. Explore my portfolio and contact me for your website development needs."
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="fullstack software engineer, web developer, portfolio, website development"
        />
        <meta property="og:title" content="Fullstack Software Engineer & Web Developer | DJ Neill" />
        <meta property="og:description" content="Experienced fullstack software engineer and web developer. Explore my portfolio and contact me for your website development needs." />
        <meta property="og:image" content="https://djneill.com/images/background/meta.webp" />
        <meta property="og:url" content="https://djneill.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fullstack Software Engineer & Web Developer | DJ Neill" />
        <meta name="twitter:description" content="Experienced fullstack software engineer and web developer. Explore my portfolio and contact me for your website development needs." />
        <meta name="twitter:image" content="https://djneill.com/images/background/meta.webp" />


        <meta name="DJ Neill" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://djneill.com/" />
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

      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
