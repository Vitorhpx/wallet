import React, {Component} from 'react';
import {StyledLogin, EntryInput, Button} from './Login.style';

type LoginState = {
    username: string;
    password: string;
}

class Login extends Component <{}, LoginState>{
    constructor(props: object){
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
    }

    render(){
        return(
            <StyledLogin>
                <div><strong> Login </strong></div>
                <label htmlFor='UsernameField'> Username:</label>
                <EntryInput
                    id='UsernameField'
                    type='text'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.writeUsername(event.target.value)}
                />
                <label htmlFor='PasswordField'> Password:</label>
                <EntryInput
                    id='PasswordField'
                    type='text'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.writePassword(event.target.value)}
                />
                <Button
                    onClick={() => this.login()}
                >
                    Enter
                </Button>
            </StyledLogin>
        )
    }
}

export default Login;