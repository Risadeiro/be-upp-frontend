import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import ReactInputMask from 'react-input-mask'
import {
  Select,
  MenuItem,
  FormControl,
  FormLabel
} from '@material-ui/core'

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    console.log(this.props.values.firstName)
    this.props.nextStep()

    // if (this.props.values.firstName === 'a')
    //   this.props.skip()
    // else
    //   this.props.nextStep()
  }

  render() {
    const { values, handleChange } = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Nos conte mais sobre você!" />
          <TextField
            hintText="Ex: José da Silva Pereira"
            floatingLabelText="Nome Completo"
            onChange={handleChange('name')}
            defaultValue={values.name}
          />
          <br />

          <TextField
            hintText="Ex: (11) 91234-5678"
            floatingLabelText="Telefone"
            onChange={handleChange('telephone')}
            defaultValue={values.telephone}
          >
            <ReactInputMask mask="(99)99999 9999" maskChar=" " />
          </TextField>
          <br />

          <TextField
            hintText="Ex: be-upp@usp.br"
            floatingLabelText="E-Mail"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />

          <TextField
            hintText="Ex: DD/MM/AAAA"
            floatingLabelText="Data de Nascimento"
            onChange={handleChange('birth')}
            defaultValue={values.birth}
          >
            <ReactInputMask mask="99/99/9999" maskChar=" " />
          </TextField>
          <br />

          <TextField
            hintText="Ex: São Paulo"
            floatingLabelText="Cidade"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />

          <FormControl style={styles.boxForm}>
            <FormLabel Component="legend"> Gênero </FormLabel>
            <Select
              onChange={handleChange('gender')}
              defaultValue={values.gender}
            >
              <MenuItem value="Masculino"> Masculino </MenuItem>
              <MenuItem value="Feminino"> Feminino </MenuItem>
            </Select>
          </FormControl>
          <br />

          {/* {values.name === 'Marcos' && (
            <h1>Teste</h1>)} */}

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
    margin: 15,
  },
  boxForm: {
    minWidth: 120,
    marginTop: 10,
  }
}

export default FormUserDetails
