import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Header from "./components/Header";
import SignIn from "./components/Body";
import { AuthProvider } from "@/contexts";

function Login() {
  return (
    <>
      <Header />
      <SignIn />
    </>
  );
}
export default Login;
