import { Grid, Typography } from '@mui/material';
import localFont from '@next/font/local';
import Head from 'next/head';
import React from 'react';

const openSansExtraBold = localFont({
  src: "../../public/Causten-Regular.otf",
});

const NotFoundPage: React.FC = () => {
  return (
    <>
    <Head>
      Página não encontrada
    </Head>
    <Grid container xs={12}>
    <Grid item margin={'auto'}>
      <Typography variant='h3' sx={{ color: "#FF2700", fontSize: "2.5vh" }} className={openSansExtraBold.className}>
        Página não encontrada
      </Typography>
    </Grid>
    </Grid>
    </>
  );
};

export default NotFoundPage;