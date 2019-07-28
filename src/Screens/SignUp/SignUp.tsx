import React, {Component} from 'react';

type SignUpState = {
    CPF: string;
    password: string;
}

class SignUp extends Component <{}, SignUpState>{
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

    SignUp(){
        console.log(this.state.CPF);
        console.log(this.state.password);
    }

    render(){
        return(
            <div id='SignUp'>
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
                    onClick={() => this.SignUp()}
                    >
                    Submit
                </button>
            </div>
        )
    }
}

export default SignUp;