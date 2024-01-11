import MainSuperior from "./components/MainSuperior";
import MainCentral from "./components/MainCentral";
import React, { useState, useEffect } from "react";
import MainInput from "./components/MainInput";
import Header from "./components/Header";
import CardInput, { fetchCard } from "./components/Card";
import { AuthProvider } from "../../contexts/AuthContext";
import { api } from "../../services/api";

import Footer from "./components/Footer";

function Home() {
  const [apiCard, setApiCard] = useState<string[]>([]);

  useEffect(() => {
    fetchCard("62").then((informacoes) => {
      setApiCard(informacoes);
    });
  }, []);

  useEffect(() => {
    api.get("/usuarios");
  }, []);

  return (
    <AuthProvider>
      <Header />
      <MainSuperior />
      <MainCentral />
      <MainInput />
      <CardInput apiInformations={apiCard} />
      <Footer />
    </AuthProvider>
  );
}
export default Home;
