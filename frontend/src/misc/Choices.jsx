import React, { Component } from 'react'
import { Controller, useForm } from "react-hook-form"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Radio
} from '@material-ui/core'

// https://codesandbox.io/s/react-hook-form-basic-forked-ztx04?file=/src/index.js:745-785
// https://redux-form.com/7.3.0/docs/faq/handlevson.md/

const Choices = ({ cols, rows }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              {cols.map(({ id, label }) => (
                <TableCell key={id} align="center">
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ id, name, label }) => (
              <TableRow key={id}>
                <TableCell>{label}</TableCell>
                <Controller
                  name={name}
                  control={control}
                  render={({ field: { value, ...field } }) =>
                    cols.map(({ id, name: optionName }) => (
                      <TableCell style={{ textAlign: 'center' }} key={id}>
                        {console.log(value)}
                        <Radio
                          {...field}
                          checked={value === optionName}
                          value={optionName}
                        //onChange={event => handleChange(id, event)}
                        />
                      </TableCell>
                    ))
                  }
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <button type="submit"> Submit </button>
      </form>
    </div>
  )
}

export default Choices