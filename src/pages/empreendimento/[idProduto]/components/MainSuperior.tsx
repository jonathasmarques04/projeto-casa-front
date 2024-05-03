import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Image from "next/image";
import { useState } from "react";
import { Outfit } from 'next/font/google'
import { sxUnicGreatBox } from "@/styles/stylesEmpreendimento";
import { useRouter } from "next/router";

const outfit = Outfit({ subsets: ["latin"], weight: '300' })

interface Produto {
  titulo: string;
  descricao: string;
  localizacao: string;
  imagem: string;
  areaTotal: string;
}

interface ApiInformations {
  apiInformations: string[];
}

export async function fetchInformacoesSuperiorApi(
  param: string
): Promise<string[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_PRODUTO}/${param}`);
    if (!response.ok) {
      throw new Error("Erro na requisição da API");
    }

    const data = await response.json();
    const produtos: Produto = data;

    const information: string[] = [
      produtos.titulo,
      produtos.descricao,
      produtos.localizacao,
      produtos.imagem,
      produtos.areaTotal
    ];

    return information;
  } catch (error) {
    console.error("Erro ao buscar informações da API:", error);
    return [];
  }
}

function MainSuperior({ apiInformations }: ApiInformations) {
  const [apiInformation, setApiInformation] =
    useState<string[]>(apiInformations);
  const router = useRouter();

  React.useEffect(() => {
    const delay = 1000; // 1 segundo de atraso
    const timeoutId = setTimeout(() => {
      if (apiInformations.length === 0) {
        router.push('/404');
      }
    }, delay);
  
    return () => clearTimeout(timeoutId);
  }, [apiInformations, router]);

  return (
    <Grid container width='90%' m='auto'>
      <Grid
        item
        xs={12}
        sx={{
          borderRadius: "15px",
          backgroundSize: "100%",
          backgroundPosition: "100%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${apiInformations && apiInformations.length > 3 ? apiInformations[3] : '/imagem-predio.svg'}")`,
        }}
      >
        <Box pl={1} mt={4}>
          <Typography
            sx={{ color: "#FFF" }}
            className={outfit.className}
            variant="h3"
          >
            {apiInformations && apiInformations.length > 0 ? apiInformations[0] : 'Titulo'}
          </Typography>
        </Box>
        <Box ml={1} mb={2}>
          <Typography
            sx={{ color: "#FFF" }}
            className={outfit.className}
            variant="h6"
          >
            Com lazer premium e integrado a uma nova praça memorial de {apiInformations && apiInformations.length > 0 ? apiInformations[4] : ''}m²
          </Typography>
        </Box>
        <Box
          mb={2}
          ml={1}
          sx={sxUnicGreatBox}
        >
          <Image
            src="/vetor.svg"
            width={25}
            height={25}
            alt="Picture of the author"
          />
          <Typography variant="h6" className={outfit.className} sx={{ color: "#111820" }}>
          {apiInformations && apiInformations.length > 0 ? apiInformations[2] : ''}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
export default MainSuperior;
