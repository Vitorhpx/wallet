import React, {Component} from 'react';
import {StyledLogin, EntryInput, Button} from './Login.style';

type LoginState = {
    username: string;
    password: string;
}

type LoginProps = {
    setSessionToken: (sessionToken: string) => void
}

class Login extends Component<LoginProps, LoginState>{
    constructor(props: LoginProps){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    writeUsername(username: string){
        this.setState({username})
    }

    writePassword(password: string){
        this.setState({password})
    }

    login(){
        console.log(this.state.username);
        console.log(this.state.password);
        const sessionToken: string = this.state.username+this.state.password;
        this.props.setSessionToken(sessionToken);
    }

    render(){
        return(
            <StyledLogin>
                <div><strong> Login </strong></div>
                <label htmlFor='UsernameField'> Nome de usuário:</label>
                <EntryInput
                    id='UsernameField'
                    type='text'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.writeUsername(event.target.value)}
                />
                <label htmlFor='PasswordField'> Senha:</label>
                <EntryInput
                    id='PasswordField'
                    type='text'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.writePassword(event.target.value)}
                />
                <Button
                    onClick={() => this.login()}
                >
                    Entrar
                </Button>
            </StyledLogin>
        )
    }
}

export default Login;