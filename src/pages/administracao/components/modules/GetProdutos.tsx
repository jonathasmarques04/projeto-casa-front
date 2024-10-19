import {
  Grid,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  TableHead,
  Table
} from "@mui/material";
import { useEffect, useState } from "react";

import dynamic from 'next/dynamic';

const DynamicImage = dynamic(() => import('next/image'), { ssr: false });

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
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    getProdutos();
    setIsClient(true)
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
      <Table>
      <TableHead>
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
      </TableHead>
      <TableBody id="tabela-produtos">
        {produtos.map((produto, index) => (
          <TableRow key={index}>
            <TableCell>{produto.idProduto}</TableCell>
            <TableCell>{produto.titulo}</TableCell>
            <TableCell>{produto.quartos}</TableCell>
            <TableCell>{produto.suites}</TableCell>
            <TableCell>{produto.banheiros}</TableCell>
            <TableCell>{produto.areaUtil}m²</TableCell>
            <TableCell>{produto.areaTotal}m²</TableCell>
            <TableCell>{produto.localizacao}</TableCell>
            <TableCell>
              {isClient && (
                <DynamicImage
                  src={produto.imagem}
                  width={50}
                  height={50}
                  alt="Imagem"
                />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Grid>
  );
}

export default ProdutosCadastrados;
