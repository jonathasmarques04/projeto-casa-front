import { createTheme } from "@mui/material";
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ["latin"], weight: '500' });

const theme = createTheme({ 
    typography: {
        fontFamily: "Outfit, sans-serif",
        
    },
});

export default theme;