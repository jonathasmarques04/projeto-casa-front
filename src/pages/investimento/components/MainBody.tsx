import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import localFont from "@next/font/local";
import Image from "next/image";
import { styleGrayBox, styleTypography, sxGridContainerFade } from "./styles";

const openSansExtraBold = localFont({
  src: "../../../../public/Causten-Regular.otf",
});

const informacoes = [
  {
    titulo: "AQUISIÇÃO DE IMÓVEL NA PLANTA COMO INVESTIDOR",
    descricao:
      "Trata-se da possibilidade de adquirir um imóvel na planta, com descontos atrativos, acima dos que são praticados no mercado consumidor, na qualidade de investidor, com a finalidade de participar de parte dos lucros do empreendimento. Ao final da obra, estima-se retorno médio de 30% a 50% sobre o capital investido. Aceitamos bens em permuta e veículos como parte do pagamento. Consulte nossa equipe e veja os empreendimentos disponíveis no momento.",
  },
  {
    titulo: "FINANCIAMENTO DE LOTE E CONSTRUÇÃO",
    descricao:
      "Trata-se de investimento que possui baixo aporte de capital próprio, com possibilidade de utilização de recursos do seu FGTS. Nesta modalidade, o investidor contrai financiamento imobiliário dos recursos de aquisição do lote e de construção do empreendimento imobiliário. A Construtora elabora a previsão de custos e de retorno do investimento, executa a obra e auxilia o investidor a revende-lo. Consulte nossa equipe e solicite uma proposta!",
  },
  {
    titulo: "LOTE EM PERMUTA",
    descricao:
      "Se você possui um lote ou imóvel subaproveitado e gostaria de obter maior retorno financeiro, mas não possui os recursos necessários par um empreendimento imobiliário, ofereca-o para a Ca.Sa Construtora. Na incorporação por permuta, a Ca.Sa se responsabiliza pela edificação do empreendimento – do projeto até a conclusão das obras – e você participa dos resultados, obtendo como retorno unidades imobiliárias prontas para a venda. Também auxiliamos o investidor na revenda das unidades.",
  },
  {
    titulo: "QUOTISTA DE EMPREENDIMENTO",
    descricao:
      "Esta modalidade ainda está em desenvolvimento. Quando disponível, permitirá que o investidor faca o aporte de qualquer valor e receba, no prazo determinado, o lucro proporcional ao capital investido. Fique atento aos nossos canais, para saber quando essa modalidade estará disponível.",
  },
];

function MainBody() {
  return (
    <>
      <Grid container sx={sxGridContainerFade}>
        <Grid
          item
          mt={7}
          bgcolor="#FF2700"
          height={250}
          width="80%"
          display={"flex"}
          position={"relative"}
        >
          <Box sx={{ margin: "auto", ml: 10, width: "80%" }}>
            <Typography variant="h4" color={"white"}>
              {informacoes[0].titulo}
            </Typography>
            <Typography variant="subtitle1" color={"white"}>
              {informacoes[0].descricao}
            </Typography>
            <Button
              color="inherit"
              className={openSansExtraBold.className}
              sx={{ color: "#FF2700", mt: 2 }}
              variant="contained"
            >
              Saiba Mais
            </Button>
          </Box>
          <Box
            sx={{
              margin: "auto",
            }}
          >
            <Image
              src="/imagem-mao-segurando-casa.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Box>
          <Box>
            <Image
              src="/subtract.png"
              width={100}
              height={250}
              alt="Picture of the author"
              style={{ position: "absolute", top: 0, right: 0 }}
            />
          </Box>
        </Grid>
        <Grid
          item
          mt={6}
          bgcolor="#31343B"
          height={250}
          width="80%"
          display={"flex"}
          ml={"auto"}
          mr={"0"}
          position={"relative"}
        >
          <Box>
            <Image
              src="/subtract.png"
              width={100}
              height={250}
              alt="Picture of the author"
              style={{
                position: "absolute",
                top: 0,
                right: "93.3%",
                transform: "scaleX(-1)",
              }}
            />
          </Box>
          <Box sx={{ margin: "auto" }}>
            <Image
              src="/financiamento.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Box>
          <Box sx={styleGrayBox}>
            <Typography sx={styleTypography} variant="h4" color={"white"}>
              {informacoes[1].titulo}
            </Typography>
            <Typography sx={styleTypography} variant="subtitle1" color={"white"}>
              {informacoes[1].descricao}
            </Typography>
            <Button
              color="inherit"
              className={openSansExtraBold.className}
              sx={{ color: "#FF2700", mt: 2, alignSelf: 'flex-end'}}
              variant="contained"
              
            >
              Saiba Mais
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          mt={6}
          bgcolor="#FF2700"
          height={250}
          width="80%"
          display={"flex"}
          position={"relative"}
        >
          <Box sx={{ margin: "auto", ml: 10, width: "80%" }}>
            <Typography variant="h4" color={"white"}>
              {informacoes[2].titulo}
            </Typography>
            <Typography variant="subtitle1" color={"white"}>
              {informacoes[2].descricao}
            </Typography>
            <Button
              color="inherit"
              className={openSansExtraBold.className}
              sx={{ color: "#FF2700", mt: 2 }}
              variant="contained"
            >
              Saiba Mais
            </Button>
          </Box>
          <Box sx={{ margin: "auto" }}>
            <Image
              src="/lote-permuta.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Box>
          <Box>
            <Image
              src="/subtract.png"
              width={100}
              height={250}
              alt="Picture of the author"
              style={{ position: "absolute", top: 0, right: 0 }}
            />
          </Box>
        </Grid>
        <Grid
          item
          mt={6}
          bgcolor="#31343B"
          height={250}
          width="80%"
          display={"flex"}
          ml={"auto"}
          mr={"0"}
          mb={5}
          position={"relative"}
        >
          <Box>
            <Image
              src="/subtract.png"
              width={100}
              height={250}
              alt="Picture of the author"
              style={{
                position: "absolute",
                top: 0,
                right: "93.3%",
                transform: "scaleX(-1)",
              }}
            />
          </Box>
          <Box sx={{ margin: "auto" }}>
            <Image
              src="/pig.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Box>
          <Box sx={styleGrayBox}>
            <Typography sx={styleTypography} variant="h4" color={"white"}>
              {informacoes[3].titulo}
            </Typography>
            <Typography sx={styleTypography} variant="subtitle1" color={"white"}>
              {informacoes[3].descricao}
            </Typography>
            <Button
              color="inherit"
              className={openSansExtraBold.className}
              sx={{ color: "#FF2700", mt: 2, justifyContent: "end", alignSelf: 'flex-end' }}
              variant="contained"
            >
              Saiba Mais
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default MainBody;
