import Body from "./components/Body";
import Header from "./components/Header";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getAPIClient } from "@/services/axios";
import Head from "next/head";

function Administracao() {
  return (
    <>
      <Head>
        <title>Administração</title>
      </Head>
      <Header />
      <Body />
    </>
  );
}

export default Administracao;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ["nextauth.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  await apiClient.get("/usuario");

  return {
    props: {},
  };
};
