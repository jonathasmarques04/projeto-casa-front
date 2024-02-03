import {
  Button,
  Container,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
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

interface IdProduto {
  idProduto: number
}

interface informacoes {
  produtos: Produto;
}

function Body() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [excluiProduto, deleteProduto] = useState<IdProduto[]>([]);

  useEffect(() => {
    getProdutos();
    deleteProdutos()
  }, []);

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

  const deleteProdutos = async (idProduto: number) => {
    try {
      const response = await fetch(`http://localhost:3020/produto/${idProduto}`, { method: 'DELETE' })
      const data = await response.json()

      if(data){
        deleteProduto(idProduto)
      }

    }
    catch(error){
      console.log(error)
    }
  }


  return (
    <Container>
      <Typography variant="h3">Administração de Produtos</Typography>

      <div>
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
          <TextField
            label="Imagem"
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

        {/* Tabela de produtos */}
        <Typography variant="h5">Produtos Cadastrados</Typography>
        <TableBody id="tabela-produtos">
          {produtos.map((produtos, index) => (
            <TableRow key={index}>
              <TableCell>{produtos.idProduto}</TableCell>
              <TableCell>{produtos.titulo}</TableCell>
              <TableCell>{produtos.quartos}</TableCell>
              <TableCell>{produtos.suites}</TableCell>
              <TableCell>{produtos.banheiros}</TableCell>
              <TableCell>{produtos.areaUtil}m²</TableCell>
              <TableCell>{produtos.areaTotal}m²</TableCell>
              <TableCell>{produtos.localizacao}</TableCell>
              <TableCell><Image src={produtos.imagem} width={50} height={50} alt="Imagem" /></TableCell>
            </TableRow>
          ))}
         
        </TableBody>
        {/* Formulário de exclusão de produtos */}
        <Typography variant="h5">Excluir Produto</Typography>
        <form id="form-exclusao">
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
      </div>
    </Container>
  );
}

export default Body;
