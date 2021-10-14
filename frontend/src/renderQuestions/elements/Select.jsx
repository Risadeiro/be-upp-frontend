import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  Select as SelectUI,
  MenuItem,
  FormControl,
  FormLabel,
} from '@material-ui/core'

const Select = ({ questionId, questionLabel, options, answer}) => {
  const { handleChange } = useContext(FormContext)

  return (
    <React.Fragment>
      <FormLabel Component="legend" style={styles.labelText}> {questionLabel} </FormLabel>
      <br /> <br />

      <FormControl style={styles.selectBox}>
        <SelectUI
          key={questionId}
          onChange={event => handleChange(questionId, event)}
          defaultValue={answer}
        >
          {Object.entries(options).map(([optionId, option]) =>
            <MenuItem key={optionId} value={option}> {option} </MenuItem>
          )}
        </SelectUI>
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
  selectBox: {
    width: 100,
    marginBottom: 50
  }
}

export default Select