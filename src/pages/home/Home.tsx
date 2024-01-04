import MainSuperior from "./components/MainSuperior";
import MainCentral from "./components/MainCentral";
import React, { useState, useEffect } from "react";
import MainInput from "./components/MainInput";
import Header from "./components/Header";
import CardInput, { fetchCard } from "./components/Card";

import Footer from "./components/Footer";
import { useRouter } from "next/router";

function Home() {
  const [apiCard, setApiCard] = useState<string[]>([]);
  const [filteredCard, setFilteredCard] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCard("62");
      setApiCard(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredProducts = apiCard.filter((product) => {
      const parsedProduct = JSON.parse(product);
      return parsedProduct.idProduto === 62;
    });

    setFilteredCard(filteredProducts);
  }, [apiCard]);

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
