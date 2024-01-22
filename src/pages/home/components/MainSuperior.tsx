import { Grid, Typography } from "@mui/material";

import Image from "next/image";
import localFont from "@next/font/local";

const openSansExtraBold = localFont({
  src: "../../../../public/Causten-Regular.otf",
});

function MainSuperior() {
  return (
    <Grid container sx={{ backgroundImage: 'url("/fundo.svg")' }}>
      <Grid item xs={12} ml={12} gap={8} display="flex">
        <Grid item xs={6} mt={12}>
          <Typography
            variant="h1"
            color="#FF2700"
            className={openSansExtraBold.className}
            sx={{ fontWeight: 'bold' }}
          >
            Um novo jeito de construir
          </Typography>
          <Typography variant="inherit" className={openSansExtraBold.className} sx={{ letterSpacing: '-0.02em', fontWeight: 'bold', fontSize: '18px' }}>
            Nossos projetos são baseados em criatividade, inovação,
            funcionalidade e funcionalidade. Ao integrar esses princípios,
            reforçamos nosso compromisso com práticas construtivas responsáveis,
            promovendo soluções arquitetônicas que atendam às necessidades dos
            clientes e contribuam para um ambiente mais sustentável, eficiente e
            socialmente adequado.
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
  );
}
export default MainSuperior;
