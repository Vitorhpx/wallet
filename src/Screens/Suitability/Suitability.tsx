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
    value: 0,
    label: 'Freelancer'
  },
  {
    value: 20,
    label: 'Liberal sem carteira de clientes consolidada'
  },
  {
    value: 40,
    label: 'Liberal com carteira de clientes consolidada'
  },
  {
    value: 60,
    label: 'Assalariado sem carteira assinada'
  },
  {
    value: 80,
    label: 'Assalariado com carteira assinada'
  }
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
        {/* <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby='discrete-slider-custom'
        step={20}
        valueLabelDisplay='auto'
        marks={marks}
      /> */}
        <Row>
          <Col xs={12}>
            <Button variant='contained' color='primary'>
              Sim
            </Button>
            <Button variant='contained' color='secondary'>
              Não
            </Button>
          </Col>
        </Row>
      </Grid>
    </FormControl>
  );
};

export default SuitabilityForm;
