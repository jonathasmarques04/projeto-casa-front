
import { Grid, Typography } from "@mui/material";

import Image from "next/image";
import localFont from '@next/font/local'

const openSansExtraBold = localFont({
  src: '../../../../public/Causten-Regular.otf' 
 })

function MainSuperior() {
  return (
    <>
    <Grid container sx={{ backgroundImage: 'url("/fundo.svg")' }}>
      <Grid item xs={12} margin={2} gap={8} display='flex'>
        <Grid item xs={6} mt={12}>
        <Typography variant="h1" color='#FF2700' className={openSansExtraBold.className}>
          Um novo jeito de construir
        </Typography>
        <Typography variant="inherit" className={openSansExtraBold.className}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <Image
              src="/poster-111.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}
export default MainSuperior;
