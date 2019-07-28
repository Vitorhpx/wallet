import React, {Component} from 'react';

type Transaction = {
    date: string;
    time: string;
    value: number;
    counterpart: string;
    desc: string;
}

type HistoryState = {
    transactions: Array<Transaction>;
}

class History extends Component <{}, HistoryState>{
    constructor(props: object){
        super(props);
        this.state = {
            transactions: [
                {date: "2019-07-28", time:"14:29", value: 29.99, counterpart: "quitanda", desc:"bananinha"},
                {date: "2019-07-29", time:"14:35", value: 19.99, counterpart: "quitanda", desc:"cenourinha"},
            ]
        }
    }

    render(){
        return(
            <div>
                <ul>
                {this.state.transactions.map( (trans: Transaction) =>
                        <li>
                            <span><strong>{`${trans.value} `}</strong></span>
                            <span>{`${trans.counterpart} `}</span>-<span>{` ${trans.desc} `}</span>
                            <span>{` date: ${trans.date}`}</span>
                            <span>{` time: ${trans.time}`}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default History;