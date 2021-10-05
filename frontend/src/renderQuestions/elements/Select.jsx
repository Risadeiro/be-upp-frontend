import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  Select as SelectUI,
  MenuItem,
  FormControl,
  FormLabel,
} from '@material-ui/core'

const Select = ({ id, label, value, options }) => {
  const { handleChange } = useContext(FormContext)

  return (
    <React.Fragment>
      <FormLabel Component="legend" style={styles.labelText}> {label} </FormLabel>
      <br /> <br />

      <FormControl style={styles.selectBox}>
        <SelectUI
          onChange={event => handleChange(id, event)}
          defaultValue={value}
        >
          {options.length > 0 && options.map((option, i) =>
            <MenuItem key={i} value={option.optionLabel}> {option.optionLabel} </MenuItem>
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