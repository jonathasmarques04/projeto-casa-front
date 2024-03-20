import {
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
import SearchIcon from "@mui/icons-material/Search";

import React, { useEffect, useState } from "react";
import { Outfit } from 'next/font/google'
import Modal from "@/components/ModalPhone";

const outfit = Outfit({ subsets: ["latin"], weight: '500' })

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
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_PRODUTO}`);
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
        sx={{ textAlign: "center", "@media (max-width: 420px)": {
          gap: 0,
          p: 2
        }, }}
      >
        <Grid xs={12} md={6} item sx={{ margin: "auto" }}>
          <FormControl
            sx={{ m: 0, width: "35ch", "@media (max-width: 320px)": {
              width: '30ch',
            }, }}
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
                      title={produtos.titulo}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" className={outfit.className} component="div">
                        {produtos.titulo}
                      </Typography>
                      <Typography variant="body1" className={outfit.className} color="text.secondary">
                        {produtos.suites} { produtos.suites == '1' ? 'suíte' : 'suítes' }
                      </Typography>
                      <Typography variant="body1" className={outfit.className} color="text.secondary">
                        {produtos.areaTotal}m²
                      </Typography>
                      <Typography variant="body1" className={outfit.className} color="text.secondary">
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
        <Modal />
      </Grid>
    </Grid>
  );
}
export default CardInput;
