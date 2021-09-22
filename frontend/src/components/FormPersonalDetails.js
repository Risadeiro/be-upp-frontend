import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Select, MenuItem } from '@material-ui/core';

export class FormPersonalDetails extends Component {
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
          <AppBar title="Digite seus dados pessoais" />
          <TextField
            hintText="Digite sua ocupação"
            floatingLabelText="Ocupação"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />

          <TextField
            hintText="Digite sua cidade"
            floatingLabelText="Cidade"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />

          <TextField
            hintText="Digite sua data de nascimento"
            floatingLabelText="Birth"
            onChange={handleChange('birth')}
            defaultValue={values.birth}
          />
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
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormPersonalDetails
