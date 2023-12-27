import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

interface ImageProps {
  src: string;
  width: number;
  height: number;
}

interface FooterProps {
  [key: string]: ImageProps;
}

const images: FooterProps = {
  imagem1: { src: '/logo.svg', width: 120, height: 120 },
  imagem2: { src: '/instagram.svg', width: 30, height: 120 },
};

const styles = {
  container: {
    borderTop: '3px solid red',
  },
  link: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
};

const Footer: React.FC = () => {
  return (
    <Grid container maxWidth="xl" mt={8} xs={12} sx={styles.container}>
      {Object.keys(images).map((key) => {
        const image = images[key];
        return (
          <Grid item key={key}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="https://www.instagram.com/ca.sa.construtora/"
              sx={styles.link}
              aria-label={`Link para ${key}`}
            >
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={`Imagem ${key}`}
              />
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Footer;