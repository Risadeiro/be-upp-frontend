import React, { useContext, useEffect } from 'react'
import { FormContext } from '../FormContext';
import {
  FormLabel,
  Slider
} from '@material-ui/core'

const Select = ({ questionId, questionLabel, minValue, maxValue, step, answer, type }) => {
  useEffect(() => {
    handleChange(questionId, updateAnswer({
      target: {
        value: minValue
      }
    }))
  })

  const marks = []
  for (var i = minValue; i <= maxValue; i += step) {
    marks.push({
      value: i,
      label: i.toString()
    });
  }

  const { handleChange } = useContext(FormContext)

  const updateAnswer = (event) => {
    return {
      type: type,
      value: event.target.value
    }
  }

  return (
    <React.Fragment>
      <FormLabel style={styles.labelText}> {questionLabel} </FormLabel>
      <br />

      <Slider
        key={questionId}
        style={styles.sliderStyle}
        marks={marks}
        valueLabelDisplay='auto'
        min={minValue}
        max={maxValue}
        onChange={(event) => handleChange(questionId, updateAnswer(event))}
        defaultValue={answer?.value}
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
    width: "55%",
    marginTop: 10,
    marginBottom: 80,
  },
}

export default Select