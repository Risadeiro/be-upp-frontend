import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

import {
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core'

export class FormUserSleep extends Component {
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

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Nos conte sobre seu sono!" />
          <br />

          <FormControl component="fieldset" style={styles.questionContainer}>
            <FormLabel component="legend" style={styles.labelText}> Em relação ao seu sono, assinale a opção que você mais se identifica: </FormLabel>
            <RadioGroup>
              <FormControlLabel value="1" control={<Radio />} label="Não penso em mudar minha rotina de sono (meus hábitos relacionados ao sono)" />
              <FormControlLabel value="2" control={<Radio />} label="Estou pensando em mudar minha rotina de sono, mas não estou bem certo disso" />
              <FormControlLabel value="3" control={<Radio />} label="Decidi mudar minha rotina de sono e só estou pensando em como fazer" />
              <FormControlLabel value="4" control={<Radio />} label="Já estou mudando minha rotina de sono, mas estou com dificuldades" />
              <FormControlLabel value="5" control={<Radio />} label="Já estou mudando minha rotina de sono e com sucesso" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" style={styles.questionContainer}>
            <FormLabel component="legend" style={styles.labelText}> Em relação ao seu sono, assinale a opção que você mais se identifica: </FormLabel>
            <RadioGroup>
              <FormControlLabel value="1" control={<Radio />} label="Não penso em mudar minha rotina de sono (meus hábitos relacionados ao sono)" />
              <FormControlLabel value="2" control={<Radio />} label="Estou pensando em mudar minha rotina de sono, mas não estou bem certo disso" />
              <FormControlLabel value="3" control={<Radio />} label="Decidi mudar minha rotina de sono e só estou pensando em como fazer" />
              <FormControlLabel value="4" control={<Radio />} label="Já estou mudando minha rotina de sono, mas estou com dificuldades" />
              <FormControlLabel value="5" control={<Radio />} label="Já estou mudando minha rotina de sono e com sucesso" />
            </RadioGroup>
          </FormControl>
          <br />

          <FormLabel component="legend" style={styles.labelText}> Você dorme bem? </FormLabel>
          <br />
          <FormControl style={styles.boxForm}>
            <Select
              onChange={handleChange('medicine')}
              defaultValue={values.medicine}
            >
              <MenuItem value="medicinePositive"> Sim </MenuItem>
              <MenuItem value="medicineNegative"> Não </MenuItem>
            </Select>
          </FormControl>
          <br />

          <FormControl component="fieldset" style={styles.questionContainer}>
            <FormLabel component="legend" style={styles.labelText}>Pensando no seu dia a dia, você classifica o seu nível de atividade física:</FormLabel>
            <RadioGroup style={{
              justifyContent: 'center',
              alignItems: 'center',
            }} row>
              <FormControlLabel labelPlacement='top' value="1" control={<Radio />} label="< 5h" />
              <FormControlLabel labelPlacement='top' value="2" control={<Radio />} label="5h a 7h" />
              <FormControlLabel labelPlacement='top' value="3" control={<Radio />} label="> 7h" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" style={styles.questionContainer}>
            <FormLabel component="legend" style={styles.labelText}> Com que frequência você acorda à noite? </FormLabel>
            <RadioGroup style={{
              justifyContent: 'center',
              alignItems: 'center',
            }} row>
              <FormControlLabel labelPlacement='top' value="1" control={<Radio />} label="Nunca ou uma vez" />
              <FormControlLabel labelPlacement='top' value="2" control={<Radio />} label="2 ou 3 vezes" />
              <FormControlLabel labelPlacement='top' value="3" control={<Radio />} label="4 ou mais vezes" />
            </RadioGroup>
          </FormControl>
          <br />

          <FormLabel component="legend" style={styles.labelText}> Você acorda cansado? </FormLabel>
          <br />
          <FormControl style={styles.boxForm}>
            <Select
              onChange={handleChange('medicine')}
              defaultValue={values.medicine}
            >
              <MenuItem value="medicinePositive"> Sim </MenuItem>
              <MenuItem value="medicineNegative"> Não </MenuItem>
            </Select>
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
    margin: 15,
  },
  boxForm: {
    flex: 1,
    width: 100,
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

export default FormUserSleep