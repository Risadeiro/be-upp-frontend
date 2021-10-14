import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  FormControl,
  FormquestionLabe,
  FormControlquestionLabe,
  TextField,
} from '@material-ui/core'

const Text = ({ questionId, questionLabe, answer }) => {
  const { handleChange } = useContext(FormContext)

  return (
    <React.Fragment>
      <TextField
        key={questionId}
        style={styles.floatingText}
        questionLabe={questionLabe}
        variant="standard"
        defaultValue={answer}
        onChange={event => handleChange(questionId, event)} />
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