import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Input, InputProps } from "@mui/base/Input";
import SearchIcon from "@mui/icons-material/Search";

import localFont from "@next/font/local";
import { styled } from "@mui/system";
import React from "react";
import { sxButtonMaior } from "../../../styles/stylesHome";

const openSansExtraBold = localFont({
  src: "../../../../public/Causten-Regular.otf",
});

const CustomInput = React.forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
});

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const blue = {
  100: "#FF2700",
  200: "#FF2700",
  400: "#FF2700",
  500: "#FF2700",
  600: "#FF2700",
};

const grey = {
  50: "#F3F6F9",
  100: "#FF2700",
  200: "#E0E3E7",
  300: "#FF2700",
  400: "#B2BAC2",
  500: "#FF2700",
  600: "#6F7E8C",
  700: "#FF2700",
  800: "#FF2700",
  900: "#FF2700",
};

function InputMain() {
  return (
    <Grid container className={openSansExtraBold.className}>
      <Grid item sx={{ display: "contents", textAlign: "center" }} xs={6}>
        <Button
          disableElevation
          color="error"
          variant="contained"
          sx={sxButtonMaior}
          className={openSansExtraBold.className}
          id="imóveis"
        >
          IMÓVEIS À VENDA
        </Button>
      </Grid>
    </Grid>
  );
}
export default InputMain;
