import {
    Button,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";

  
  interface Produto {
    idProduto: string;
    titulo: string;
    areaUtil: string;
    quartos: string;
    suites: string;
    banheiros: string;
    areaTotal: string;
    imagem: string;
    localizacao: string
  }
  
  interface informacoes {
    produtos: Produto;
  }
  
  function ExcluirProdutos() {
    const excluirProduto = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const idProdutoExclusao = event.currentTarget['id-exclusao'].value;
  
      try {
        const response = await fetch(`http://localhost:3020/produto/${idProdutoExclusao}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          window.location.reload()
        } else {
          console.warn('Falha ao excluir o produto.');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <Grid>
          <Typography variant="h5">Excluir Produto</Typography>
          <form id="form-exclusao" onSubmit={excluirProduto}>
            <TextField
              label="ID do Produto"
              id="id-exclusao"
              name="id-exclusao"
              type="number"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              inputProps={{ min: 1 }}
            />
            <Button sx={{ m: "auto", display: "block" }} variant="contained" color="error" type="submit">
              Excluir
            </Button>
          </form>
      </Grid>
    );
  }
  
  export default ExcluirProdutos;
  