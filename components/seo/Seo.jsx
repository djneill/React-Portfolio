import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `DJ Neill Full-Stack Software Engineer`}
      </title>
    </Head>
  </>
);

export default Seo;
