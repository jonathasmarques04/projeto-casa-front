import { AuthProvider } from "@/contexts";
import "@/styles/globals.css";
import theme from "@/theme/theme.mui";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
    
  )
}


