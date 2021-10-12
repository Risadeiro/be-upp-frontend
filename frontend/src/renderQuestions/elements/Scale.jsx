import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  FormLabel,
  Slider
} from '@material-ui/core'

const Select = ({ id, label, value }) => {
  const customMarks = [
    {
      value: 1,
      label: '1'
    },
    {
      value: 2,
      label: '2'
    },
    {
      value: 3,
      label: '3'
    },
    {
      value: 4,
      label: '4'
    },
    {
      value: 5,
      label: '5'
    },
    {
      value: 6,
      label: '6'
    },
    {
      value: 7,
      label: '7'
    },
    {
      value: 8,
      label: '8'
    },
    {
      value: 9,
      label: '9'
    },
    {
      value: 10,
      label: '10'
    }
  ]

  const { handleChange } = useContext(FormContext)

  return (
    <React.Fragment>
      <FormLabel style={styles.labelText}> {label} </FormLabel>
      <br />

      <Slider
        key={id}
        style={styles.sliderStyle}
        marks={customMarks}
        valueLabelDisplay='auto'
        min={1}
        max={10}
        onChange={event => handleChange(id, event)}
        defaultValue={value}
      />

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
  sliderStyle: {
    width: 500,
    marginTop: 10,
    marginBottom: 80,
  },
}

export default Select