import Header from "./components/Header";
import SignIn from "./components/Body";
import Head from "next/head";

function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header />
      <SignIn />
    </>
  );
}
export default Login;
