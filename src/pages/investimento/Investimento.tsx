import React from "react";
import Header from "./components/Header";
import localFont from "@next/font/local";
import MainSuperior from "./components/MainSuperior";
import MainBody from "./components/MainBody";
import Footer from "../home/components/Footer";
import Head from "next/head";

const openSansExtraBold = localFont({
  src: "../../../public/Causten-Regular.otf",
});

function Investimento() {
  return (
    <>
      <Head>
        <title>Investimento</title>
      </Head>
      <Header />
      <MainSuperior />
      <MainBody />
      <Footer />
    </>
  );
}
export default Investimento;
