import React, { useContext } from 'react'
import { Controller, useForm } from "react-hook-form"
import { FormContext } from '../FormContext';
import {
  Table as TableUI,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Radio,
  FormControl,
  FormLabel,
} from '@material-ui/core'

const Table = ({ idQuestion, label, row, col, value }) => {
  const { control } = useForm()
  const { handleChange } = useContext(FormContext)
  const allValues = value

  const persistentData = (value, optionName, index) => {
    if (typeof value !== "undefined") {
      if (value === optionName)
        return true
    }

    else {
      for (var i = 0; i < allValues.length; i++)
        if (allValues[i].numRow === index && allValues[i].optionValue === optionName)
          return true
    }

    return false
  }

  return (
    <FormControl component="fieldset" style={styles.questionContainer}>
      <FormLabel component="legend" style={styles.labelText}> {label} </FormLabel>
      <TableUI>
        <TableHead>
          <TableRow>
            <TableCell />
            {col.map(({ label }, i) => (
              <TableCell key={`${idQuestion}-col1-${i}`} align="center">
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map(({ name, label }, i) => (
            <TableRow key={`${idQuestion}-row-${i}`} onChange={event => handleChange(idQuestion, event, i)}>
              <TableCell>{label}</TableCell>
              <Controller
                name={name}
                control={control}
                render={({ field: { value, ...field } }) =>
                  col.map(({ name: optionName }, j) => (
                    <TableCell key={`${idQuestion}-col2-${j}`} style={{ textAlign: 'center' }}>
                      <Radio
                        {...field}
                        checked={persistentData(value, optionName, i)}
                        value={optionName}
                      />
                    </TableCell>
                  ))
                }
              />
            </TableRow>
          ))}
        </TableBody>
      </TableUI>
    </FormControl>
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

export default Table