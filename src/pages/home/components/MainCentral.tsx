import { Box, Button, Grid, Typography } from "@mui/material";

import Image from "next/image";
import { sxButtonMaior } from "../../../styles/stylesHome";
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ["latin"], weight: "500" })

const informacoesPrincipal: {
  [key: string]: { src: string; tipografia: string };
} = {
  informacoes1: {
    src: "/conforto.svg",
    tipografia:
      "Acreditamos que a qualidade de vida de nossos clientes está diretamente ligada com o conforto que nossos empreendimentos oferecem. Por isso, procuramos alinhar o design ao melhor conforto térmico, acústico e ambiental, sem perder a praticidade de ambientes personalizados e adequados aos diferentes estilos de vida",
  },
  informacoes2: {
    src: "/tecnologia.svg",
    tipografia:
      "Somos uma construtora jovem (ou uma jovem construtora?!). Por isso, acreditamos em métodos construtivos tecnológicos, modernos e eficientes, com a melhor relação custo x benefício, além de oferecemos aos nossos clientes soluções de tecnologia e automação convergentes com os seus propósitos.",
  },
  informacoes3: {
    src: "/personalizacao.svg",
    tipografia:
      "Compreendemos que os nossos empreendimentos são parte importante da vida de nossos clientes, e, por isso, devem estar alinhados com a personalidade e as necessidades diárias de cada um deles. Assim, primamos pela adaptabilidade dos nossos projetos, com a confecção de plantas personalizáveis e soluções arquitetônicas individualizadas, dispensando a realização de obras posteriores ao recebimento do imóvel.",
  },
};

const informacoesSecundario: {
  [key: string]: { src: string; tipografia: string };
} = {
  informacoes1: {
    src: "/reformas.svg",
    tipografia:
      "Realizamos reformas dos mais variados portes, por meio de equipe especializada e supervisionada por arquitetos e engenheiros. Os trabalhos são realizados de acordo com projeto idealizado em BIM (Building Information Modeling), capaz de antecipar, a partir das características físicas e funcionais da obra, o quantitativo de materiais e custos diretos e indiretos envolvidos. ",
  },
  informacoes2: {
    src: "/martelo.svg",
    tipografia:
      "Somos especialistas em construção! Sabemos que construir não é uma tarefa fácil. Por isso, estamos aqui para assumir essa tarefa por você. Contamos com um time técnico de engenheiros, arquitetos e construtores que atuam desde a concepção do projeto até a conclusão das obras, no modelo de empreitada ou administração.",
  },
  informacoes3: {
    src: "/investimento.svg",
    tipografia:
      "O mercado imobiliário é historicamente reconhecido como uma alternativa segura, estável e altamente rentável de investimento. Os maiores investidores do mundo possuem boa parte do seu patrimônio alocado em imóveis. Seja você também um investidor do mercado imobiliário com a Ca.Sa Construtora!",
  },
};

function MainCentral() {
  return (
    <Grid container xs={12} >
      <Grid item sx={{ display: "contents", textAlign: "center" }} xs={6} id='page1'>
        <Button
          id="quem somos"
          disableElevation
          color="error"
          variant="contained"
          sx={sxButtonMaior}
          className={outfit.className}
        >
          CONHEÇA A CASA
        </Button>
        <Typography
          variant="h6"
          m={"auto"}
          my={4}
          sx={{ width: "90%", color: "#111820", fontSize: "2.5vh" }}
          className={outfit.className}
        >
          A <span style={{ color: "#FF2700" }}>Construtora Carvalho de Sá</span>{" "}
          nasce da ideia de trazer uma nova forma de criar e gerenciar
          construções, com o foco familiar, moderno, simples e tecnológico.
        </Typography>
      </Grid>
      <Grid
        item
        gap={0}
        p={8}
        display="flex"
        xs={12}
        sx={{
          textAlign: "center",
          "@media (max-width: 990px)": { display: "block" },
        }}
      >
        {Object.keys(informacoesPrincipal).map((key) => (
          <Grid
            xs={3}
            key={key}
            item
            sx={{
              margin: "auto",
              marginTop: "inherit",
              "@media (max-width: 990px)": { maxWidth: "100%" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={informacoesPrincipal[key].src}
                width={120}
                height={120}
                alt="Picture of the author"
              />
            </Box>
            <Box>
              <Typography variant="caption" className={outfit.className}>
                {informacoesPrincipal[key].tipografia}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid item sx={{ display: "contents", textAlign: "center" }} xs={6}>
        <Button
          disableElevation
          color="error"
          variant="contained"
          sx={sxButtonMaior}
          className={outfit.className}
          id="o que fazemos"
        >
          O QUE FAZEMOS?
        </Button>
      </Grid>
      <Grid
        item
        gap={4}
        p={8}
        display="flex"
        xs={12}
        sx={{
          textAlign: "center",
          "@media (max-width: 990px)": { display: "block" },
        }}
      >
        {Object.keys(informacoesSecundario).map((key) => (
          <Grid
            xs={3}
            key={key}
            item
            sx={{
              margin: "auto",
              marginTop: "inherit",
              "@media (max-width: 990px)": { maxWidth: "100%" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={informacoesSecundario[key].src}
                width={120}
                height={120}
                alt="Picture of the author"
              />
            </Box>
            <Typography variant="caption" className={outfit.className}>
              {informacoesSecundario[key].tipografia}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default MainCentral;
