import { Grid, Container } from "@mui/material";
import Cadastro from "./modules/Cadastro";
import ProdutosCadastrados from "./modules/GetProdutos";
import ExcluirProdutos from "./modules/ExcluiProdutos";

function Body() {
  return (
    <Container >
      <Cadastro />
      <ProdutosCadastrados />
      <ExcluirProdutos />
    </Container>
  );
}

export default Body;
