import {
  Box,
  Divider,
  Fab,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CallIcon from "@mui/icons-material/Call";
import Popover from "@mui/material/Popover";
import SearchIcon from "@mui/icons-material/Search";

import localFont from "@next/font/local";

import React, { useEffect, useState } from "react";
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
  localizacao: string;
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
      produtos.localizacao,
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
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    getProdutos();
  }, []);

  const linkWhatsapp1 = () => {
    window.location.href = "https://contate.me/casaconstrutora";
  };

  const linkWhatsapp2 = () => {
    window.location.href = "https://contate.me/casa-construtora1";
  };

  const getProdutos = async () => {
    try {
      const response = await fetch(`http://localhost:3020/produto/`);
      const data = await response.json();

      if (data) {
        setProdutos(data.produtos);
      } else {
        console.log("Ocorreu um erro ao obter os produtos!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container>
      <Grid
        item
        gap={4}
        p={8}
        display="flex"
        xs={12}
        sx={{ textAlign: "center" }}
      >
        <Grid xs={12} md={6} item sx={{ margin: "auto" }}>
          <FormControl
            sx={{ m: 0, width: "35ch" }}
            color="error"
            variant="outlined"
          >
            <InputLabel color="error" htmlFor="outlined-adornment-password">
              buscar por localidade
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon color="error" />
                </InputAdornment>
              }
              label="Buscar por localidade"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} display={"contents"} sx={{ width: "90%" }}>
        {produtos
          .filter((produto) =>
            produto.localizacao.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((produtos, i) => (
            <>
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Link
                  sx={{ textDecoration: "none" }}
                  href={`/empreendimento/${produtos.idProduto}`}
                >
                  <Card
                    sx={{
                      maxWidth: 300,
                      borderRadius: 4,
                      margin: "auto",
                      mb: 8,
                      boxShadow: "gray",
                      cursor: "pointer",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image={produtos.imagem}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" className={openSansExtraBold.className} component="div">
                        {produtos.titulo}
                      </Typography>
                      <Typography variant="body1" className={openSansExtraBold.className} fontWeight={'600'} color="text.secondary">
                        {produtos.suites} { produtos.suites == '1' ? 'suíte' : 'suítes' }
                      </Typography>
                      <Typography variant="body1" className={openSansExtraBold.className} fontWeight={'600'} color="text.secondary">
                        {produtos.areaTotal}m²
                      </Typography>
                      <Typography variant="body1" className={openSansExtraBold.className} fontWeight={'600'} color="text.secondary">
                        {produtos.localizacao}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            </>
          ))}
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
                vertical: "top", 
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom", 
                horizontal: "center",
              }}
            >
              <Typography sx={{ width: "100%" }}>
                <Box sx={{ backgroundColor: "#0DC153", mb: 2, height: "6vh" }}>
                  <Typography variant="h6" ml={2} color={"white"}>
                    Olá! Clique em um dos nossos atendentes para ser atendido.
                  </Typography>
                </Box>
                <Box
                  onClick={linkWhatsapp2}
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <Image
                    src="/300849399_1378995459293714_446150436152832763_n.jpg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    style={{ borderRadius: "50%", marginLeft: 10 }}
                  />
                  <Typography variant="h6" color="#111820">
                    Saulo Carvalho
                  </Typography>
                </Box>
                <Divider sx={{ width: "100%", color: "#111820" }} />
                <Box
                  onClick={linkWhatsapp1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 2,
                    mb: 2,
                  }}
                >
                  <Image
                    src="/328724373_215163131081698_7412175627485027946_n.jpg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    style={{ borderRadius: "50%", marginLeft: 10 }}
                  />
                  <Typography variant="h6" color="#111820">
                    Gabriela de Sá
                  </Typography>
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
