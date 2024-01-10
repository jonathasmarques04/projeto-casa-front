import { v4 as uuid } from "uuid";

type SignInRequestData = {
  email: string;
  password: string;
};

interface Usuario {
  nome: string;
  senha: string;
}

interface Login {
  usuarios: Usuario[];
}

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData) {
  await delay();

  const response = await fetch(`http://localhost:3020/usuario/`);

  if (!response.ok) {
    throw new Error("Erro ao pegar dados");
  }

  const resposta: Login = await response.json();

  const email = resposta.usuarios[2].nome;
  const senha = resposta.usuarios[2].senha;

  return {
    token: uuid(),
    user: {
      email: email,
      password: senha,
    },
  };
}
