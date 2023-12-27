import localFont from "@next/font/local";
import MainSuperior from "./components/MainSuperior";
import MainCentral from "./components/MainCentral";
import React, { useState } from "react";
import MainInput from "./components/MainInput";
import Header from "./components/Header";
import CardInput, { fetchCard } from "./components/Card";
import { useEffect } from "react";

import Footer from "./components/Footer";
import { useRouter } from "next/router";

const openSansExtraBold = localFont({
  src: '../../../public/Causten-Regular.otf' 
 })

function Home() {

  const router = useRouter();
  const idProduto = router.query.idProduto;
  const [apiCard, setApiCard] = useState<string[]>([]);

  useEffect(() => {
    if (typeof idProduto === 'string') {
      const idProdutoNumber = parseInt(idProduto, 10);
      if (!isNaN(idProdutoNumber)) {
        const param = idProdutoNumber.toString();
        fetchCard(param)
          .then((card) => {
            setApiCard(card);
          });
        
      }
    }
  }, [idProduto]);


  return (
    <>
      <Header />
      <MainSuperior />
      <MainCentral />
      <MainInput />
      <CardInput apiInformations={apiCard} />
      <Footer />
    </>
  );
}
export default Home;

