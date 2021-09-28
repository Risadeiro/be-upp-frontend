import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import {
  Select,
  MenuItem,
  FormControl,
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core'

export class FormHealthDetails extends Component {
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
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Nos conte sobre sua saúde!" />
          <br />

          <FormLabel style={styles.labelText}> Como você avalia seu nível de saúde? </FormLabel>
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
            <FormLabel component="legend" style={styles.labelText}> Assinale qual(is) doenças você apresenta </FormLabel>
            <FormControlLabel control={<Checkbox />} label="Diabetes" />
            <FormControlLabel control={<Checkbox />} label="Alto Colesterol" />
            <FormControlLabel control={<Checkbox />} label="Hipertensão" />
            <FormControlLabel control={<Checkbox />} label="Doenças reumatológicas" />
            <FormControlLabel control={<Checkbox />} label="Doenças pulmonares crônicas" />
            <FormControlLabel control={<Checkbox />} label="Hipotireoidismo/hipertireoidismo" />
            <FormControlLabel control={<Checkbox />} label="Outra" />
            <FormControlLabel control={<Checkbox />} label="Nenhuma" />
          </FormControl>
          <br />

          <FormLabel Component="legend" style={styles.labelText}> Faz uso de alguma medicação de uso contínuo? </FormLabel>
          <br /> <br />
          <FormControl style={{ width: 100, marginBottom: 20 }}>
            <Select
              onChange={handleChange('medicine')}
              defaultValue={values.medicine}
            >
              <MenuItem value="medicinePositive"> Sim </MenuItem>
              <MenuItem value="medicineNegative"> Não </MenuItem>
            </Select>
          </FormControl>
          <br />

          {values.medicine === 'medicinePositive' && (
            <TextField floatingLabelText="Se sim, quais?" />
          )}
          <br />

          <TextField floatingLabelText="Altura (cm) - Somente números" />
          <br />

          <TextField floatingLabelText="Peso (kg) - Somente números" />
          <br /> <br /> <br />

          <FormControl component="fieldset" style={styles.questionContainer}>
            <FormLabel component="legend" style={styles.labelText}> Em relação ao seu peso corporal: </FormLabel>
            <RadioGroup>
              <FormControlLabel value="Eu quero ganhar bastante peso" control={<Radio />} label="Eu quero ganhar bastante peso" />
              <FormControlLabel value="Eu quero ganhar um pouco de peso" control={<Radio />} label="Eu quero ganhar um pouco de peso" />
              <FormControlLabel value="Estou feliz com o meu peso" control={<Radio />} label="Estou feliz com o meu peso" />
              <FormControlLabel value="Eu quero perder um pouco de peso" control={<Radio />} label="Eu quero perder um pouco de peso" />
              <FormControlLabel value="Eu quero perder bastante peso" control={<Radio />} label="Eu quero perder bastante peso" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" style={styles.questionContainer}>
            <FormLabel component="legend" style={styles.labelText}> Assinale a alternativa que descreve melhor a sua situação: </FormLabel>
            <RadioGroup defaultValue="3">
              <FormControlLabel value="1" control={<Radio />} label="No momento eu não estou fazendo nada para perder peso e não tenho a intenção de fazer algo pelos próximos meses" />
              <FormControlLabel value="2" control={<Radio />} label="No momento eu não estou fazendo nada para perder peso, mas estou pensando a respeito" />
              <FormControlLabel value="3" control={<Radio />} label="No último ano eu não fiz nada para perder peso, mas estou planejando fazer algo nos próximos 30 dias" />
              <FormControlLabel value="4" control={<Radio />} label="Eu tenho feito um esforço para perder peso" />
              <FormControlLabel value="5" control={<Radio />} label="Eu tenho feito um esforço para manter meu peso" />
            </RadioGroup>
          </FormControl>
          <br />

          <FormControl component="fieldset" style={styles.questionContainer}>
            <FormLabel component="legend" style={styles.labelText}> Instrução de medida: de preferência, ao acordar antes de levantar ou, em outra ocasião, após 5 min em deitado, fazer 2 medidas </FormLabel>
            <TextField style={{ alignSelf: 'center' }} floatingLabelText="Frequência cardíaca de repouso" />
          </FormControl>
          <br /> <br /> <br />

          <FormControl component="fieldset" style={styles.questionContainer}>
            <FormLabel component="legend" style={styles.labelText}> Com relação ao cigarro: </FormLabel>
            <RadioGroup style={{
              //justifyContent: 'center',
              //alignItems: 'center',
            }}>
              <FormControlLabel value="1" control={<Radio />} label="Sou fumante" />
              <FormControlLabel value="2" control={<Radio />} label="Sou ex-fumante" />
              <FormControlLabel value="3" control={<Radio />} label="Nunca fui fumante" />
            </RadioGroup>
          </FormControl>
          <br />

          <FormControl component="fieldset" style={styles.questionContainer}>
            <FormLabel component="legend" style={styles.labelText}> Com relação a bebidas alcoólicas você: </FormLabel>
            <RadioGroup style={{
              //justifyContent: 'center',
              //alignItems: 'center',
            }}>
              <FormControlLabel value="1" control={<Radio />} label="Não bebe" />
              <FormControlLabel value="2" control={<Radio />} label="Bebe eventualmente" />
              <FormControlLabel value="3" control={<Radio />} label="Bebe mais que 10 copos/semana" />
            </RadioGroup>
          </FormControl>
          <br />

          <FormControl component="fieldset" style={styles.questionContainer}>
            <FormLabel component="legend" style={styles.labelText}> Em relação à qualidade de vida, quais das opções abaixo, você escolheria para melhorar? Escolha no máximo 3: </FormLabel>
            <FormControlLabel control={<Checkbox />} label="Não penso em mudar" />
            <FormControlLabel control={<Checkbox />} label="Alto Colesterol" />
            <FormControlLabel control={<Checkbox />} label="Hipertensão" />
            <FormControlLabel control={<Checkbox />} label="Doenças reumatológicas" />
            <FormControlLabel control={<Checkbox />} label="Doenças pulmonares crônicas" />
            <FormControlLabel control={<Checkbox />} label="Hipotireoidismo/hipertireoidismo" />
            <FormControlLabel control={<Checkbox />} label="Outra" />
            <FormControlLabel control={<Checkbox />} label="Nenhuma" />
          </FormControl>
          <br />

          <RaisedButton
            label="Voltar"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />

          <RaisedButton
            label="Continuar"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider >
    )
  }
}

const styles = {
  button: {
    margin: 15
  },
  sliderStyle: {
    width: 500,
    marginTop: 10,
    marginBottom: 50
  },
  boxForm: {
    width: 100,
    marginBottom: 20
  },
  group: {
    alignContent: 'center',
    marginLeft: -20
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

export default FormHealthDetails
