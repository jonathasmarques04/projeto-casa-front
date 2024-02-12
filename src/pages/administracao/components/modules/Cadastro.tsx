import { Box, Button, Grid, Input, TextField, Typography } from "@mui/material";
import { useState } from "react";
import $ from "jquery";

interface Produto {
  titulo: string;
  descricao: string;
  quartos: number;
  suites: number;
  banheiros: number;
  areaUtil: number;
  areaTotal: number;
  localizacao: string;
  imagem: string;
  imagem1: string;
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

function Cadastro() {
  const [produto, setProduto] = useState<Produto>();

  const cadastrarProduto = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const titulo = event.currentTarget["titulo"].value;
    const descricao = event.currentTarget["descricao"].value;
    const quartos = event.currentTarget["quartos"].value;
    const suites = event.currentTarget["suites"].value;
    const banheiros = event.currentTarget["banheiros"].value;
    const areaUtil = event.currentTarget["areaUtil"].value;
    const areaTotal = event.currentTarget["areaTotal"].value;
    const localizacao = event.currentTarget["localizacao"].value;
    const imagem = event.currentTarget["imagem"].value;
    const imagem1 = event.currentTarget["imagem1"].value;
    const imagem2 = event.currentTarget["imagem2"].value;
    const imagem3 = event.currentTarget["imagem3"].value;
    const imagem4 = event.currentTarget["imagem4"].value;
    const imagem5 = event.currentTarget["imagem5"].value;
    const imagem6 = event.currentTarget["imagem6"].value;
    const imagem7 = event.currentTarget["imagem7"].value;
    const imagem8 = event.currentTarget["imagem8"].value;
    const imagem9 = event.currentTarget["imagem9"].value;
    const imagem10 = event.currentTarget["imagem10"].value;
    const imagem11 = event.currentTarget["imagem11"].value;
    const imagem12 = event.currentTarget["imagem12"].value;

    const produto = {
      titulo,
      descricao,
      quartos,
      suites,
      banheiros,
      areaUtil,
      areaTotal,
      localizacao,
      imagem,
      imagem1,
      imagem2,
      imagem3,
      imagem4,
      imagem5,
      imagem6,
      imagem7,
      imagem8,
      imagem9,
      imagem10,
      imagem11,
      imagem12,
    };

    try {
      const response = await fetch("http://localhost:3020/produto/1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });

      if (response.ok) {
        alert("Produto cadastrado com sucesso!");
        $("#form-cadastro").trigger("reset");
      } else {
        alert("Ocorreu um erro ao cadastrar o produto!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container display={"block"}>
      <Typography variant="h3">Administração de Produtos</Typography>
      <Typography variant="h5">Cadastro de Produto</Typography>
      <form id="form-cadastro">
        <TextField
          label="Título"
          id="titulo"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descrição"
          id="descricao"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Quartos"
          id="descricao"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Suítes"
          id="descricao"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Banheiros"
          id="descricao"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Área útil"
          id="descricao"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Área total"
          id="descricao"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Localização"
          id="descricao"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <Box display={"grid"}>
          <label htmlFor="imagem">Imagem:</label>
          <Input type="file" id="imagem" required />

          <label htmlFor="imagem">Imagem1:</label>
          <Input type="file" id="imagem1" required />

          <label htmlFor="imagem">Imagem2:</label>
          <Input type="file" id="imagem2" required />

          <label htmlFor="imagem">Imagem3:</label>
          <Input type="file" id="imagem3" required />

          <label htmlFor="imagem">Imagem4:</label>
          <Input type="file" id="imagem4" required />

          <label htmlFor="imagem">Imagem5:</label>
          <Input type="file" id="imagem5" required />

          <label htmlFor="imagem">Imagem6:</label>
          <Input type="file" id="imagem6" required />

          <label htmlFor="imagem">Imagem7:</label>
          <Input type="file" id="imagem7" required />

          <label htmlFor="imagem">Imagem8:</label>
          <Input type="file" id="imagem8" required />

          <label htmlFor="imagem">Imagem9:</label>
          <Input type="file" id="imagem9" required />

          <label htmlFor="imagem">Imagem10:</label>
          <Input type="file" id="imagem10" required />

          <label htmlFor="imagem">Imagem11:</label>
          <Input type="file" id="imagem11" required />

          <label htmlFor="imagem">Imagem12:</label>
          <Input type="file" id="imagem12" required />
        </Box>
        <Button
          sx={{ m: "auto", display: "block" }}
          type="submit"
          variant="contained"
          color="error"
        >
          Cadastrar Produto
        </Button>
      </form>
    </Grid>
  );
}

export default Cadastro;
