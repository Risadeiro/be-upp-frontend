import React, { Component } from 'react'
import {
  Typography,
  AppBar,
  FormLabel,
  Button,
} from '@material-ui/core'

function printAnswer(questionId, questionInfo, dict){
  switch ( dict[questionId][0]  ){
    case 'select':
      return(
        <React.Fragment>
          <FormLabel key={questionId} Component="legend" style={styles.labelText} > {dict[questionId][1]}  </FormLabel>
          <h3> { questionInfo.value[1] === "Sim" ? "Sim" : "Não"} </h3>
        </React.Fragment>
      )
    case 'scale':
      return(
        <React.Fragment>
          <FormLabel key={questionId} Component="legend" style={styles.labelText} > {dict[questionId][1]}  </FormLabel>
          <h3> { questionInfo.value } </h3>
        </React.Fragment>
      )
    case 'checkbox':
      return(
        <React.Fragment>
          <FormLabel key={questionId} Component="legend" style={styles.labelText} > {dict[questionId][1]}  </FormLabel>
          {questionInfo.value ?
            Object.entries(questionInfo.value).map(([itemId, itemInfo]) =>
            <h3> { itemInfo } </h3>
            )
            : null}
        </React.Fragment>
      )
      case 'radio':
        return(
          <React.Fragment>
            <FormLabel key={questionId} Component="legend" style={styles.labelText} > {dict[questionId][1]}  </FormLabel>
            {questionInfo.value ?
              Object.entries(questionInfo.value).map(([itemId, itemInfo]) =>
              <h3> { itemInfo } </h3>
              )
              : null}
          </React.Fragment>
        )
        case 'text':
          return(
            <React.Fragment>
              <FormLabel key={questionId} Component="legend" style={styles.labelText} > {dict[questionId][1]}  </FormLabel>
              <h3> { questionInfo.value } </h3>
            </React.Fragment>
          )
        case 'table':
          return(
            <React.Fragment>
              {/* <FormLabel key={questionId} Component="legend" style={styles.labelText} > {dict[questionId][1]}  </FormLabel> */}
              <br/>
              {questionInfo.value ?
              Object.entries(questionInfo.value).map(([itemId, itemInfo]) =>
                <React.Fragment>
                  <FormLabel key={questionId} Component="legend" style={styles.labelText} > {dict[questionId][1]}  </FormLabel> 
                  
                  <br/> 
                                    
                  <FormLabel key={questionId} Component="legend" style={styles.labelText} > {itemInfo.rowLabel}  </FormLabel>                  
                  <FormLabel key={questionId} Component="legend" style={styles.labelText} > {itemInfo.colLabel}  </FormLabel>
                  <br/>                 
                  {/* <h3> { itemInfo.colLabel } </h3> */}
                </React.Fragment>
              )
              : null}
              
            </React.Fragment>
          )
    default:
    return null;
  }
  
}

const Confirm = ( {dict, answer}  ) => {
  console.log(answer)

  return (
    <React.Fragment style = {styles.questionContainer}>
        <AppBar style={{ marginBottom: 20 }} position='sticky'>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Página de confirmação de dados
          </Typography>
        </AppBar>

        {answer ?
            Object.entries(answer).map(([questionId, questionInfo]) =>
             printAnswer(questionId, questionInfo, dict)
            )
            : null}
          <br />

      {/* <h1> {typeof answer.healthLevel == "object" ? answer.healthLevel.value : "Não foi"} </h1> */}
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

export default Confirm