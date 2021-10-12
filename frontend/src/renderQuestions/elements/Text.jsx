import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  TextField,
} from '@material-ui/core'

const Text = ({ id, label, value, options }) => {
  const { handleChange } = useContext(FormContext)

  return (
    <React.Fragment>
      <TextField
        key={id}
        style={styles.floatingText}
        label={label}
        variant="standard"
        defaultValue={value}
        onChange={event => handleChange(id, event)} />
      <br />
    </React.Fragment>
  )
}

const styles = {
  labelText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  questionContainer: {
    flex: 1,
    border: '2px solid gray',
    borderRadius: 15,
    padding: 20,
    width: '50%',
    marginBottom: 50,
  },
  floatingText: {
    marginBottom: 50
  }
}

export default Text