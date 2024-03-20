import { createTheme } from "@mui/material";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: "500" });

const theme = createTheme({
  typography: {
    fontFamily: "Outfit, sans-serif",
    h1: {
      color: "#FF2700",
    },
    h6: {
        fontWeight: 500,
        color: "inherit",
    },
    subtitle2: {
      fontSize: "18px",
    },
    caption: {
      color: "#111820",
      fontWeight: 500,
      fontSize: "14px",
    },
    body1: {
        fontWeight: 300
    }
  },
});

export default theme;
