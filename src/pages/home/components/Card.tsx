import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import localFont from "@next/font/local";

import React, { useState } from "react";

const openSansExtraBold = localFont({
  src: "../../../../public/Causten-Regular.otf",
});

interface Produto {
  imagem: string;
  suites: string;
  areaUtil: string;
  areaTotal: string;
  titulo: string;
}

interface ApiResponse {
  produto: Produto;
}

interface ApiInformations {
  apiInformations: string[];
}

export async function fetchCard(param: string): Promise<string[]> {
  try {
    const response = await fetch(`http://localhost:3020/produto/${param}`);
    if (!response.ok) {
      throw new Error("Erro na requisição da API");
    }

    const data = await response.json();
    const produtos: Produto = data.produto;

    const information: string[] = [
      produtos.imagem,
      produtos.suites,
      produtos.areaUtil,
      produtos.areaTotal,
      produtos.titulo,
    ];

    return information;
  } catch (error) {
    console.error("Erro ao buscar informações da API:", error);
    return [];
  }
}

function CardInput({ apiInformations }: ApiInformations) {
  const [apiInformation, setApiInformation] =
    useState<string[]>(apiInformations);

  return (
    <Card sx={{ maxWidth: 350, borderRadius: 4 , margin: "auto", mb: 8, boxShadow: 'gray'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={apiInformations[0]}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {apiInformations[4]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {apiInformations[1]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {apiInformations[3]}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default CardInput;
