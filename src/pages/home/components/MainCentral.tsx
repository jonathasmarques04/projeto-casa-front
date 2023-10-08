import { Box, Button, Grid, Typography } from "@mui/material";

import Image from "next/image";
import localFont from "@next/font/local";

const openSansExtraBold = localFont({
  src: "../../../../public/Causten-Regular.otf",
});


const informacoes: { [key: string]: { src: string; tipografia: string } } = {
  informacoes1: { src: '/conforto.svg', tipografia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis consectetur tempora illo ipsam enim dolor hic a iure, fugiat dolorem, temporibus ex, at itaque praesentium ad rem eos recusandae!' },
  informacoes2: { src: '/tecnologia.svg', tipografia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis consectetur tempora illo ipsam enim dolor hic a iure, fugiat dolorem, temporibus ex, at itaque praesentium ad rem eos recusandae!' },
  informacoes3: { src: '/personalizacao.svg', tipografia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis consectetur tempora illo ipsam enim dolor hic a iure, fugiat dolorem, temporibus ex, at itaque praesentium ad rem eos recusandae!' },
};



function MainCentral() {
  return (
    <>
      <Grid container xs={12} className={openSansExtraBold.className}>
        <Grid item sx={{ display: "contents", textAlign: "center" }} xs={6}>
          <Button
            disableElevation
            color="error"
            variant="contained"
            sx={{ display: "flex", margin: "auto" }}
          >
            CONHEÇA A CASA
          </Button>
          <Typography variant="h6" margin={2}>
            A{" "}
            <span style={{ color: "#FF2700" }}>Construtora Carvalho de Sá</span>{" "}
            nasce da ideia de trazer uma nova forma de criar e gerenciar
            construções, com o foco familiar, moderno, simples e tecnológico.
          </Typography>
        </Grid>
        <Grid item gap={4} p={8} display="flex" xs={12} sx={{ textAlign: 'center' }}>
        {Object.keys(informacoes).map((key) => (
        <>
        <Grid xs={4} key={key} item sx={{ margin: "auto" }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src={informacoes[key].src}
            width={120}
            height={120}
            alt="Picture of the author"
          />
        </Box>
        <Typography variant="caption">
          {informacoes[key].tipografia}
        </Typography>
      </Grid>
        </>
      ))}      
      </Grid> 
      <Grid item sx={{ display: "contents", textAlign: "center" }} xs={6}>
          <Button
            disableElevation
            color="error"
            variant="contained"
            sx={{ display: "flex", margin: "auto" }}
          >
            O QUE FAZEMOS?
          </Button>
        </Grid>
        <Grid item gap={4} p={8} display="flex" xs={12} sx={{ textAlign: 'center' }}>
        {Object.keys(informacoes).map((key) => (
        <>
        <Grid xs={4} key={key} item sx={{ margin: "auto" }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src={informacoes[key].src}
            width={120}
            height={120}
            alt="Picture of the author"
          />
        </Box>
        <Typography variant="caption">
          {informacoes[key].tipografia}
        </Typography>
      </Grid>
        </>
      ))}      
      </Grid> 
      </Grid>
    </>
  );
}
export default MainCentral;

{/* <Grid xs={4} item sx={{ margin: "auto" }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/conforto.svg"
                width={120}
                height={120}
                alt="Picture of the author"
              />
            </Box>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate sapiente sit error id nam mollitia, nostrum accusamus
              voluptas facilis alias quibusdam ipsum.
            </Typography>
          </Grid> */}
