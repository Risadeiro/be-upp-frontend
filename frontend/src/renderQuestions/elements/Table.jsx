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

const Table = ({ questionId, questionLabel, row, col, answer }) => {
  const { control } = useForm()
  const { handleChange } = useContext(FormContext)
  const allAnswers = answer

  const persistentData = (answer, optionName, index) => {
    // To do: refactor data persistency
    /*
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
    */
  }

  return (
    <FormControl component="fieldset" style={styles.questionContainer}>
      <FormLabel component="legend" style={styles.labelText}> {questionLabel} </FormLabel>
      <TableUI>
        <TableHead>
          <TableRow>
            <TableCell />
            {Object.entries(col).map(([colId, colLabel]) => (
              <TableCell key={`${questionId}-col1-${colId}`} align="center">
                {colLabel}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(row).map(([rowId, rowLabel]) => (
            <TableRow key={`${questionId}-row-${rowId}`} onChange={event => handleChange(questionId, event, rowId)}>
              <TableCell>{rowLabel}</TableCell>
              <Controller
                name={rowId}
                control={control}
                render={({ field: { value, ...field } }) =>
                  Object.entries(col).map(([colId, colLabel]) => (
                    <TableCell key={`${questionId}-col2-${colId}`} style={{ textAlign: 'center' }}>
                      <Radio
                        {...field}
                        checked={persistentData(value, colLabel, rowId)}
                        value={colLabel}
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