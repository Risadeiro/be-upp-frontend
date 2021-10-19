import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  TextField,
  InputAdornment
} from '@material-ui/core'

const Text = ({ questionId, questionLabel, placeholder, endUnit, answer }) => {
  const { handleChange } = useContext(FormContext)

  const updateAnswer = (answer) => {
    return {
      value: answer
    }
  }

  return (
    <React.Fragment>
      <TextField
        InputProps={{ endAdornment: <InputAdornment position="end"> {endUnit} </InputAdornment> }}
        InputLabelProps={{ shrink: true }}
        key={questionId}
        style={styles.floatingText}
        label={questionLabel}
        placeholder={placeholder}
        variant="outlined"
        defaultValue={answer?.value}
        onChange={event => handleChange(questionId, updateAnswer(event.target.value))} />
      <br />
    </React.Fragment>
  )
}

const styles = {
  questionContainer: {
    flex: 1,
    border: '2px solid gray',
    borderRadius: 15,
    padding: 20,
    width: '50%',
    marginBottom: 50,
  },
  floatingText: {
    marginBottom: 50,
    width: 'auto'
  }
}

export default Text