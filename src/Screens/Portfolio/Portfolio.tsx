import React, {Component} from 'react';

type PortfolioState = {
    message: string
}

class Portfolio extends Component <{}, PortfolioState>{
    constructor(props: object){
        super(props);
        this.state = {
            message: 'Portfolio not yet implemented'
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

export default Portfolio;