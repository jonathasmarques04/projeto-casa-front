import { Grid, Typography } from "@mui/material";

import Image from "next/image";
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ["latin"], weight: "400" })

function MainSuperior() {
  return (
    <Grid container sx={{ backgroundImage: 'url("/fundo.svg")' }}>
      <Grid item xs={12} ml={12} gap={8} display="flex" sx={{
        "@media (max-width: 990px)": { ml: 0 }
      }}>
        <Grid item xs={12} mt={12}>
          <Typography
            variant="h1"
            className={outfit.className}
            sx={{ 
              "@media (max-width: 990px)": { textAlign: 'center' },
              "@media (max-width: 384px)": { fontSize: 80 }
           }}
          >
            Um novo jeito de construir
          </Typography>
          <Typography variant="subtitle2" className={outfit.className} sx={{ letterSpacing: '-0.02em', "@media (max-width: 990px)": { textAlign: 'center', mb: 4 }, "@media (max-width: 642px)": {textAlign: '-moz-initial'} }}>
            Nossos projetos são baseados em criatividade, inovação,
            funcionalidade e funcionalidade. Ao integrar esses princípios,
            reforçamos nosso compromisso com práticas construtivas responsáveis,
            promovendo soluções arquitetônicas que atendam às necessidades dos
            clientes e contribuam para um ambiente mais sustentável, eficiente e
            socialmente adequado.
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ "@media (max-width: 990px)": { display: 'none' } }}>
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
