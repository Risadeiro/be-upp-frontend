import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Sucesso" />
          <h1> Obrigado pela sua cooperação! </h1>
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
