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

import Image from "next/image";
import { Grid } from "@mui/material";
import { sxButtonHeader } from "../../../../styles/stylesHome";
import { Outfit } from 'next/font/google'
import { sxStyleHeader } from "@/styles/stylesEmpreendimento";

const outfit = Outfit({ subsets: ["latin"], weight: '500' })

const pages = ["Informações", "galeria"];

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
      }}
      xs={12}
      md={10}
    >
      <Toolbar
        sx={{
          gap: 12,
          "@media (max-width: 600px)": {
            gap: 6,
          },
          "@media (max-width: 360px)": {
            gap: 6,
          },
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            letterSpacing: ".3rem",
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
        <Box sx={{ flexGrow: 1, display: { xs: 12, md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="default"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", color: "white", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
              className={outfit.className}
              sx={{ fontWeight: "400" }}
              key={page}
              onClick={handleCloseNavMenu}
              component="a"
              href={
                page === "Investimento"
                  ? "/investimento"
                  : `#${page.toLocaleLowerCase()}`
              }
            >
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box
          component="a"
          href="/"
          sx={{
            display: { xs: "flex", md: "none" },
            fontWeight: 400,
            color: "inherit",
            textDecoration: "none",
            "@media (max-width: 600px)": {
              width: "60px",
            },
            "@media (max-width: 400px)": {
              width: "40px",
            },
          }}
        >
          <Image
            src="/logo-unica.svg"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            gap: 8,
            display: { xs: "none", md: "flex" },
          }}
        >
          {pages.map((page) => (
            <Button
              className={outfit.className}
              key={page}
              onClick={handleCloseNavMenu}
              sx={sxStyleHeader}
              href={`#${page.toLocaleLowerCase()}`}
            >
              {page}
            </Button>
          ))}
        </Box>
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
