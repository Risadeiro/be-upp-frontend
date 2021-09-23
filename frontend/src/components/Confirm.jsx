import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
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
    const { values: { name, telephone, birth, gender, email, city, healthLevel } } = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirme seus dados" />
          <List>
            <ListItem
              primaryText="Nome Completo"
              secondaryText={name}
            />
            <ListItem
              primaryText="Telefone"
              secondaryText={telephone}
            />
            <ListItem
              primaryText="Data de Nascimento"
              secondaryText={birth}
            />
            <ListItem
              primaryText="Gênero"
              secondaryText={gender}
            />
            <ListItem
              primaryText="E-mail"
              secondaryText={email}
            />
            <ListItem
              primaryText="Cidade"
              secondaryText={city}
            />
            <ListItem
              primaryText="Nível de Saúde"
              secondaryText={healthLevel}
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
