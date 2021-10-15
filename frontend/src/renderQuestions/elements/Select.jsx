import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  Select as SelectUI,
  MenuItem,
  FormControl,
  FormLabel,
} from '@material-ui/core'

const Select = ({ questionId, questionLabel, options, answer }) => {
  const { handleChange } = useContext(FormContext)

  const updateAnswer = (event) => {
    const optionId = event.target.value
    const optionLabel = options[optionId]

    return {
      value: {
        [optionId]: optionLabel
      }
    }
  }

  return (
    <React.Fragment>
      <FormLabel component="legend" style={styles.labelText}> {questionLabel} </FormLabel>
      <br /> <br />

      <FormControl style={styles.selectBox}>
        <SelectUI
          key={questionId}
          onChange={event => handleChange(questionId, updateAnswer(event))}
          defaultValue={typeof answer == "object" ? Object.keys(answer.value)[0] : ""}
        >
          {Object.entries(options).map(([optionId, optionLabel]) =>
            <MenuItem key={optionId} value={optionId}> {optionLabel} </MenuItem>
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