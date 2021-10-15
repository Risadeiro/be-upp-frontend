import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  TextField
} from '@material-ui/core'

const Text = ({ questionId, questionLabel, answer }) => {
  const { handleChange } = useContext(FormContext)

  const updateAnswer = (answer) => {
    return {
      value: answer
    }
  }

  return (
    <React.Fragment>
      <TextField
        key={questionId}
        style={styles.floatingText}
        label={questionLabel}
        variant="standard"
        defaultValue={answer?.value}
        onChange={event => handleChange(questionId, updateAnswer(event.target.value))} />
      <br />
    </React.Fragment>
  )
}

const styles = {
  questionLabeText: {
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