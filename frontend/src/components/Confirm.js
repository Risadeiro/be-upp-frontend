import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values: { firstName, lastName, email, occupation, city, birth } } = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirme seus dados" />
          <List>
            <ListItem
              primaryText="Primeiro Nome"
              secondaryText={firstName}
            />
            <ListItem
              primaryText="Sobrenome"
              secondaryText={lastName}
            />
            <ListItem
              primaryText="E-mail"
              secondaryText={email}
            />
            <ListItem
              primaryText="Ocupação"
              secondaryText={occupation}
            />
            <ListItem
              primaryText="Cidade"
              secondaryText={city}
            />
            <ListItem
              primaryText="Data de Nascimento"
              secondaryText={birth}
            />
          </List>

          <RaisedButton
            label="Voltar"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />

          <RaisedButton
            label="Confirmar e Continuar"
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

export default Confirm
