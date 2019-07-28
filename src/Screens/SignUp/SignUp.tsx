import React, {Component} from 'react';
import { StyledSignUp, EntryInput, Button} from './SignUp.style'

type SignUpState = {
    fullName: string;
    birthDate: string;
    email: string;
    username: string;
    password: string;
}

class SignUp extends Component <{}, SignUpState>{
    constructor(props: object){
        super(props);
        this.state = {
            fullName: '',
            birthDate: '',
            email: '',
            username: '',
            password: ''
        }
    }

    writeFullName(fullName: string){
        this.setState({fullName})
    }

    writeBirthDate(birthDate: string){
        this.setState({birthDate})
    }

    writeEmail(email: string){
        this.setState({email})
    }

    writeUsername(username: string){
        this.setState({username})
    }

    writePassword(password: string){
        this.setState({password})
    }

    signUp(){
        console.log(this.state.username);
        console.log(this.state.password);
    }

    render(){
        return(
            <StyledSignUp>
                <div><strong> Sign up </strong></div>
                <label htmlFor='FullNameField'> Nome completo:</label>
                <EntryInput
                    id='FullNameField'
                    type='text'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.writeFullName(event.target.value)}
                />
                <label htmlFor='BirthDateField'> Nascimento:</label>
                <EntryInput
                    id='BirthDateField'
                    type='date'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.writeBirthDate(event.target.value)}
                />
                <label htmlFor='EmailField'> Email:</label>
                <EntryInput
                    id='EmailField'
                    type='email'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.writeEmail(event.target.value)}
                />
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
                    onClick={() => this.signUp()}
                >
                    Criar conta
                </Button>
            </StyledSignUp>
        )
    }
}

export default SignUp;