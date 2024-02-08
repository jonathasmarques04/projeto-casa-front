import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import Image from "next/image";
import localFont from "next/font/local";
import { Grid } from "@mui/material";
import { sxButtonHeader } from "@/pages/home/components/style";

const openSansExtraBold = localFont({
  src: "../../../../public/Causten-Regular.otf",
});

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
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        flexWrap: "nowrap",
        flexDirection: "column",
        width: "90%",
      }}
    >
      <Toolbar disableGutters sx={{ gap: 12 }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
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
          href="#app-bar-with-responsive-menu"
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
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
              className={openSansExtraBold.className}
              disableElevation
              variant="contained"
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
