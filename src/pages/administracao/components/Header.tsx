import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

function Header() {
  return (
    <Grid container xs={12}>
      <Box sx={{ m: "auto" }}>
        <Typography href="/" variant="h6" noWrap component="a">
          <Image width={100} height={100} alt="Imagem logo" src="./logo.svg" />
        </Typography>
      </Box>
    </Grid>
  );
}
export default Header;
