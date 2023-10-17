import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const imagem: { [key: string]: { src: string; width: number; height: number } } = {
  imagem1: { src: '/logo.svg', width: 120, height: 120 },
  imagem2: { src: '/instagram.svg', width: 30, height: 120 },
};

function Footer() {
  return (
    <Grid container maxWidth="xl" mt={8} xs={12} sx={{ borderTop: '3px solid red' }}>
      {Object.keys(imagem).map((key) => (
        <Grid item key={key}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="https://www.instagram.com/ca.sa.construtora/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image
              src={imagem[key].src}
              width={imagem[key].width}
              height={imagem[key].height}
              alt={`Image ${key}`}
            />
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default Footer;





