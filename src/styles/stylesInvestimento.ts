import { SxProps, Theme } from "@mui/material";

export const sxGridContainerFade: SxProps<Theme> = {
  position: "relative",
  backgroundImage:
    'radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 100%), url("/fundo.svg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  margin: "0",
};

export const styleGrayBox: SxProps<Theme> = {
  margin: "auto",
  ml: 10,
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 1370px)": { width: "90%" },
  "@media (max-width: 764px)": { margin: 2, textAlign: "center" },
};

export const styleTypography: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  "@media (max-width: 1370px)": { fontSize: 24 },
};

export const sxContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
  flexWrap: "nowrap",
  flexDirection: "column",
  width: "90%",
};

export const sxToolBarTypography: SxProps<Theme> = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

export const sxToolBarTypographyLogo: SxProps<Theme> = {
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};
