import * as React from "react";
import Header from "./components/Header";
import MainSuperior, { fetchInformacoesSuperiorApi } from "./components/MainSuperior";
import MainCentral, { fetchInformacoesApi } from "./components/MainCentral";
import Carrossel from "./components/MainCarrossel";
import Footer from "./components/Footer";
import { fetchImagensDaAPI } from './components/MainCarrossel'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Empreendimento() {
  const items = [
    { src: "" },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [apiInformation, setApiInformation] = useState<string[]>([]);
  const [apiSuperiorInformation, setApiSuperiorInformation] = useState<string[]>([]);

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
  const idProduto = router.query.idProduto;

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
        fetchInformacoesApi(param).then((informacoes) => {
          setApiInformation(informacoes)
        })
        fetchInformacoesSuperiorApi(param).then((informations) => {
          setApiSuperiorInformation(informations)
        })
      }
    }
  }, [idProduto]);

  return (
    <>
      <Header />
      <MainSuperior apiInformations={apiSuperiorInformation} />
      <MainCentral apiInformations={apiInformation} />
      <Carrossel apiImages={apiImages} />
      <Footer />
    </>
  );
}

export default Empreendimento;

