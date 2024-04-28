import { Container } from "@mui/material";
import Cadastro from "./modules/Cadastro";
import ExcluirProdutos from "./modules/ExcluiProdutos";
import ProdutosCadastrados from "./modules/GetProdutos";

function Body() {
  return (
    <Container >
      <Cadastro />
      {/* <ProdutosCadastrados /> */}
      <ExcluirProdutos />
    </Container>
  );
}

export default Body;
