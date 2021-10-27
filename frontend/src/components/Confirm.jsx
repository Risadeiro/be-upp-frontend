import React from 'react'
import "./Confirm.css"
import {
  Typography,
  AppBar,
  FormLabel
} from '@material-ui/core'

const printAnswer = (questionId, questionInfo, dict) => {
  switch (dict[questionId][0]) {
    case 'select':
      return (
        <React.Fragment key={questionId}>
        <div className="container">
          <div className="question">
          <FormLabel key={questionId} component="legend" style={styles.labelText}> {dict[questionId][1]}  </FormLabel>
          </div>
          {questionInfo.value ?
            Object.entries(questionInfo.value).map(([itemId, itemInfo]) =>
              <h3 className="answer"> {itemInfo} </h3>
            )
            : null}
        </div>
        </React.Fragment>
      )

    case 'scale':
      return (
        <React.Fragment key={questionId}>
        <div className="container">
          <div className="question">
          <FormLabel key={questionId} component="legend" style={styles.labelText}> {dict[questionId][1]}  </FormLabel>
          </div>
          <h3 className="answer"> {questionInfo.value} </h3>
        </div>
        </React.Fragment>
      )

    case 'checkbox':
      return (
        <React.Fragment key={questionId}>
        <div className="container">
          <FormLabel key={questionId} component="legend" style={styles.labelText}> {dict[questionId][1]}  </FormLabel>
          <br/>
          <div className="break"/>
          {questionInfo.value ?
            Object.entries(questionInfo.value).map(([itemId, itemInfo]) =>
            <>
            <h3 className="answer"> {itemInfo} </h3>          
            <div className="break"/>
            </>
            )
            : null}
        </div>
        </React.Fragment>
      )

    case 'radio':
      return (
        <React.Fragment key={questionId}>
        <div className="container">
          <div className="question">
            <FormLabel key={questionId} component="legend" style={styles.labelText}> {dict[questionId][1]}  </FormLabel>
          </div>
            {questionInfo.value ?
              Object.entries(questionInfo.value).map(([itemId, itemInfo]) =>
                <h3 className="answer" > {itemInfo} </h3>
              )
              : null}
        </div>
        </React.Fragment>
      )

    case 'text':
      return (
        <React.Fragment key={questionId}>
        <div className="container">
          <div className="question">
            <FormLabel key={questionId} component="legend" style={styles.labelText}> {dict[questionId][1]}  </FormLabel>
          </div>
          <h3 className="answer"> {questionInfo.value} </h3>
        </div>
        </React.Fragment>
      )

    case 'table':
      return (
        <React.Fragment key={questionId}>
        <div className="container">
          <FormLabel key={questionId} component="legend" style={styles.labelText}> {dict[questionId][1]}  </FormLabel>
          <div className="break"/>
          <div className="line"/>
          {questionInfo.value ?
            Object.entries(questionInfo.value).map(([itemId, itemInfo]) =>
            <React.Fragment key={`${itemId}-${questionId}`}>
                <div className="question">
                  <FormLabel key={`2-${questionId}`} component="legend" style={styles.tableLabelText}> {itemInfo.rowLabel}  </FormLabel>
                </div>
                <h3 className="answer"> {itemInfo.colLabel}  </h3>
                <div className="line"/>
            </React.Fragment>
            )
            : null}
        </div>
        </React.Fragment>
      )
    default:
      return null;
  }
}

const Confirm = ({ dict, answer }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

const styles = {
  labelText: {
    fontSize: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 2,
  },
  tableLabelText: {
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
  tableAnswer: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    width: '50%',
  },
}

export default Confirm