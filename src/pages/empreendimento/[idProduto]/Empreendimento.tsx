import * as React from "react";
import Header from "./components/Header";
import MainSuperior, {
  fetchInformacoesSuperiorApi,
} from "./components/MainSuperior";
import MainCentral, { fetchInformacoesApi } from "./components/MainCentral";
import Carrossel, { fetchImagensDaAPI } from "./components/MainCarrossel";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "@/components/Footer";

function Empreendimento() {
  const [apiInformation, setApiInformation] = useState<string[]>([]);
  const [apiSuperiorInformation, setApiSuperiorInformation] = useState<
    string[]
  >([]);

  const router = useRouter();
  const idProduto = router.query.idProduto;

  const [apiImages, setApiImages] = useState<string[]>([]);

  useEffect(() => {
    if (typeof idProduto === "string") {
      const idProdutoNumber = parseInt(idProduto, 10);
      if (!isNaN(idProdutoNumber)) {
        const param = idProdutoNumber.toString();
        fetchImagensDaAPI(param).then((imagens) => {
          setApiImages(imagens);
        });
        fetchInformacoesApi(param).then((informacoes) => {
          setApiInformation(informacoes);
        });
        fetchInformacoesSuperiorApi(param).then((informations) => {
          setApiSuperiorInformation(informations);
        });
      }
    }
  }, [idProduto]);

  return (
    <>
      <Head>
        <title>Empreendimento</title>
      </Head>
      <Header />
      <MainSuperior apiInformations={apiSuperiorInformation} />
      <MainCentral apiInformations={apiInformation} />
      <Carrossel apiImages={apiImages} />
      <Footer />
    </>
  );
}

export default Empreendimento;
