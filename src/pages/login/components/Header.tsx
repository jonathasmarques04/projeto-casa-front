import { Box, Grid } from "@mui/material";
import Image from "next/image";

function Header() {
  return (
    <Grid container xs={12} >
      <Box sx={{ m: 'auto' }}>
        <Image width={100} height={100} alt="Imagem logo" src="./logo.svg" />
      </Box>
    </Grid>
  );
}
export default Header;
