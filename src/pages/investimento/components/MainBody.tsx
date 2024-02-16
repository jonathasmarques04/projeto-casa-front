import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import localFont from "@next/font/local";
import Image from "next/image";
import { styleGrayBox, styleTypography, sxGridContainerFade } from "../../../styles/stylesInvestimento";

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
          sx={{ "@media (max-width: 1370px)": { width: '90%',borderRadius: '0px 30px 30px 0px' }, "@media (max-width: 764px)": { width: '100%', borderRadius: '30px' }, "@media (max-width: 688px)": { height: 300 }, "@media (max-width: 527px)": { height: 400 } }}
        >
          <Box sx={{ margin: "auto", ml: 10, "@media (max-width: 764px)": { margin: 2, textAlign: 'center' }}}>
            <Typography variant="h4" color={"white"} sx={{ "@media (max-width: 1370px)": { fontSize: 24 }  }}>
              {informacoes[0].titulo}
            </Typography>
            <Typography variant="subtitle1" color={"white"} sx={{ "@media (max-width: 1370px)": { fontSize: 14 } }}>
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
              "@media (max-width: 877px)": { display: 'none' }
            }}
          >
            <Image
              src="/imagem-mao-segurando-casa.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Box>
          <Box sx={{ "@media (max-width: 877px)": { display: 'none' } }}>
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
          sx={{ "@media (max-width: 1370px)": { width: '90%', borderRadius: '30px 0px 0px 30px' }, "@media (max-width: 764px)": { width: '100%', borderRadius: '30px' }, "@media (max-width: 688px)": { height: 300 }, "@media (max-width: 527px)": { height: 400 } }}
        >
          <Box sx={{ "@media (max-width: 877px)": { display: 'none' }, right: "93.3%" }}>
            <Image
              src="/subtract.png"
              width={100}
              height={250}
              alt="Picture of the author"
              style={{
                position: "absolute",
                top: 0,
                
                transform: "scaleX(-1)",
              }}
            />
          </Box>
          <Box sx={{ margin: "auto", "@media (max-width: 877px)": { display: 'none' } }}>
            <Image
              src="/financiamento.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Box>
          <Box sx={{ margin: "auto", ml: 10, flexDirection: 'column', "@media (max-width: 764px)": { margin: 2, textAlign: 'center' }}}>
            <Typography sx={{ "@media (max-width: 1370px)": { fontSize: 24 } }} variant="h4" color={"white"}>
              {informacoes[1].titulo}
            </Typography>
            <Typography sx={{ "@media (max-width: 1370px)": { fontSize: 14 } }} variant="subtitle1" color={"white"}>
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
          mt={7}
          bgcolor="#FF2700"
          height={250}
          width="80%"
          display={"flex"}
          position={"relative"}
          sx={{ "@media (max-width: 1370px)": { width: '90%',borderRadius: '0px 30px 30px 0px' }, "@media (max-width: 764px)": { width: '100%', borderRadius: '30px' }, "@media (max-width: 688px)": { height: 300 }, "@media (max-width: 527px)": { height: 400 } }}
        >
          <Box sx={{ margin: "auto", ml: 10, "@media (max-width: 764px)": { margin: 2, textAlign: 'center' }}}>
            <Typography variant="h4" color={"white"} sx={{ "@media (max-width: 1370px)": { fontSize: 24 }  }}>
              {informacoes[2].titulo}
            </Typography>
            <Typography variant="subtitle1" color={"white"} sx={{ "@media (max-width: 1370px)": { fontSize: 14 } }}>
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
          <Box
            sx={{
              margin: "auto",
              "@media (max-width: 877px)": { display: 'none' }
            }}
          >
            <Image
              src="/lote-permuta.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Box>
          <Box sx={{ "@media (max-width: 877px)": { display: 'none' } }}>
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
          sx={{ "@media (max-width: 1370px)": { width: '90%', borderRadius: '30px 0px 0px 30px' }, "@media (max-width: 764px)": { width: '100%', borderRadius: '30px' }, "@media (max-width: 688px)": { height: 300 } }}
        >
          <Box sx={{ "@media (max-width: 877px)": { display: 'none' }, right: "93.3%", }}>
            <Image
              src="/subtract.png"
              width={100}
              height={250}
              alt="Picture of the author"
              style={{
                position: "absolute",
                top: 0,
                transform: "scaleX(-1)",
              }}
            />
          </Box>
          <Box sx={{ margin: "auto", "@media (max-width: 877px)": { display: 'none' } }}>
            <Image
              src="/pig.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Box>
          <Box sx={{ margin: "auto", ml: 10, flexDirection: 'column', "@media (max-width: 764px)": { margin: 2, textAlign: 'center' }}}>
            <Typography sx={{ "@media (max-width: 1370px)": { fontSize: 24 } }} variant="h4" color={"white"}>
              {informacoes[3].titulo}
            </Typography>
            <Typography sx={{ "@media (max-width: 1370px)": { fontSize: 14 } }} variant="subtitle1" color={"white"}>
              {informacoes[3].descricao}
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
      </Grid>
    </>
  );
}
export default MainBody;
