import React, { Component } from 'react'
import {
  TextField,
  AppBar,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  Typography,
  Button,
} from '@material-ui/core'

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values, handleChange } = this.props

    return (
      <React.Fragment>
        <AppBar position='sticky'>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Nos conte mais sobre você!
          </Typography>
        </AppBar>
        <br />

        <TextField
          style={styles.floatingText}
          placeholder="Ex: José da Silva Pereira"
          label="Nome Completo"
          onChange={handleChange('name')}
          defaultValue={values.name}
          variant="standard"
        />
        <br />

        <TextField
          style={styles.floatingText}
          placeholder="Ex: (11) 91234-5678"
          label="Telefone"
          onChange={handleChange('telephone')}
          defaultValue={values.telephone}
          variant="standard"
        />
        <br />

        <TextField
          style={styles.floatingText}
          placeholder="Ex: be-upp@usp.br"
          label="E-Mail"
          onChange={handleChange('email')}
          defaultValue={values.email}
          variant="standard"
        />
        <br />

        <TextField
          style={styles.floatingText}
          placeholder="Ex: DD/MM/AAAA"
          label="Data de Nascimento"
          onChange={handleChange('birth')}
          defaultValue={values.birth}
          variant="standard"
        />
        <br />

        <TextField
          style={styles.floatingText}
          placeholder="Ex: São Paulo"
          label="Cidade"
          onChange={handleChange('city')}
          defaultValue={values.city}
          variant="standard"
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
    margin: 15,
    backgroundColor: "#21b6ae",
  },
  boxForm: {
    minWidth: 120,
    marginTop: 10,
  },
  floatingText: {
    marginBottom: 20
  }
}

export default FormUserDetails
