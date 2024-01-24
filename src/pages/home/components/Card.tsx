import { Box, Divider, Fab, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CallIcon from "@mui/icons-material/Call";
import Popover from "@mui/material/Popover";

import localFont from "@next/font/local";

import React, { useState } from "react";
import Image from "next/image";

const openSansExtraBold = localFont({
  src: "../../../../public/Causten-Regular.otf",
});

interface Produto {
  idProduto: string;
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
      produtos.idProduto,
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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const linkWhatsapp1 = () => {
    window.location.href = "https://contate.me/casaconstrutora"
  };

  const linkWhatsapp2 = () => {
    window.location.href = "https://contate.me/casa-construtora1"
  };
  
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card
          onClick={handleClick}
          sx={{
            maxWidth: 350,
            borderRadius: 4,
            margin: "auto",
            mb: 8,
            boxShadow: "gray",
            cursor: "pointer",
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={apiInformations[1]}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {apiInformations[5]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {apiInformations[2]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {apiInformations[4]}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        sx={{ width: "95%", display: "flex", justifyContent: "end", mb: 2 }}
      >
        <Box>
          <Fab
            sx={{
              background: "green",
              color: "white",
              "&:hover": {
                background: "green",
              },
            }}
            aria-label="add"
            aria-describedby={id}
            onClick={handleClick}
          >
            <CallIcon />
          </Fab>
          <Grid xs={6}>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top", // Mude de 'bottom' para 'top'
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom", // Mude de 'top' para 'bottom'
                horizontal: "center",
              }}
            >
              <Typography sx={{ width: '100%' }}>
                <Box sx={{ backgroundColor: '#0DC153', mb: 2, height: '6vh' }}>
                  <Typography variant="h6" ml={2} color={'white'}>
                    Olá! Clique em um dos nossos atendentes para ser atendido.
                  </Typography>
                </Box>
                <Box onClick={linkWhatsapp2} sx={{ display: "flex", alignItems: 'center', gap: 2, mb: 2 }}>
                  <Image
                    src="/300849399_1378995459293714_446150436152832763_n.jpg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    style={{ borderRadius: '50%', marginLeft: 10 }}
                  />
                  <Typography variant="h6" color='#111820'>Saulo Carvalho</Typography>
                </Box>
                <Divider sx={{ width: '100%', color: '#111820' }} />
                <Box onClick={linkWhatsapp1} sx={{ display: "flex", alignItems: 'center', gap: 2, mt: 2, mb: 2 }}>
                  <Image
                    src="/328724373_215163131081698_7412175627485027946_n.jpg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    style={{ borderRadius: '50%', marginLeft: 10 }}
                  />
                  <Typography variant="h6" color='#111820'>Gabriela de Sá</Typography>
                </Box>
              </Typography>
            </Popover>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
export default CardInput;
