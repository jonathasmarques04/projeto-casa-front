import { SxProps, Theme } from "@mui/material";

export const sxGridContainerFade: SxProps<Theme> = {
    position: 'relative',
    backgroundImage: 'radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 100%), url("/fundo.svg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '0',
};