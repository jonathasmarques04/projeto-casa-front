import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

function Body() {
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
          <Button variant="contained" color="secondary" type="submit">
            Excluir
          </Button>
        </form>
      </div>
    </Container>
  );
}
export default Body;
