import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    width: 80,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: 'Freelancer',
  },
  {
    value: 20,
    label: 'Liberal sem carteira de clientes consolidada',
  },
  {
    value: 40,
    label: 'Liberal com carteira de clientes consolidada',
  },
  {
    value: 60,
    label: 'Assalariado sem carteira assinada',
  },
  {
    value: 80,
    label: 'Assalariado com carteira assinada',
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.margin} />
    <Typography id="discrete-slider-custom" gutterBottom>
    Qual o seu regime de trabalho?    
    </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>

    <Button variant="contained" color="primary" className={classes.button}>
        Sim
    </Button>
    <Button variant="contained" color="secondary" className={classes.button}>
        Não
    </Button>
  );
}