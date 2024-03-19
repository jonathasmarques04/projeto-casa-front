import React from "react";
import Header from "./components/Header";
import MainSuperior from "./components/MainSuperior";
import MainBody from "./components/MainBody";
import Head from "next/head";
import Footer from "@/components/Footer";

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
