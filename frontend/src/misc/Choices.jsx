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

const Choices = ({ cols, rows }) => {
  const { control } = useForm()

  return (
    <div>
      <form>
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
                        <Radio
                          {...field}
                          checked={value === optionName}
                          value={optionName}
                        />
                      </TableCell>
                    ))
                  }
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </form>
    </div>
  )
}

export default Choices