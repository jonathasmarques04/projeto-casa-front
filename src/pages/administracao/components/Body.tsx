import {
  Button,
  Container,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

interface Produto {
  quartos: string;
  suites: string;
  banheiros: string;
  areaUtil: string;
  areaTotal: string;
  titulo: string;
}

interface ApiInformations {
  apiInformations: string[];
}

export async function fetchInformacoesApi(): Promise<string[]> {
  try {
    const response = await fetch(`http://localhost:3020/produto/`);
    if (!response.ok) {
      throw new Error("Erro na requisição da API");
    }

    const data = await response.json();
    const produtos: Produto = data.produto;

    const information: string[] = [
      produtos.quartos,
      produtos.banheiros,
      produtos.suites,
      produtos.areaUtil,
      produtos.areaTotal,
      produtos.titulo,
    ];

    return information;
  } catch (error) {
    console.error("Erro ao buscar informações da API:", error);
    return [];
  }
}

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
        <TableBody id="tabela-produtos">
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Casa aconchegante</TableCell>
            <TableCell>
              Uma casa charmosa e confortável para toda a família
            </TableCell>
            <TableCell>3</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>150m²</TableCell>
            <TableCell>300m²</TableCell>
            <TableCell>Localização A</TableCell>
            <TableCell>
              <img src="/capturada.png" width={100} height={100} alt="Casa 1" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Apartamento Moderno</TableCell>
            <TableCell>
              Um apartamento com design moderno e ótima vista
            </TableCell>
            <TableCell>2</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>80m²</TableCell>
            <TableCell>100m²</TableCell>
            <TableCell>Localização B</TableCell>
            <TableCell>
            <img src="/capturada.png" width={100} height={100} alt="Casa 1" />
            </TableCell>
          </TableRow>
          {/* Adicione mais linhas conforme necessário */}
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
          <Button variant="contained" color="secondary" type="submit">
            Excluir
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Body;
