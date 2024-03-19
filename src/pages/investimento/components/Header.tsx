import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import Image from "next/image";
import { Grid } from "@mui/material";
import { sxButtonHeader } from "@/styles/stylesHome";

import { Outfit } from 'next/font/google'
import { sxContainer, sxToolBarTypography, sxToolBarTypographyLogo } from "@/styles/stylesInvestimento";

const outfit = Outfit({ subsets: ["latin"] })

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Grid
      container
      sx={sxContainer}
    >
      <Toolbar disableGutters sx={{ gap: 12 }}>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={sxToolBarTypography}
        >
          <Image
            src="/logo.svg"
            width={120}
            height={120}
            alt="Picture of the author"
          />
        </Typography>
        <Typography
          variant="h5"
          component="a"
          href="/"
          sx={sxToolBarTypographyLogo}
        >
          <Image
            src="/logo.svg"
            width={120}
            height={120}
            alt="Picture of the author"
          />
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Fale conosco">
            <Button
              sx={sxButtonHeader}
              className={outfit.className}
              disableElevation
              variant="contained"
              href="https://contate.me/casa-construtora1"
            >
              Fale conosco
            </Button>
          </Tooltip>
        </Box>
      </Toolbar>
    </Grid>
  );
}
export default Header;
