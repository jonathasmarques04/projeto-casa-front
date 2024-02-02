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
  width: "80%",
  display: "flex",
  flexDirection: "column",
};

export const styleTypography: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
};
