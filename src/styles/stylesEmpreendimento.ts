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
  fontweight: "bold",
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
  fontWeight: "bold",
  fontSize: "1.3rem",
};

export const sxListStyle: SxProps<Theme> = {
  fontWeight: "bold",
  textDecoration: "none",
  paddingRight: ".5em",
  color: "#111820",
  textTransform: "none",
};

export const sxButtonHeader: SxProps<Theme> = {
  display: "flex",
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
};

export const sxUnicGreatBox: SxProps<Theme> = {
  display: "flex",
  boxSizing: "border-box",
  background: "#FFF",
  borderRadius: "20px",
  alignItems: "center",
  gap: 2,
  width: "290px",
  height: "35px",
};

export const sxGreatGridItem: SxProps<Theme> = {
  display: "flex",
  margin: "auto",
  boxSizing: "border-box",
  position: "relative",
  height: "115px",
  background: "#242424",
  border: "1px solid #FFFFFF",
  borderRadius: "12px",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  "@media (max-width: 990px)": { gap: 5 },
  "@media (max-width: 500px)": { gap: 3, ml: 1, mr: 1 },
};

export const sxStyleHeader: SxProps<Theme> = {
  color: "#000",
  display: "block",
  fontWeight: "bold",
  lineHeight: "normal",
  fontSize: "16px",
  letterSpacing: "0.1rem",
  textTransform: "uppercase",
  textDecoration: "none",
  "@media (max-width: 600px)": {
    fontSize: "10px",
  },
};
