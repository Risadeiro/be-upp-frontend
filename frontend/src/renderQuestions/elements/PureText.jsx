import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  TextField,
  Typography,
  RadioGroup,
  Radio as RadioUI
} from '@material-ui/core'
import { borderLeft } from '@material-ui/system'

const PureText = ({ id, label }) => {

  return (
    <FormControl key={id} style={styles.questionContainer}>
        {label ? label.map((label, i) =>
          <React.Fragment > 
            <FormLabel key={i} component="legend" style={styles.labelText} > {label}  </FormLabel>
            <br/>
          </React.Fragment>) : null}
    </FormControl>
  )
}

const styles = {
  labelText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'left', 
    alignSelf: 'stretch',
  },
  questionContainer: {
    flex: 1,
    padding: 20,
    width: '60%',
    marginBottom: 50,
  },
  floatingText: {
    marginBottom: 50
  }
}

export default PureText