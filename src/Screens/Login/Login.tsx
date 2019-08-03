import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import React from 'react';
import { authUrl, baseUrl } from '../../data-sources/users';
import { AUTH_TOKEN, BANK_TOKEN } from '../../utils/API';
import { AppPaths } from '../../utils/AppPaths';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
interface ISignInProps {
  handleSignUpClick: (event: any) => void;
}

export const SignIn: React.FunctionComponent<ISignInProps> = props => {
  const classes = useStyles();

  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [error, setError] = React.useState();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(undefined);

    const user = {
      username: username,
      password: password
    };

    axios
      .post(`${baseUrl}${authUrl}`, user)
      .then(res => {
        console.log('TCL: handleSubmit -> res', res);
        const { token, bankToken, banks } = res.data;
        sessionStorage.setItem(AUTH_TOKEN, token);
        sessionStorage.setItem(BANK_TOKEN, bankToken);
        if (token) {
          window.location.replace(AppPaths.home.path);
        }
      })
      .catch(error => {
        setError(error);
        console.log(error);
        return error;
      });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Entrar
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Usuário'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={event => setUsername(event.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={event => setPassword(event.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Entrar
          </Button>
          {error && (
            <Typography color='error' variant='body1'>
              {error.message}
            </Typography>
          )}
          <Grid container>
            <Grid item>
              <Link onClick={props.handleSignUpClick} variant='body2'>
                Não possui uma conta? Crie aqui!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
