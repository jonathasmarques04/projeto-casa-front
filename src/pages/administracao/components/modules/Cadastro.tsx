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

function cadastrarProduto(produto: Produto) {
  $.ajax({
    url: "http://localhost:3020/produto/1",
    type: "POST",
    data: produto,
    success: function (data) {
      console.log("Produto cadastrado com sucesso: ", data);
    },
    error: function (error) {
      console.log("Erro ao cadastrar produto: ", error);
    },
  });
}

function Cadastro() {
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const produto = {
      titulo: event.currentTarget["titulo"].value,
      descricao: event.currentTarget["descricao"].value,
      quartos: event.currentTarget["quartos"].value,
      suites: event.currentTarget["suites"].value,
      banheiros: event.currentTarget["banheiros"].value,
      areaUtil: event.currentTarget["areaUtil"].value,
      areaTotal: event.currentTarget["areaTotal"].value,
      localizacao: event.currentTarget["localizacao"].value,
      imagem: event.currentTarget["imagem"].value,
      imagem1: event.currentTarget["imagem1"].value,
      imagem2: event.currentTarget["imagem2"].value,
      imagem3: event.currentTarget["imagem3"].value,
      imagem4: event.currentTarget["imagem4"].value,
      imagem5: event.currentTarget["imagem5"].value,
      imagem6: event.currentTarget["imagem6"].value,
      imagem7: event.currentTarget["imagem7"].value,
      imagem8: event.currentTarget["imagem8"].value,
      imagem9: event.currentTarget["imagem9"].value,
      imagem10: event.currentTarget["imagem10"].value,
      imagem11: event.currentTarget["imagem11"].value,
      imagem12: event.currentTarget["imagem12"].value,
    };

    cadastrarProduto(produto);
  };

  return (
    <Grid container display={"block"}>
      <Typography variant="h3">Administração de Produtos</Typography>
      <Typography variant="h5">Cadastro de Produto</Typography>
      <form id="form-cadastro" onSubmit={handleSubmit}>
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
