import { Box, Grid, Typography } from "@mui/material";
import localFont from "@next/font/local";

const openSansExtraBold = localFont({
  src: "../../../../public/Causten-Regular.otf",
});

function MainSuperior() {
  return (
    <>
      <Grid container>
        <Box sx={{ margin: 'auto'}}>
          <Typography variant="h1" color="#FF2700" className={openSansExtraBold.className} sx={{ fontWeight: 'bold', "@media (max-width: 5570px)": {textAlign: 'center'}  }}>Quero Investir</Typography>
        </Box>
        <Box sx={{ margin: 'auto', textAlign: 'center', width: '80%' }}>
          <Typography variant='h6'>
            O mercado imobiliário é historicamente reconhecido como uma
            alternativa segura, estável e altamente rentável de investimento. Os
            maiores investidores do mundo possuem boa parte do seu patrimônio
            alocado em imóveis. Seja você também um investidor do mercado
            imobiliário com a Ca.Sa Construtora!
          </Typography>
        </Box>
      </Grid>
    </>
  );
}
export default MainSuperior;
