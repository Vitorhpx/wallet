import React, {Component} from 'react';

type SuitabilityTestState = {
    answers: string;
}

type SuitabilityTestProps = {}

class SuitabilityTest extends Component<{}, SuitabilityTestState, SuitabilityTestProps>{
    constructor(props: SuitabilityTestProps){
        super(props);
        this.state = {
            answers: ''
        }
    }

    render(){
        return(
            <p>
                not yet implemented
            </p>
        )
    }
}

export default SuitabilityTest;