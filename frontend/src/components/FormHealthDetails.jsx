import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel
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

          <div>
            <br />
            <FormLabel> Como você avalia seu nível de saúde? </FormLabel>
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
          </div>

          <FormGroup style={styles.group}>
            <FormLabel> Assinale qual(is) doenças você apresenta </FormLabel>
            <FormControlLabel control={<Checkbox />} label="Diabetes" />
            <FormControlLabel control={<Checkbox />} label="Alto Colesterol" />
          </FormGroup>
          <br />

          <FormControl style={styles.boxForm}>
            <FormLabel Component="legend"> Faz uso de alguma medicação de uso contínuo </FormLabel>
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
    margin: 15
  },
  sliderStyle: {
    width: 500,
    marginTop: 10,
  },
  boxForm: {
    Width: 100,
    marginTop: 50,
  },
  group: {
    alignContent: 'center',
    marginTop: 50,
    marginLeft: -20
  },
}

export default FormHealthDetails
