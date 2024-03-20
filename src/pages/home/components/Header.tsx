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
import { sxButtonHeader } from "../../../styles/stylesHome";
import { Grid } from "@mui/material";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: "500" });

const pages = ["Sobre", "O que fazemos", "Investimento", "Imóveis"];

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
      sm={10}
    >
      <Toolbar
        sx={{
          gap: 12,
          "@media (max-width: 990px)": {
            gap: 0,
          },
          "@media (max-width: 900px)": {
            gap: 6,
          },
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
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "none", lg: "flex" },
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
        <Box sx={{ flexGrow: 1, display: { xs: 12, md: "flex", lg: "none" } }}>
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
                sx={{ fontWeight: "500" }}
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
          sx={{
            cursor: "pointer",
            display: { xs: "flex", md: "none" },
            fontFamily: "monospace",
            fontWeight: 700,
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
            display: { xs: "none", md: "none", lg: "flex" },
          }}
        >
          {pages.map((page) => (
            <Button
              className={outfit.className}
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                margin: "auto",
                color: "#000",
                display: "block",
                fontWeight: "500",
                lineHeight: "normal",
                fontSize: "16px",
                letterSpacing: "0.1rem",
                textTransform: "uppercase",
                textDecoration: "none",
                "@media (max-width: 1490px)": {
                  fontSize: "14px",
                  margin: "0px",
                },
                "@media (max-width: 600px)": {
                  fontSize: "10px",
                },
              }}
              href={
                page == "Investimento"
                  ? "/investimento"
                  : `#${page.toLocaleLowerCase()}`
              }
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
