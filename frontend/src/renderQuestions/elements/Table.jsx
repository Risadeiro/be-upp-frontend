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

const Table = ({ idQuestion, label, row, col }) => {
  const { control, handleSubmit } = useForm()
  const { handleChange } = useContext(FormContext)
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormControl component="fieldset" style={styles.questionContainer}>
      <FormLabel component="legend" style={styles.labelText}> {label} </FormLabel>
      <TableUI>
        <TableHead>
          <TableRow>
            <TableCell />
            {col.map(({ id, label }) => (
              <TableCell key={id} align="center">
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody onChange={event => handleChange(idQuestion, event)}>
          {row.map(({ id, name, label }) => (
            <TableRow key={id}>
              <TableCell>{label}</TableCell>
              <Controller
                name={name}
                control={control}
                render={({ field: { value, ...field } }) =>
                  col.map(({ id, name: optionName }) => (
                    <TableCell style={{ textAlign: 'center' }} key={id}>

                      <Radio
                        {...field}
                        checked={value === optionName}
                        value={optionName}
                      //onChange={event => handleChange(idQuestion, event)}
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