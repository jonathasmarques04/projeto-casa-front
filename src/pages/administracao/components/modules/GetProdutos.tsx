import {
  Grid,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  TableHead,
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
  localizacao: string;
}

function ProdutosCadastrados() {
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

  return (
    <Grid xs={12}>
      <Typography variant="h5">Produtos Cadastrados</Typography>
      <TableBody id="tabela-produtos">
        <TableRow>
          <TableCell>ID do Produto</TableCell>
          <TableCell>Título</TableCell>
          <TableCell>Quartos</TableCell>
          <TableCell>Suítes</TableCell>
          <TableCell>Banheiros</TableCell>
          <TableCell>Área Útil</TableCell>
          <TableCell>Área Total</TableCell>
          <TableCell>Localização</TableCell>
          <TableCell>Imagem</TableCell>
        </TableRow>
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
            <TableCell>
              <Image
                src={produtos.imagem}
                width={50}
                height={50}
                alt="Imagem"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Grid>
  );
}

export default ProdutosCadastrados;
