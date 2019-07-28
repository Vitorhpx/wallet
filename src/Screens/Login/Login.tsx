import React, {Component} from 'react';

type LoginState = {
    CPF: string;
    password: string;
}

class Login extends Component <{}, LoginState>{
    constructor(props: object){
        super(props);
        this.state = {
            CPF: '',
            password: ''
        }
    }

    writeCPF(CPF: string){
        this.setState({CPF})
    }

    writePassword(password: string){
        this.setState({password})
    }

    login(){
        console.log(this.state.CPF);
        console.log(this.state.password);
    }

    render(){
        return(
            <div id='Login'>
                <label htmlFor='CPFField'> CPF:</label>
                <input
                    id='CPFField'
                    type='text'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.writeCPF(event.target.value)}
                />
                <label htmlFor='PasswordField'> Password:</label>
                <input
                    id='PasswordField'
                    type='text'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.writePassword(event.target.value)}
                />
                <button
                    onClick={() => this.login()}
                    >
                    Submit
                </button>
            </div>
        )
    }
}

export default Login;