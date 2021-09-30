import React, { Component } from 'react'
import Choices from '../misc/Choices'
import {
  AppBar,
  Button,
  FormControl,
  Slider,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core'

export class FormUserNutrition extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props
    const customMarks = [
      {
        value: 1,
        label: '1'
      },
      {
        value: 2,
        label: '2'
      },
      {
        value: 3,
        label: '3'
      },
      {
        value: 4,
        label: '4'
      },
      {
        value: 5,
        label: '5'
      },
      {
        value: 6,
        label: '6'
      },
      {
        value: 7,
        label: '7'
      },
      {
        value: 8,
        label: '8'
      },
      {
        value: 9,
        label: '9'
      },
      {
        value: 10,
        label: '10'
      }
    ]

    return (
      <React.Fragment>
        <AppBar position='sticky'>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Nos conte sobre sua alimentação!
          </Typography>
        </AppBar>
        <br />

        <FormLabel style={styles.labelText}> Como você avalia a sua alimentação? </FormLabel>
        <br />
        <Slider
          style={styles.sliderStyle}
          marks={customMarks}
          valueLabelDisplay='auto'
          min={1}
          max={10}
          onChange={handleChange('healthLevel')}
          defaultValue={values.healthLevel}
        />
        <br />

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Em relação à sua alimentação, assinale a opção que você mais se identifica: </FormLabel>
          <RadioGroup>
            <FormControlLabel value="1" control={<Radio />} label="Não penso em mudar minha alimentação" />
            <FormControlLabel value="2" control={<Radio />} label="Estou pensando em mudar minha alimentação, mas ainda não estou muito certo disso" />
            <FormControlLabel value="3" control={<Radio />} label="Decidi mudar minha alimentação e só estou pensando em como fazer" />
            <FormControlLabel value="4" control={<Radio />} label="Já estou mudando minha alimentação, mas estou com dificuldades" />
            <FormControlLabel value="5" control={<Radio />} label="Já estou mudando minha alimentação e com sucesso" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Quantas vezes por dia: </FormLabel>
          <Choices
            cols={values.nutritionInfoCol}
            rows={values.nutritionInfoRow}
            onSubmit={values => console.log(values)}
          />
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
  sliderStyle: {
    width: 500,
    marginTop: 10,
    marginBottom: 50
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
  }
}

export default FormUserNutrition