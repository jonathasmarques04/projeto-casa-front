import { Box, Divider, Fab, Grid, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Popover from "@mui/material/Popover";
import React, { useState } from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: "500" });

function Modal() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const linkWhatsapp1 = () => {
    window.location.href = "https://contate.me/casaconstrutora";
  };

  const linkWhatsapp2 = () => {
    window.location.href = "https://contate.me/casa-construtora1";
  };

  return (
    <Box>
      <Fab
        sx={{
          background: "green",
          color: "white",
          "&:hover": {
            background: "green",
          },
        }}
        aria-label="add"
        aria-describedby={id}
        onClick={handleClick}
      >
        <CallIcon />
      </Fab>
      <Grid xs={6}>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Typography sx={{ width: "100%" }}>
            <Box sx={{ backgroundColor: "#0DC153", mb: 2, height: "6vh" }}>
              <Typography variant="h6" ml={2} color={"white"}>
                Olá! Clique em um dos nossos atendentes para ser atendido.
              </Typography>
            </Box>
            <Box
              onClick={linkWhatsapp2}
              sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2, cursor: 'pointer' }}
            >
              <Image
                src="/300849399_1378995459293714_446150436152832763_n.jpg"
                width={50}
                height={50}
                alt="Picture of the author"
                style={{ borderRadius: "50%", marginLeft: 10 }}
              />
              <Typography variant="h6" color="#111820">
                Saulo Carvalho
              </Typography>
            </Box>
            <Divider sx={{ width: "100%", color: "#111820" }} />
            <Box
              onClick={linkWhatsapp1}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 2,
                mb: 2,
                cursor: 'pointer'
              }}
            >
              <Image
                src="/328724373_215163131081698_7412175627485027946_n.jpg"
                width={50}
                height={50}
                alt="Picture of the author"
                style={{ borderRadius: "50%", marginLeft: 10 }}
              />
              <Typography variant="h6" color="#111820">
                Gabriela de Sá
              </Typography>
            </Box>
          </Typography>
        </Popover>
      </Grid>
    </Box>
  );
}

export default Modal
