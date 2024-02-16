import * as React from "react";
import { Grid, Slide, Box, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import localFont from "@next/font/local";
import Image from "next/image";
import { sxButtonMaior } from "../../../../styles/stylesEmpreendimento";

import { useState } from "react";

const openSansExtraBold = localFont({
  src: "../../../../../public/Causten-Regular.otf",
});

interface Produto {
  imagem: string;
  imagem2: string;
  imagem3: string;
  imagem4: string;
  imagem5: string;
  imagem6: string;
  imagem7: string;
  imagem8: string;
  imagem9: string;
  imagem10: string;
  imagem11: string;
  imagem12: string;
}

interface ApiResponse {
  produto: Produto;
}

interface CarrosselProps {
  apiImages: string[];
}

export async function fetchImagensDaAPI(param: string): Promise<string[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_PRODUTO}/${param}`);
    if (!response.ok) {
      throw new Error("Erro na requisição da API");
    }

    const data = await response.json();
    const produtos: Produto = data.produto;
    const imagens: string[] = [];

    for (let i = 1; i <= 12; i++) {
      const key = `imagem${i}` as keyof Produto;
      const imagem = produtos && produtos[key];
      if (imagem) {
        imagens.push(imagem);
      }
    }

    return imagens;
  } catch (error) {
    console.error("Erro ao buscar imagens da API:", error);
    return [];
  }
}

function Carrossel({ apiImages }: CarrosselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : apiImages.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < apiImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Grid container xs={12} sx={{ margin: 0, display: "contents" }}>
      <Grid
        item
        pt={6}
        sx={{ display: "flex", margin: "auto", textAlign: "center" }}
      >
        <Button
          disableElevation
          color="error"
          variant="contained"
          sx={sxButtonMaior}
          className={openSansExtraBold.className}
          id="galeria"
        >
          GALERIA
        </Button>
      </Grid>
      <Grid item sx={{ margin: "auto" }}>
        <Box mt={12} display="flex" justifyContent="center">
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              onClick={handlePrev}
              sx={{ "@media (max-width: 490px)": { mr: 3 } }}
            >
              <ArrowBackIosNewIcon color="error" />
            </Button>
            <Slide direction="right" in={true}>
              <Grid
                display="flex"
                justifyContent="center"
                margin={"auto"}
                sx={{
                  "@media (max-width: 760px)": { width: 350, height: 450 },
                  "@media (max-width: 490px)": {
                    width: 200,
                    height: 450,
                    mt: 0,
                    ml: 0,
                    mr: 0,
                  },
                }}
              >
                <Image
                  src={apiImages[activeIndex]}
                  width={500}
                  height={500}
                  alt="Imagem"
                  style={{ borderRadius: "25px" }}
                />
              </Grid>
            </Slide>
            <Button
              sx={{ "@media (max-width: 490px)": { ml: 3 } }}
              onClick={handleNext}
            >
              <ArrowForwardIosIcon color="error" />
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Carrossel;
function setActiveIndex(arg0: (prevIndex: any) => number) {
  throw new Error("Function not implemented.");
}
