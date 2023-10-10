import localFont from "@next/font/local";
import MainSuperior from "./components/MainSuperior";
import MainCentral from "./components/MainCentral";
import React from "react";
import MainInput from "./components/MainInput";
import Header from "./components/Header";
import CardInput from "./components/Card";

import Footer from "./components/Footer";

const openSansExtraBold = localFont({
  src: '../../../public/Causten-Regular.otf' 
 })

const imagem = {
  imagem1: '/logo.svg',
  imagem2: '/instagram.svg',
}

function Home() {
  return (
    <>
      <Header />
      <MainSuperior />
      <MainCentral />
      <MainInput />
      <CardInput />
      <Footer />
    </>
  );
}
export default Home;

