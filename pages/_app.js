import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { useState } from "react";
import Copyright from "../components/Copyright";
import Router from "next/router";
import Loading from "../components/Loading";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <>
      {loading && <Loading />}
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <div>
        <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Component
          {...pageProps}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        <Footer />
        <Copyright />
      </div>
    </>
  );
}

export default MyApp;
