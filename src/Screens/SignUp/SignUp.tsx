import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import React from "react";
import {
  baseUrl,
  registerUrl,
  UserRegisterInfo
} from "../../data-sources/users";
import { AUTH_TOKEN } from "../../utils/API";
import { AppPaths } from "../../utils/AppPaths";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

interface ISignUpProps {
  handleSignInClick: (event: any) => void;
}

const SignUp: React.FunctionComponent<ISignUpProps> = props => {
  const classes = useStyles();

  const [username, setUsername] = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [bankToken, setBankToken] = React.useState();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const user: UserRegisterInfo = {
      username: username,
      name: name,
      email: email,
      password: password,
      bankToken: bankToken
    };

    axios
      .post(`${baseUrl}${registerUrl}`, user)
      .then(res => {
        const { token } = res.data;
        sessionStorage.setItem(AUTH_TOKEN, token);
        if (token) {
          window.location.replace(AppPaths.home.path);
        }
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrar-se
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Usuário"
                name="username"
                onChange={event => setUsername(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nome Completo"
                name="name"
                onChange={event => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                onChange={event => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="token"
                label="Token do Banco"
                id="bankToken"
                onChange={event => setBankToken(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={event => setPassword(event.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrar-se
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={props.handleSignInClick} variant="body2">
                Já possui uma conta? Entre aqui
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
