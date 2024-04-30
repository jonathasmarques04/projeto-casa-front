import * as React from "react";

import { Box, Grid, Typography } from "@mui/material";

import Image from "next/image";
import { useState } from "react";
import { Outfit } from 'next/font/google'
import { sxGreatGridItem } from "@/styles/stylesEmpreendimento";

const outfit = Outfit({ subsets: ["latin"], weight: '300' })

interface Produto {
  quartos: string;
  suites: string;
  banheiros: string;
  areaUtil: string;
  areaTotal: string;
  titulo: string;
  descricao: string;
}

interface ApiInformations {
  apiInformations: string[];
}

export async function fetchInformacoesApi(param: string): Promise<string[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_PRODUTO}/${param}`);
    if (!response.ok) {
      throw new Error("Erro na requisição da API");
    }

    const data = await response.json();
    const produtos: Produto = data;

    const information: string[] = [
      produtos.quartos,
      produtos.banheiros,
      produtos.suites,
      produtos.areaUtil,
      produtos.areaTotal,
      produtos.titulo,
      produtos.descricao,
    ];

    return information;
  } catch (error) {
    console.error("Erro ao buscar informações da API:", error);
    return [];
  }
}

function MainCentral({ apiInformations }: ApiInformations) {
  const [apiInformation, setApiInformation] = useState<string[]>(apiInformations);

  const updatedInformacoes: {
    [key: string]: { src: string; tipografia: string };
  } = {
    informacoes1: {
      src: "/informacoes-1.svg",
      tipografia: `${apiInformations && apiInformations.length > 0 ? apiInformations[0] : ''} quartos`,
    },
    informacoes2: {
      src: "/informacoes-2.svg",
      tipografia: `${apiInformations && apiInformations.length > 0 ? apiInformations[1] : ''} suítes`,
    },
    informacoes3: {
      src: "/informacoes-3.svg",
      tipografia: `${apiInformations && apiInformations.length > 0 ? apiInformations[2] : ''} banheiros`,
    },
    informacoes4: {
      src: "/informacoes-4.svg",
      tipografia: `${apiInformations && apiInformations.length > 0 ? apiInformations[3] : ''}m² A. Útil`,
    },
    informacoes5: {
      src: "/informacoes-5.svg",
      tipografia: `${apiInformations && apiInformations.length > 0 ? apiInformations[4] : ''}m² A. Total`,
    },
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        mb={12}
        ml={12}
        sx={{ "@media (max-width: 990px)": { ml: 2 } }}
      >
        <Box>
          <Typography
            sx={{ color: "#111820" }}
            mt={8}
            className={outfit.className}
            variant="h2"
          >
            {apiInformations && apiInformations.length > 0 ? apiInformations[5] : ''}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ color: "#111820" }}
            className={outfit.className}
            variant="h6"
          >
            {apiInformations && apiInformations.length > 0 ? apiInformations[6] : ''}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        sx={sxGreatGridItem}
        xs={12}
        sm={8}
        md={6}
        
      >
        {Object.keys(updatedInformacoes).map((key) => (
          <Box id="Informações" key={""} sx={{ textAlign: 'center', pt: { sm: 0, xs: 3 }, pb: { sm: 0, xs: 2 } }}>
            <Image
              src={updatedInformacoes[key].src}
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Typography
              className={outfit.className}
              sx={{
                color: "#FFF",
                "@media (max-width: 990px)": { fontSize: 14 },
                "@media (max-width: 500px)": { fontSize: 12 },
              }}
              variant="subtitle1"
            >
              {updatedInformacoes[key].tipografia}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
export default MainCentral;
