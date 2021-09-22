import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    console.log(this.props.values.firstName)

    if (this.props.values.firstName == 'a')
      this.props.skip()
    else
      this.props.nextStep()
  }



  render() {
    const { values, handleChange } = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Digite seus dados pessoais" />
          <TextField
            hintText="Digite seu primeiro nome"
            floatingLabelText="Primeiro Nome"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />

          <TextField
            hintText="Digite seu sobrenome"
            floatingLabelText="Sobrenome"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />

          <TextField
            hintText="Digite seu e-mail"
            floatingLabelText="E-mail"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />

          <RaisedButton
            label="Continuar"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          >

          </RaisedButton>
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

export default FormUserDetails
