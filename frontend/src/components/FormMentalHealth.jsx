import React, { Component } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
  AppBar,
} from '@material-ui/core'
import Choices from '../misc/Choices'

export class FormMentalHealth extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    return (
      <React.Fragment>
        <AppBar position='sticky'>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            E sua saúde mental?
          </Typography>
        </AppBar>
        <br />

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Em relação à sua saúde mental, assinale a opção que você mais se identifica: </FormLabel>
          <RadioGroup>
            <FormControlLabel value="1" control={<Radio />} label="Não penso em fazer nada" />
            <FormControlLabel value="2" control={<Radio />} label="Estou pensando em fazer algo, mas não estou bem certo disso" />
            <FormControlLabel value="3" control={<Radio />} label="Estou planejando fazer algumas mudanças com foco na minha saúde mental" />
            <FormControlLabel value="4" control={<Radio />} label="Estou fazendo mudanças na minha vida com foco na minha saúde mental há menos de 6 meses" />
            <FormControlLabel value="5" control={<Radio />} label="Estou fazendo mudanças na minha vida com foco na minha saúde mental há mais de 6 meses" />
          </RadioGroup>
        </FormControl>
        <br />



        <Button
          color="secondary"
          variant="contained"
          style={styles.buttonBack}
          onClick={this.back}
        > Voltar </Button>

        <Button
          color="primary"
          variant="contained"
          style={styles.buttonContinue}
          onClick={this.continue}
        > Continuar </Button>
      </React.Fragment>
    )
  }
}

const styles = {
  buttonContinue: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: "#21b6ae",
  },
  buttonBack: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#999999',
    color: '#FFFFFF'
  },
  questionContainer: {
    flex: 1,
    border: '2px solid gray',
    borderRadius: 15,
    padding: 20,
    width: '50%',
    marginBottom: 50,
  },
  labelText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
}

export default FormMentalHealth