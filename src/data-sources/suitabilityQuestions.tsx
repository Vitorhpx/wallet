import {suitabilityQuestion} from '../Screens/UserPanel/Suitability';

const suitabilityQuestionList: Array<suitabilityQuestion> = [
    {
        id: -2,
        previousQuestionId: null,
        text: 'Quanto você gasta mensalmente?',
        answers: []
    },{
        id: -1,
        previousQuestionId: -2,
        text: 'Qual a sua idade?',
        answers: [
            {text: '1 - 10', score: 0, nextQuestionId: 0},
            {text: '11 - 20', score: 1, nextQuestionId: 0},
            {text: '21 - 30', score: 2, nextQuestionId: 0},
            {text: '31 - 40', score: 3, nextQuestionId: 0},
            {text: '41 - 50', score: 4, nextQuestionId: 0},
            {text: '51 - 55', score: 5, nextQuestionId: 0},
            {text: '56 - 60', score: 6, nextQuestionId: 0},
            {text: '61 - 65', score: 7, nextQuestionId: 0},
            {text: '66 - 70', score: 8, nextQuestionId: 0},
            {text: '71 - 79', score: 9, nextQuestionId: 0},
            {text: '80+', score: 10, nextQuestionId: 0}
        ]
    },{
        id: 0,
        previousQuestionId: -1,
        text: 'Ao investir seu dinheiro, o que é mais importante para você?',
        answers: [{text: 'Segurança', score: 10, nextQuestionId: 1}, {text: 'Rendimentos', score: 0, nextQuestionId: 1}]
    },{
        id: 1,
        previousQuestionId: 0,
        text: 'Você já investe hoje?',
        answers: [{text: 'Sim', score: 0, nextQuestionId: 2}, {text: 'Não', score: 5, nextQuestionId: 2}]
    },{
        id: 2,
        previousQuestionId: 1,
        text: 'Se algo inesperado acontecer na economia ou no mercado e o resultado é uma variação negativa nos seus investimentos,  qual é a sua atitude?',
        answers: [{text: 'Resgato na hora', score: 5, nextQuestionId: 3}, {text: 'Analiso com calma', score: 0, nextQuestionId: 3}]
    },{
        id: 3,
        previousQuestionId: 2,
        text: 'Digamos que você tenha acabado de ganhar na loteria. O que vem a sua mente primeiro?',
        answers: [{text: 'Posso mudar o mundo', score: 5, nextQuestionId: 4}, {text: 'Posso ganhar ainda mais', score: 0, nextQuestionId: 4}]
    },{
        id: 4,
        previousQuestionId: 3,
        text: 'Você tem plano de saúde?',
        answers: [{text: 'Sim', score: 0, nextQuestionId: 5}, {text: 'Não', score: 10, nextQuestionId: 5}]
    },{
        id: 5,
        previousQuestionId: 4,
        text: 'Você tem seu próprio negócio?',
        answers: [{text: 'Sim', score: 0, nextQuestionId: 6}, {text: 'Não', score: 0, nextQuestionId: 7}]
    },{
        id: 6,
        previousQuestionId: 5,
        text: 'Qual o porte da sua empresa?',
        answers: [{text: 'Pequena', score: 10, nextQuestionId: 8}, {text: 'Média', score: 5, nextQuestionId: 8}, {text: 'Grande', score: 0, nextQuestionId: 8}]
    },{
        id: 7,
        previousQuestionId: 5,
        text: 'Qual o seu regime de trabalho?',
        answers: [
            {text: 'Freelancer', score: 10, nextQuestionId: 8},
            {text: 'Liberal com carteira em construção', score: 8, nextQuestionId: 8},
            {text: 'Liberal com carteira estabelecida', score: 6, nextQuestionId: 8},
            {text: 'Assalariado com carteira assinada', score: 3, nextQuestionId: 8},
            {text: 'Carteira assinada', score: 0, nextQuestionId: 8}
        ]
    },{
        id: 8,
        previousQuestionId: 5,
        text: 'Mora em imóvel próprio?',
        answers: [{text: 'Sim', score: 0, nextQuestionId: 9}, {text: 'Não', score: 10, nextQuestionId: 9}]
    },{
        id: 9,
        previousQuestionId: 8,
        text: 'Você é casado?',
        answers: [{text: 'Sim', score: 5, nextQuestionId: 10}, {text: 'Não', score: 0, nextQuestionId: 10}]
    },{
        id: 10,
        previousQuestionId: 9,
        text: 'Você tem filhos?',
        answers: [{text: 'Sim', score: 10, nextQuestionId: 11}, {text: 'Não', score: 0, nextQuestionId: 11}]
    },{
        id: 11,
        previousQuestionId: 10,
        text: 'Quando se trata de dinheiro, como você se descreveria?',
        answers: [{text: 'Vivo o momento sem planejar', score: 10, nextQuestionId: 12}, {text: 'Faço orçamento de tudo', score: 5, nextQuestionId: 12}]
    },{
        id: 12,
        previousQuestionId: null,
        text: '',
        answers: []
    }
]

export default suitabilityQuestionList;