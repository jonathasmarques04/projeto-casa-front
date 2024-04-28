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
    const [produtos, setProdutos] = useState<Produto[]>([]);
    
  
    useEffect(() => {
      getProdutos();
    }, []);
  
    const getProdutos = async () => {
      try {
        const response = await fetch(`http://localhost:3020/produto/`);
        const data = await response.json();
  
        if (data) {
          setProdutos(data);
        } else {
          console.log("Ocorreu um erro ao obter os produtos!");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const excluirProduto = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const idProdutoExclusao = event.currentTarget['id-exclusao'].value;
  
      try {
        const response = await fetch(`http://localhost:3020/produto/${idProdutoExclusao}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          getProdutos();
        } else {
          console.log('Falha ao excluir o produto.');
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
  