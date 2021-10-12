import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio as RadioUI,
} from '@material-ui/core'

const Radio = ({ id, label, value, options }) => {
  const { handleChange } = useContext(FormContext)

  return (
    <React.Fragment>

      <FormControl component="fieldset" style={styles.questionContainer}>
        <FormLabel component="legend" style={styles.labelText}> {label} </FormLabel>
        <RadioGroup onChange={event => handleChange(id, event)} defaultValue={value}>
          {options.length > 0 && options.map((option, i) =>
            <FormControlLabel
              key={`${id}-${i}`}
              value={option.optionLabel}
              control={<RadioUI />}
              label={option.optionLabel}
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