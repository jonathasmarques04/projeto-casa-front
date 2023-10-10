import * as React from "react";

import { Box, Grid, Typography } from "@mui/material";

import localFont from "@next/font/local";
import Image from "next/image";

const openSansExtraBold = localFont({
  src: "../../../../../public/Causten-Regular.otf",
});

const informacoes: { [key: string]: { src: string; tipografia: string } } = {
  informacoes1: { src: "/informacoes-1.svg", tipografia: "Oi 1" },
  informacoes2: { src: "/informacoes-2.svg", tipografia: "Oi 1" },
  informacoes3: { src: "/informacoes-3.svg", tipografia: "Oi 1" },
  informacoes4: { src: "/informacoes-4.svg", tipografia: "Oi 1" },
  informacoes5: { src: "/informacoes-5.svg", tipografia: "Oi 1" },
};

function MainCentral() {
  return (
    <>
      <Grid container>
        <Grid item mb={12} ml={2}>
          <Box>
            <Typography
              sx={{ color: "#111820" }}
              mt={8}
              className={openSansExtraBold.className}
              variant="h2"
            >
              Residencial Carvalho de Sá
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ color: "#111820" }}
              className={openSansExtraBold.className}
              variant="h6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              repellendus tempore dicta odio, laudantium quo commodi
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            margin: "auto",
            boxSizing: "border-box",
            position: "relative",
            width: "55%",
            height: "115px",
            background: "#242424",
            border: "1px solid #FFFFFF",
            borderRadius: "12px",
            alignItems: "center",
            justifyContent: 'center',
            gap: 10
          }}
        >
          {Object.keys(informacoes).map((key) => (
            <>
              <Box>
                <Image
                  src={informacoes[key].src}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <Typography className={openSansExtraBold.className} sx={{ color: "#FFF" }} variant="subtitle1">
                  {informacoes[key].tipografia}
                </Typography>
              </Box>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
export default MainCentral;
