import { Box, Grid, Typography } from "@mui/material";
import Header from "./components/Header";
import localFont from "@next/font/local";
import MainSuperior from "./components/MainSuperior";

const openSansExtraBold = localFont({
  src: "../../../public/Causten-Regular.otf",
});

function Investimento() {
  return (
    <>
      <Header />
      <MainSuperior />
      <Grid container sx={{ backgroundImage: 'url("/fundo.svg")', margin: '0' }}>

      </Grid>
    </>
  );
}
export default Investimento;
