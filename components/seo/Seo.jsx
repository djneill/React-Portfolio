import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || DJ Neill - Full-Stack Software Engineer & Web Developer }`}
      </title>
    </Head>
  </>
);

export default Seo;
