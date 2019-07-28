import React, {Component} from 'react';

type HistoryState = {
    message: string
}

class History extends Component <{}, HistoryState>{
    constructor(props: object){
        super(props);
        this.state = {
            message: 'History not yet implemented'
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

export default History;