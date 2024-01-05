import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

interface Usuario {
  nome: string;
  senha: string;
}

interface Login {
  usuario: Usuario;
}

export async function PegaUsuario() {
  try {
    const response = await fetch(`http://localhost:3020/usuario/`);

    if (!response.ok) {
      throw new Error("Erro ao pegar dados");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro ao buscar informações da API:", error);
    return [];
  }
}

export default function SignIn() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const usuarios = await PegaUsuario();

    const email = data.get("email");
    const password = data.get("password");
    const usuarioEncontrado = usuarios?.find((usuario: Usuario) => {
      return usuario.nome === email && usuario.senha === password;
    });

    if (usuarioEncontrado) {
      console.log("Usuario encontrado");
    } else {
      console.log("Usuario não encontrado");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#FF2700" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Usuário"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              color="error"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
