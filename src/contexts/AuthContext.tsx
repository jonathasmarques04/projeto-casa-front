import { signInRequest } from "@/services/auth";
import { createContext, useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";

type AuthContextType = {
  isAuthenticated: boolean;
  user: isAuthenticatedType | null;
  sigIn: (data: isAuthenticatedType) => Promise<void>;
};

type isAuthenticatedType = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<isAuthenticatedType | null>(null);

  const isAuthenticated = !!user;

  async function sigIn({ email, password }: isAuthenticatedType) {
    const { token, user } = await signInRequest({
      email,
      password: password,
    });

    setCookie(undefined, "nextauth.token", token, {
      maxAge: 60 * 60 * 1,
    });

    setUser(user);

    Router.push("/administracao");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, sigIn }}>
      {children}
    </AuthContext.Provider>
  );
}
