import { SxProps, Theme } from "@mui/material";

export const sxButtonStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  borderRadius: "15px",
  boxShadow: "0px 10.0979px 10.0979px rgba(255, 39, 0, 0.2)",
  cursor: "pointer",
  textTransform: "uppercase",
  outline: "none",
  border: "none",
  height: "5.0vh",
  fontSize: 16,
  ".css-1bfcrn0-MuiButtonBase-root-MuiButton-root:hover": {
    backgroundColor: "#FF2700",
  },
};

export const sxButtonHeader: SxProps<Theme> = {
  display: { xs: "flex", sm: "flex" },
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  backgroundColor: "#FF2700",
  borderRadius: "10px",
  boxShadow: "0px 10.0979px 10.0979px rgba(255, 39, 0, 0.2)",
  cursor: "pointer",
  textTransform: "uppercase",
  outline: "none",
  border: "none",
  height: "6vh",
  fontSize: 16,
  "&:hover": {
    backgroundColor: "#FF2700",
  },
  "@media screen and (max-width: 424px)": {
    fontSize: "10px",
    height: '50px'
  },
};

export const sxButtonMaior: SxProps<Theme> = {
  display: "flex",
  margin: "auto",
  alignItems: "center",
  color: "#fff",
  backgroundColor: "#FF2700",
  borderRadius: "5px",
  boxShadow: "0px 10.0979px 10.0979px rgba(255, 39, 0, 0.2)",
  cursor: "auto",
  texttransform: "uppercase",
  outline: "none",
  border: "none",
  height: "8.0vh",
  width: "90%",
  fontWeight: "bold",
  fontSize: "1.3rem",
};

export const sxInput: SxProps<Theme> = {
  width: "380px",
  border: "#FF2700 3px solid",
  borderRadius: "10px",
  justifyContent: "center",
  alignItems: "center",
};

export const sxListStyle: SxProps<Theme> = {
  fontWeight: "bold",
  textDecoration: "none",
  paddingRight: ".5em",
  color: "#111820",
  textTransform: "none",
};
