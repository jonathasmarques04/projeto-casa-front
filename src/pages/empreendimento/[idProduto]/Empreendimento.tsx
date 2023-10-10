import * as React from "react";
import Header from "./components/Header";
import MainSuperior from "./components/MainSuperior";
import MainCentral from "./components/MainCentral";

import { Grid, Slide } from "@mui/material";
import Carousel from 'react-material-ui-carousel'

import localFont from "@next/font/local";
import Image from "next/image";

const openSansExtraBold = localFont({
  src: "../../../../public/Causten-Regular.otf",
});

function Empreendimento() {
  const items = [
    { src: "/informacoes-1.svg" },
    { src: "/informacoes-2.svg" },
    { src: "/informacoes-3.svg" },
    { src: "/informacoes-4.svg" },
    { src: "/informacoes-5.svg" }
  ];

  return (
    <>
      <Header />
      <MainSuperior />
      <MainCentral />
      <Grid container>
        <Grid item>
          <Carousel>
            {items.map((item, i) => (
              <Slide key={i} direction="right" in={true}>
                <Grid container justify="center">
                  <Image
                    src={item.src}
                    width={300}
                    height={300}
                    alt="Imagem"
                  />
                </Grid>
              </Slide>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
}

export default Empreendimento;