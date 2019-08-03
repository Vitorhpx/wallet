import React, {Component} from 'react';
import { RadioGroup, Radio, FormControl, FormControlLabel, FormLabel, Button, TextField} from '@material-ui/core';
import suitabilityQuestionList from '../../data-sources/suitabilityQuestions';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export type suitabilityAnswer = {
    text: string;
    score: number;
    nextQuestionId: number;
}

export type suitabilityQuestion = {
    id: number;
    text: string;
    answers: Array<suitabilityAnswer>;
    previousQuestionId: number | null;
}

type SuitabilityState = {
    currentQuestion: suitabilityQuestion;
    selectedAnswer: suitabilityAnswer | null;
    scores: Array<number>;
    monthlySpending: number | null;
}

class Suitability extends Component<{}, SuitabilityState>{
    constructor(props:object){
        super(props);
        this.state = {
            currentQuestion: suitabilityQuestionList[0],
            selectedAnswer: null,
            scores: [],
            monthlySpending: null
        }
    }

    goToNextQuestion(){
        if(this.state.selectedAnswer !== null){
            const nextQuestionId: number = this.state.selectedAnswer.nextQuestionId;
            if(nextQuestionId !== -1){
                const nextQuestion = suitabilityQuestionList.find( (question: suitabilityQuestion) => question.id === nextQuestionId );
                if(nextQuestion !== undefined){
                    this.setState({currentQuestion: nextQuestion});
                }
            } else {
                console.log('acabou')
            }
        }
    }

    registerAnswer(selectedAnswerJSONString: string){
        const selectedAnswer: suitabilityAnswer = JSON.parse(selectedAnswerJSONString)
        this.setState({selectedAnswer});
    }

    registerAnswerScore(){
        if(this.state.selectedAnswer !== null){
            const answerScore: number = this.state.selectedAnswer.score;
            const newScoresList: Array<number> = this.state.scores;
            newScoresList.push(answerScore);
            this.setState({scores: newScoresList});
        }
    }

    undoQuestion(){
        const previousQuestion: suitabilityQuestion | undefined = suitabilityQuestionList.find( (element: suitabilityQuestion) => element.id === this.state.currentQuestion.previousQuestionId );
        if(previousQuestion !== undefined){
            const newScoresList: Array<number> = this.state.scores;
            newScoresList.pop();
            this.setState({currentQuestion: previousQuestion, scores: newScoresList});
        } else {
            console.log('fronha2')
        }
    }

    setMonthlySpending(event: React.FormEvent){
        console.log(event);
        const monthlySpending: number = parseInt((event.target as HTMLInputElement).value);
        this.setState({monthlySpending});
    }

    render(){
        if(this.state.currentQuestion.id === -2){
            return(
                <div style={{marginTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Button
                        variant='text'
                        color='primary'
                        onClick={() => this.setState({currentQuestion: suitabilityQuestionList[0]})}
                    >
                        Anterior
                    </Button>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Quanto você gasta por mês?</FormLabel>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='monthlySpending'
                            label='Gasto mensal'
                            name='monthly spending'
                            onChange={(event: React.ChangeEvent) => this.setState({monthlySpending: parseFloat((event.target as HTMLInputElement).value)})}
                        />
                    </FormControl>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => this.setState({currentQuestion: suitabilityQuestionList[1]})}
                    >
                        Próxima
                    </Button>
                </div>
            )
        } else if(this.state.currentQuestion.id !== 12){
            return(
                <div style={{marginTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Button
                        variant='text'
                        color='primary'
                        onClick={() => this.undoQuestion()}
                    >
                        Anterior
                    </Button>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">{this.state.currentQuestion.text}</FormLabel>
                        <RadioGroup
                            aria-label="suitability"
                            name="suitability"
                            value={JSON.stringify(this.state.selectedAnswer)}
                            onChange={(event: React.ChangeEvent<unknown>) => {
                                this.registerAnswer((event.target as HTMLInputElement).value);
                            }}
                        >
                        {this.state.currentQuestion.answers.map( (answer: suitabilityAnswer) => 
                            <FormControlLabel value={JSON.stringify(answer)} control={<Radio />} label={answer.text} />
                        )}
                        </RadioGroup>
                    </FormControl>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => {
                            this.registerAnswerScore();
                            this.goToNextQuestion();
                        }}
                    >
                        Próxima
                    </Button>
                </div>
            )
        } else {
            return(
                <div style={{marginTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <span>Você terminou o teste</span>
                    <Button
                        variant='contained'
                        color='primary'
                        //TODO: função que processa os resultados no onClick
                    >
                        Analisar perfil
                    </Button>
                </div>
            )
        }
    }
}

export default Suitability;