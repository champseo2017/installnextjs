import { Fragment } from "react";
import Head from "next/head";
import Router from "next/router";
import "../assets/css/nextjs-material-dashboard.css?v=1.0.0";
function MyApp({ Component, pageProps }) {
  const Layout = ({ children }) => {
    return <>{children}</>;
  };
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Like it, share it</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
