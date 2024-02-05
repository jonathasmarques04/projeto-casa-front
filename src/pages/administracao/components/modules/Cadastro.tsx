import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Cadastro() {
  return (
    <Grid container display={"block"}>
      <Typography variant="h3">Administração de Produtos</Typography>
      <Typography variant="h5">Cadastro de Produto</Typography>
      <form  id="form-cadastro">
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
