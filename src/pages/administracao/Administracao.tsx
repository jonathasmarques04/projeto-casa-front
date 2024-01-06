import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import Header from "./components/Header";

function Administracao() {
  return (
    <>
    <Header />
    <Container>
      <Typography variant="h1">Administração de Produtos</Typography>

      <div>
        {/* Formulário de cadastro de produtos */}
        <Typography variant="h2">Cadastro de Produto</Typography>
        <form id="form-cadastro">
          {/* ... Other form fields */}
          <TextField label="Título" id="titulo" variant="outlined" required fullWidth margin="normal" />

          {/* ... Repeat similar TextField components for other fields */}

          <Button variant="contained" color="primary" type="submit">
            Cadastrar
          </Button>
        </form>

        {/* Tabela de produtos */}
        <Typography variant="h2">Produtos Cadastrados</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>idProduto</TableCell>
              <TableCell>titulo</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>quartos</TableCell>
              <TableCell>suites</TableCell>
              <TableCell>banheiros</TableCell>
              <TableCell>area-util</TableCell>
              <TableCell>area-total</TableCell>
              <TableCell>localizacao</TableCell>
              <TableCell>imagem</TableCell>
            </TableRow>
          </TableHead>
          <TableBody id="tabela-produtos">
            {/* JavaScript will add rows here */}
          </TableBody>
        </Table>

        {/* Formulário de exclusão de produtos */}
        <Typography variant="h2">Excluir Produto</Typography>
        <form id="form-exclusao">
          <TextField
            label="ID"
            id="id-exclusao"
            name="id-exclusao"
            type="number"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            inputProps={{ min: 1 }}
          />
          <Button variant="contained" color="secondary" type="submit">
            Excluir
          </Button>
        </form>
      </div>
    </Container>
    </>
  );
}
export default Administracao;
