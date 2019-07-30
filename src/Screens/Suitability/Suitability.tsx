import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import React from 'react';
import { H3 } from '../../components/atm.typography/typography.component';
import Select from '@material-ui/core/Select/Select';
import { MenuItem, FormControl } from '@material-ui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { cpus } from 'os';

const marks = [
  {
    value: 1,
    label: 'Freelancer'
  },
  {
    value: 2,
    label: 'Liberal sem carteira de clientes consolidada'
  },
  {
    value: 3,
    label: 'Liberal com carteira de clientes consolidada'
  },
  {
    value: 4,
    label: 'Assalariado sem carteira assinada'
  },
  {
    value: 5,
    label: 'Assalariado com carteira assinada'
  }
];

const marks2 = [
    {
      value: 1,
      label: 'Pequena'
    },
    {
      value: 2,
      label: 'Média'
    },
    {
      value: 3,
      label: 'Grande'
    },
  ];

const valuetext = (value: number): string => {
  return `${value}`;
};

interface ISuitabilityFormProps {}

const SuitabilityForm: React.FunctionComponent<
  ISuitabilityFormProps
> = props => {
  return (
    <FormControl>
      <Grid>
        <Row>
            <Col xs={12}>
                <H3> Qual sua idade? </H3>
            </Col>
        {/* <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby='discrete-slider-custom'
        step={20}
        valueLabelDisplay='auto'
        marks={marks}
      /> */}
        </Row>

        <Row>
            <H3> Ao investir seu dinheiro, o que é mais importante para você?  </H3>
          <Col xs={12}>
            <Button variant='contained' color='primary'>
              Segurança
            </Button>
            <Button variant='contained' color='secondary'>
              Rendimentos
            </Button>
          </Col>
        </Row>

        <Row>
            <H3> Você já investe hoje? </H3>
          <Col xs={12}>
            <Button variant='contained' color='primary'>
              Sim
            </Button>
            <Button variant='contained' color='secondary'>
              Não
            </Button>
          </Col>
        </Row>

        <Row>
            <H3> Você tem seu próprio negócio? </H3>
          <Col xs={12}>
            <Button variant='contained' color='primary'>
              Sim
            </Button>
            <Button variant='contained' color='secondary'>
              Não
            </Button>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <H3>Qual o seu regime de trabalho?</H3>
          </Col>
          <Col xs={6}>
            <Select style={{ width: '100%' }}>
              {marks.map(mark => (
                <MenuItem value={mark.value}>{mark.label}</MenuItem>
              ))}
            </Select>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <H3>Qual o tamanho da sua empresa?</H3>
          </Col>
          <Col xs={6}>
            <Select style={{ width: '100%' }}>
              {marks2.map(mark => (
                <MenuItem value={mark.value}>{mark.label}</MenuItem>
              ))}
            </Select>
          </Col>
        </Row>

        <Row>
            <H3> Você mora em imóvel próprio? </H3>
          <Col xs={12}>
            <Button variant='contained' color='primary'>
              Sim
            </Button>
            <Button variant='contained' color='secondary'>
              Não
            </Button>
          </Col>
        </Row>

        <Row>
            <H3> Você é casado? </H3>
          <Col xs={12}>
            <Button variant='contained' color='primary'>
              Sim
            </Button>
            <Button variant='contained' color='secondary'>
              Não
            </Button>
          </Col>
        </Row>

        <Row>
            <H3> Você tem filhos? </H3>
          <Col xs={12}>
            <Button variant='contained' color='primary'>
              Sim
            </Button>
            <Button variant='contained' color='secondary'>
              Não
            </Button>
          </Col>
        </Row>

        <Row>
            <H3> Quando você está gerenciando seu dinheiro, você está mais propenso a </H3>
          <Col xs={12}>
            <Button variant='contained' color='primary'>
              Não fazer muito planejamento
            </Button>
            <Button variant='contained' color='secondary'>
              Fazer orçamento para todos os gastos
            </Button>
          </Col>
        </Row>

        <Row>
            <H3> Supondo que você receba uma herança de grande valor, seu primeiro pensamento é </H3>
          <Col xs={12}>
            <Button variant='contained' color='primary'>
              Vou comprar um Carro novo!
            </Button>
            <Button variant='contained' color='secondary'>
              Posso ganhar ainda mais!
            </Button>
          </Col>
        </Row>

        <Row>
            <H3> Se algo inesperado acontece com a economia do país, você </H3>
          <Col xs={12}>
            <Button variant='contained' color='primary'>
              Saca seus investimentos na hora
            </Button>
            <Button variant='contained' color='secondary'>
              Avalia a situação com calma
            </Button>
          </Col>
        </Row>

        <Row>
            <H3> Qual seu custo fixo no mês? </H3>
          <Col xs={12}>
          </Col>
        </Row>

      </Grid>
    </FormControl>
  );
};

export default SuitabilityForm;
