import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio as RadioUI,
} from '@material-ui/core'

const Radio = ({ questionId, questionLabel, options, answer }) => {
  const { handleChange } = useContext(FormContext)

  return (
    <React.Fragment>

      <FormControl component="fieldset" style={styles.questionContainer}>
        <FormLabel component="legend" style={styles.labelText}> {questionLabel} </FormLabel>
        <RadioGroup onChange={event => handleChange(questionId, event)} defaultValue={answer}>
          {Object.entries(options).map(([optionId, optionLabel]) =>
            <FormControlLabel
              key={`${questionId}-${optionId}`}
              value={optionLabel}
              control={<RadioUI />}
              label={optionLabel}
            />
          )}
        </RadioGroup>
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
    border: '2px solid gray',
    borderRadius: 15,
    padding: 20,
    width: '50%',
    marginBottom: 50,
  },
}

export default Radio