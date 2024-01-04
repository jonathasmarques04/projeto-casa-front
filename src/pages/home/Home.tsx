import MainSuperior from "./components/MainSuperior";
import MainCentral from "./components/MainCentral";
import React, { useState, useEffect } from "react";
import MainInput from "./components/MainInput";
import Header from "./components/Header";
import CardInput, { fetchCard } from "./components/Card";

import Footer from "./components/Footer";

function Home() {
  const [apiCard, setApiCard] = useState<string[]>([]);

  useEffect(() => {
    fetchCard("62").then((informacoes) => {
      setApiCard(informacoes);
    });
  }, []);

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
