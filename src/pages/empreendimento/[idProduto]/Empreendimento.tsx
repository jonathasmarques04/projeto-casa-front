import * as React from "react";
import Header from "./components/Header";
import MainSuperior from "./components/MainSuperior";
import MainCentral from "./components/MainCentral";
import { Grid, Slide, Box, Button } from "@mui/material";
import localFont from "@next/font/local";
import Image from "next/image";
import Carrossel from "./components/MainCarrossel";
import Footer from "./components/Footer";
import { fetchImagensDaAPI } from './components/MainCarrossel'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const openSansExtraBold = localFont({
  src: "../../../../public/Causten-Regular.otf",
});



function Empreendimento() {
  const items = [
    { src: "/300849399_1378995459293714_446150436152832763_n.jpg" },
    { src: "/328724373_215163131081698_7412175627485027946_n.jpg" },
    { src: "/capturada.PNG" },
    { src: "/capturadaa.PNG" },
    { src: "/informacoes-5.svg" },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  const router = useRouter();
  const idProduto = router.query.idProduto; // Obtém o valor da query 'idProduto' da URL

  const [apiImages, setApiImages] = useState<string[]>([]);

  useEffect(() => {
    if (typeof idProduto === 'string') {
      const idProdutoNumber = parseInt(idProduto, 10);
      if (!isNaN(idProdutoNumber)) {
        const param = idProdutoNumber.toString();
        fetchImagensDaAPI(param)
          .then((imagens) => {
            setApiImages(imagens);
          });
      }
    }
  }, [idProduto]);

  return (
    <>
      <Header />
      <MainSuperior />
      <MainCentral />
      <Carrossel apiImages={apiImages} />
      <Footer />
    </>
  );
}

export default Empreendimento;
