import React, { useContext } from 'react'
import { FormContext } from '../FormContext';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  TextField,
  Typography,
} from '@material-ui/core'
import { borderLeft } from '@material-ui/system';

const PureText = ({ id, label }) => {
  const { handleChange } = useContext(FormContext)

  return (
    <React.Fragment styles={styles.labelText}>
      {label ? label.map((label, i) =>
        <React.Fragment >
          <FormLabel key={i} Component="legend" className="teste" > {label}  </FormLabel>
          <br />
        </React.Fragment>) : null}
      {/* <br/>         
        <img src = "https://lh4.googleusercontent.com/cB1t2hdhOR8EeB493K67hwmX14YFzfm9pAjz8m5vlTKysdBp3mCl3tKnva0VtfvF2UBUf2MXebzRj9h9qIc715wd2YqHVuI2m59gHCOrEfVwq7b50tJ0kRCCnE_VouKGeg=w1434"/>  

        <br/>  */}
    </React.Fragment>
  )
}

const styles = {
  labelText: {
    fontSize: 20,
    align: 'left',
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
  floatingText: {
    marginBottom: 50
  }
}

export default PureText