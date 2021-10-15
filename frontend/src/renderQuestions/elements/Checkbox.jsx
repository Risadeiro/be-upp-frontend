import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox as CheckboxUI
} from '@material-ui/core'

const Checkbox = ({ questionId, questionLabel, options, answer }) => {
  const { handleChange } = useContext(FormContext)

  const updateAnswer = (optionId, optionLabel, checked) => {
    if (typeof answer === "undefined") {
      answer = {
        value: {}
      }
    }

    if (checked)
      answer.value[optionId] = optionLabel
    else
      delete answer.value[optionId]

    return answer;
  }

  return (
    <React.Fragment>

      <FormControl component="fieldset" style={styles.questionContainer}>
        <FormLabel component="legend" style={styles.labelText}> {questionLabel} </FormLabel>
        {Object.entries(options).map(([optionId, optionLabel]) =>
          <FormControlLabel
            key={`${questionId}-${optionId}`}
            value={[optionLabel]}
            control={
              <CheckboxUI
                onClick={event => handleChange(questionId, updateAnswer(optionId, optionLabel, event.target.checked))}
                defaultChecked={typeof answer == "object" ? answer.value.hasOwnProperty(optionId) : false}
              />
            }
            label={optionLabel}
          />
        )}
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
  questionContainer: {
    flex: 1,
    border: '2px solid gray',
    borderRadius: 15,
    padding: 20,
    width: '50%',
    marginBottom: 50,
  },
}

export default Checkbox