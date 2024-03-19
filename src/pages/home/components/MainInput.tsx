import React from "react";
import {
  Button,
  Grid,
} from "@mui/material";
import { sxButtonMaior } from "../../../styles/stylesHome";

import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ["latin"], weight: "500" })

function InputMain() {
  return (
    <Grid container className={outfit.className}>
      <Grid item sx={{ display: "contents", textAlign: "center" }} xs={6}>
        <Button
          disableElevation
          color="error"
          variant="contained"
          sx={sxButtonMaior}
          className={outfit.className}
          id="imóveis"
        >
          IMÓVEIS À VENDA
        </Button>
      </Grid>
    </Grid>
  );
}
export default InputMain;
