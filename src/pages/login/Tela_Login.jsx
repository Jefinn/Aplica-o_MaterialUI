import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Title = () => {
  React.useEffect(() => {
    document.title = "Login";
  }, []);
  return null;
};

export default function Login() {
  //CSS
  const headerLogin = {
    height: "100vh",
    backgroundImage: `url(${"https://cdn.pixabay.com/photo/2022/06/20/14/20/space-7273891_1280.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const divLogin = {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: "100px",
  };

  const tituloLogin = {
    position: "relative",
    top: "-100px",
  };

  const navigate = useNavigate();

  const authLogin = () => {
    navigate("/gerenciador");
  };

  // Estados para os valores do formulário e mensagens de erro
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailError, setEmailError] = useState("");
  const [senhaError, setSenhaError] = useState("");

  //Validar e-mail
  const validateEmail = (email) => {
    if (email.length < 10 || !email.includes("@")) {
      setEmailError("E-mail incorreto");
    } else {
      setEmailError("");
    }
  };

  //Validador de formulario
  /*const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail(email);
    validateSenha(senha);

    if (!emailError && !senhaError) {
      console.log("Formulário válido. Enviando...");
      // Adicione aqui a lógica para lidar com o envio do formulário
    }
  };*/

  //Validar senha
  const validateSenha = (senha) => {
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!senhaRegex.test(senha)) {
      setSenhaError("Senha invalida");
    } else {
      setSenhaError("");
    }
  };

  return (
    <header style={headerLogin}>
      <Title></Title>
      <div style={divLogin}>
        <Box
          height={350}
          width={400}
          border={2}
          borderColor={"Highlight"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          backgroundColor={"white"}
        >
          <h3 style={tituloLogin}>Seja Bem Vindo</h3>
          {/*Forms */}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "25ch", display: "flex" },
              position: "absolute",
              top: 70,
              padding: 3,
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => validateEmail(email)}
              error={!!emailError}
              helperText={emailError}
              sx={{}}
            />

            <TextField
              id="senha"
              label="Senha"
              ariant="outlined"
              onChange={(e) => setSenha(e.target.value)}
              onBlur={() => validateSenha(senha)}
              error={!!senhaError}
              helperText={senhaError}
              sx={{}}
            />

            {/*Button*/}
            <Button
              sx={{
                backgroundColor: "green",
                fontFamily: "bold",
                left: 20,
              }}
              variant="contained"
              onClick={authLogin}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </div>
    </header>
  );
}
