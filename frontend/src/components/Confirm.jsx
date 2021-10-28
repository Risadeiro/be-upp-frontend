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
        <div className="container" key={questionId}>
          <FormLabel key={questionId} component="legend" className="question" style={{ fontSize: 20 }}>
            {dict[questionId][1]}
          </FormLabel>
          {questionInfo.value ?
            Object.entries(questionInfo.value).map(([itemId, itemInfo]) =>
              <h3 className="answer" key={`answer-${itemId}-${questionId}`}> {itemInfo} </h3>
            )
            : null}
        </div>
      )

    case 'scale':
      return (
        <div className="container" key={questionId}>
          <FormLabel className="question" key={questionId} component="legend" style={{ fontSize: 20 }} >
            {dict[questionId][1]}
          </FormLabel>
          <h3 className="answer" key={`answer-${questionId}`}> {questionInfo.value} </h3>
        </div>
      )

    case 'checkbox':
      return (
        <div className="container" key={questionId} >
          <FormLabel key={questionId} component="legend" style={{ fontSize: 20, flex: 2 }}>
            {dict[questionId][1]}
          </FormLabel>
          <div className="break" key={`teste-${questionId}`} />
          {questionInfo.value ?
            Object.entries(questionInfo.value).map(([itemId, itemInfo]) =>
              <h3 className="answer-checkbox" key={`answer-${itemId}-${questionId}`}> {`${itemId}. ${itemInfo}`} </h3>
            )
            : null}
        </div>
      )

    case 'radio':
      return (
        <div className="container" key={questionId}>
          <FormLabel key={questionId} component="legend" className="question" style={{ fontSize: 20 }} >
            {dict[questionId][1]}
          </FormLabel>
          {questionInfo.value ?
            Object.entries(questionInfo.value).map(([itemId, itemInfo]) =>
              <h3 className="answer" key={`answer-${questionId}`} > {itemInfo} </h3>
            )
            : null}
        </div>
      )

    case 'text':
      return (
        <div className="container" key={questionId}>
          <FormLabel key={questionId} component="legend" className="question" style={{ fontSize: 20 }}>
            {dict[questionId][1]}
          </FormLabel>
          <h3 className="answer" key={`answer-${questionId}`}> {questionInfo.value} </h3>
        </div>
      )

    case 'table':
      return (
        <div className="container" key={questionId}>
          <FormLabel key={questionId} component="legend" style={{ fontSize: 20, flex: 2, marginBottom: 20 }} >
            {dict[questionId][1]}
          </FormLabel>
          <div className="break" />
          <div className="line" />
          {questionInfo.value ?
            Object.entries(questionInfo.value).map(([itemId, itemInfo]) =>
              <React.Fragment key={`${itemId}-${questionId}`}>
                <FormLabel key={`2-${questionId}`} component="legend" className="question">
                  {itemInfo.rowLabel}
                </FormLabel>
                <h3 className="answer" key={`3-${questionId}`}> {itemInfo.colLabel}  </h3>
                <div className="line" />
              </React.Fragment>
            )
            : null}
        </div>
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


export default Confirm