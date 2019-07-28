import React, {Component} from 'react';
import {StyledAccountInfo} from './UserPanel.style';

type AccountInfoState = {
    username: string;
    suitability: string;
}

type AccountInfoProps = {

}

class AccountInfo extends Component<{}, AccountInfoState, AccountInfoProps>{
    constructor(props: AccountInfoProps){
        super(props);
        this.state = {
            username: 'Doña Marocas',
            suitability: 'Arrojada'
        }
    }

    render(){
        return(
            <StyledAccountInfo>
                <h3>{this.state.username}</h3>
                <p>{this.state.suitability}</p>
            </StyledAccountInfo>
        )
    }
}

export default AccountInfo;