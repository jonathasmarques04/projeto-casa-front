import {
  Box,
  Button,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import $ from "jquery";

interface Produto {
  titulo: string;
  descricao: string;
  quartos: number;
  suites: number;
  banheiros: number;
  areaUtil: number;
  areaTotal: number;
  localizacao: string;
  imagem: string;
  imagem1: string;
  imagem2: string;
  imagem3: string;
  imagem4: string;
  imagem5: string;
  imagem6: string;
  imagem7: string;
  imagem8: string;
  imagem9: string;
  imagem10: string;
  imagem11: string;
  imagem12: string;
}

function Cadastro() {
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

  const cadastroProduto = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const titulo = event.currentTarget["titulo"].value;
    const descricao = event.currentTarget["descricao"].value;
    const quartos = event.currentTarget["quartos"].value;
    const suites = event.currentTarget["suites"].value;
    const banheiros = event.currentTarget["banheiros"].value;
    const areaUtil = event.currentTarget["areaUtil"].value;
    const areaTotal = event.currentTarget["areaTotal"].value;
    const localizacao = event.currentTarget["localizacao"].value;
    const imagem = event.currentTarget["imagem"].files[0]
    const imagem1 = event.currentTarget["imagem1"].files[0]
    const imagem2 = event.currentTarget["imagem2"].files[0]
    const imagem3 = event.currentTarget["imagem3"].files[0]
    const imagem4 = event.currentTarget["imagem4"].files[0]
    const imagem5 = event.currentTarget["imagem5"].files[0]
    const imagem6 = event.currentTarget["imagem6"].files[0]
    const imagem7 = event.currentTarget["imagem7"].files[0]
    const imagem8 = event.currentTarget["imagem8"].files[0]
    const imagem9 = event.currentTarget["imagem9"].files[0]
    const imagem10 = event.currentTarget["imagem10"].files[0]
    const imagem11 = event.currentTarget["imagem11"].files[0]
    const imagem12 = event.currentTarget["imagem12"].files[0]

    const fr = new FileReader();

  fr.readAsDataURL(imagem);

  let inputimagem: string | ArrayBuffer | null = '';

  fr.onload = function () {
    inputimagem = fr.result;
  };

  const fr1 = new FileReader();
  const fr2 = new FileReader();
  const fr3 = new FileReader();
  const fr4 = new FileReader();
  const fr5 = new FileReader();
  const fr6 = new FileReader();
  const fr7 = new FileReader();
  const fr8 = new FileReader();
  const fr9 = new FileReader();
  const fr10 = new FileReader();
  const fr11 = new FileReader();
  const fr12 = new FileReader();

  fr1.readAsDataURL(imagem1);
  fr2.readAsDataURL(imagem2);
  fr3.readAsDataURL(imagem3);
  fr4.readAsDataURL(imagem4);
  fr5.readAsDataURL(imagem5);
  fr6.readAsDataURL(imagem6);
  fr7.readAsDataURL(imagem7);
  fr8.readAsDataURL(imagem8);
  fr9.readAsDataURL(imagem9);
  fr10.readAsDataURL(imagem10);
  fr11.readAsDataURL(imagem11);
  fr12.readAsDataURL(imagem12);

  let inputimagem1: string | ArrayBuffer | null = '';
  let inputimagem2: string | ArrayBuffer | null = '';
  let inputimagem3: string | ArrayBuffer | null = '';
  let inputimagem4: string | ArrayBuffer | null = '';
  let inputimagem5: string | ArrayBuffer | null = '';
  let inputimagem6: string | ArrayBuffer | null = '';
  let inputimagem7: string | ArrayBuffer | null = '';
  let inputimagem8: string | ArrayBuffer | null = '';
  let inputimagem9: string | ArrayBuffer | null = '';
  let inputimagem10: string | ArrayBuffer | null = '';
  let inputimagem11: string | ArrayBuffer | null = '';
  let inputimagem12: string | ArrayBuffer | null = '';

  fr1.onload = function () {
    inputimagem1 = fr1.result;
  };

  fr2.onload = function () {
    inputimagem2 = fr2.result;
  };

  fr3.onload = function () {
    inputimagem3 = fr3.result;
  };

  fr4.onload = function () {
    inputimagem4 = fr4.result;
  };

  fr5.onload = function () {
    inputimagem5 = fr5.result;
  };

  fr6.onload = function () {
    inputimagem6 = fr6.result;
  };

  fr7.onload = function () {
    inputimagem7 = fr7.result;
  };

  fr8.onload = function () {
    inputimagem8 = fr8.result;
  };

  fr9.onload = function () {
    inputimagem9 = fr9.result;
  };

  fr10.onload = function () {
    inputimagem10 = fr10.result;
  };

  fr11.onload = function () {
    inputimagem11 = fr11.result;
  };

  fr12.onload = function () {
    inputimagem12 = fr12.result;
  };

  await new Promise(resolve => setTimeout(resolve, 200));

    try {
      const response = await $.ajax({
        type: "POST",
        url: `http://localhost:3020/produto`,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
          titulo: titulo,
          descricao: descricao,
          quartos: quartos,
          suites: suites,
          banheiros: banheiros,
          areaUtil: areaUtil,
          areaTotal: areaTotal,
          localizacao: localizacao,
          imagem: inputimagem,
          imagem1: inputimagem1,
          imagem2: inputimagem2,
          imagem3: inputimagem3,
          imagem4: inputimagem4,
          imagem5: inputimagem5,
          imagem6: inputimagem6,
          imagem7: inputimagem7,
          imagem8: inputimagem8,
          imagem9: inputimagem9,
          imagem10: inputimagem10,
          imagem11: inputimagem11,
          imagem12: inputimagem12,
        }),
        success: function (data) {
          console.log(data);
          if (data) {
            console.log("Produto cadastrado com sucesso!");
            window.location.reload()            
          } else {
            console.log("Ocorreu um erro!");
          }
        },
        error: function (error) {
          console.log(error);
        },
      });
      if (response) {
        getProdutos();
      } else {
        console.log("Falha no produto.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container display={"block"}>
      <Typography variant="h3">Administração de Produtos</Typography>
      <Typography variant="h5">Cadastro de Produto</Typography>
      <form id="form-cadastro" onSubmit={cadastroProduto}>
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
          id="quartos"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Suítes"
          id="suites"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Banheiros"
          id="banheiros"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Área útil"
          id="areaUtil"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Área total"
          id="areaTotal"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Localização"
          id="localizacao"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <Box display={"grid"}>
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
