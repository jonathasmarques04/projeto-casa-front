import { v4 as uuid } from "uuid";

type SignInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      email: "jonathas",
      password: "lindo",
    },
  };
}

export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      email: "jonathas",
      password: "lindo",
    },
  };
}
