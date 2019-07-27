import React, {Component} from 'react';

type UserPanelState = {
    message: string
}

class UserPanel extends Component <{}, UserPanelState>{
    constructor(props: object){
        super(props);
        this.state = {
            message: 'User panel not yet implemented'
        }
    }

    render(){
        return(
            <div>
                {this.state.message}
            </div>
        )
    }
}

export default UserPanel;