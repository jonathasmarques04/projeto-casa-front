import { Box, Button, Grid, Input, TextField, Typography } from "@mui/material";
import { useState } from 'react';
import $ from "jquery";


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
        <Box display={'grid'}>
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
