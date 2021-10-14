import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox as CheckboxUI
} from '@material-ui/core'

const Checkbox = ({ questionId, questionLabel, options, answer }) => {
  const { handleChange } = useContext(FormContext)

  return (
    <React.Fragment>

      <FormControl component="fieldset" style={styles.questionContainer}>
        <FormLabel component="legend" style={styles.labelText}> {questionLabel} </FormLabel>
        {Object.entries(options).map(([optionId, optionLabel]) =>
          <FormControlLabel
            key={`${questionId}-${optionId}`}
            value={optionLabel}
            control={
              <CheckboxUI
                onClick={event => handleChange(questionId, event)}
                defaultChecked={Array.isArray(answer) ? answer.includes(optionLabel) : false}
              />
            }
            label={optionLabel}
          />
        )}
      </FormControl>

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
    border: '2px solquestionId gray',
    borderRadius: 15,
    padding: 20,
    wquestionIdth: '50%',
    marginBottom: 50,
  },
}

export default Checkbox