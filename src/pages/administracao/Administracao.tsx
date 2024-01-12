import Body from "./components/Body";
import Header from "./components/Header";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getAPIClient } from "@/services/axios";
import { useContext } from "react";
import { AuthContext } from "@/contexts";

function Administracao() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ['nextauth.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default Administracao;
