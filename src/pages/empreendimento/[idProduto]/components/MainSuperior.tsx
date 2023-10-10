import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Image from "next/image";
import localFont from '@next/font/local'

const openSansExtraBold = localFont({
  src: '../../../../../public/Causten-Regular.otf' 
 })

function MainSuperior() {
  return (
    <>
      <Grid container>
        <Grid
          item
          mr={2}
          ml={2}
          xs={12}
          sx={{
            borderRadius: "15px",
            backgroundSize: '100%',
            backgroundPosition: '50%',

            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/imagem-empreendimento.svg");',
          }}
        >
          <Box ml={1} mt={4} >
            <Typography sx={{ color: '#FFF' }} className={openSansExtraBold.className} variant="h3">2 a 3 suítes</Typography>
          </Box>
          <Box ml={1} mb={2}>
            <Typography sx={{ color: '#FFF' }} className={openSansExtraBold.className} variant="h6">Com lazer premium e integrado a uma nova praça memorial de 2.700m²</Typography>
          </Box>
          <Box
            mb={2}
            ml={1}
            sx={{
              display: "flex",
              boxSizing: "border-box",
              background: "#FFF",
              borderRadius: "20px",
              alignItems: "center",
              gap: 2,
              width: '290px',
              height: '35px'
            }}
          >
            <Image
              src="/vetor.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Typography sx={{ color: '#111820' }} variant="h6">Belo Horizonte</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default MainSuperior;
