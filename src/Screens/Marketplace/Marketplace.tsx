import React, {Component} from 'react';

type MarketplaceState = {
    message: string
}

class Marketplace extends Component <{}, MarketplaceState>{
    constructor(props: object){
        super(props);
        this.state = {
            message: 'Marketplace not yet implemented'
        }
    }

    render(){
        return(
            <div>
                <ul>
                    <li>
                        <button>
                            hellp
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Marketplace;