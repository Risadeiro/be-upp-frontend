import React, { useState } from 'react'
import questionJSON from '../new-questions.json'
import RenderElements from '../renderQuestions/RenderElements'
import { FormContext } from '../renderQuestions/FormContext'
import Confirm from '../components/Confirm'
import {
  Typography,
  AppBar,
  Button
} from '@material-ui/core'

const UserForm = () => {
  const [allElements,] = useState(questionJSON)
  const [steps, setSteps] = useState(0)
  const [nPages] = useState(questionJSON.pages.length)
  const [answers,] = useState({})

  const { questions, pageLabel } = allElements.pages[steps] ?? {}

  const nextStep = () =>
    setSteps(steps + 1)

  const prevStep = () =>
    setSteps(steps - 1)

  const handleChange = (questionId, answer) => {
    answers[questionId] = answer
  }

  // console.log(allElements.pages[steps].questions)

  if (!(steps === nPages))
    return (
      <FormContext.Provider value={{ handleChange }}>
        <AppBar style={{ marginBottom: 20 }} position='sticky'>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {pageLabel}
          </Typography>
        </AppBar>

        <form>
          {questions ?
            Object.entries(questions).map(([questionId, questionInfo]) =>
              <RenderElements
                key={questionId}
                props={{
                  questionId: questionId,
                  answer: answers[questionId],
                  ...questionInfo
                }} />)
            : null}
          <br />
        </form>

        {steps > 0 &&
          <Button
            color="secondary"
            variant="contained"
            style={styles.buttonBack}
            onClick={() => prevStep()}
          > Voltar </Button>
        }

        {steps < nPages &&
          <Button
            color="primary"
            variant="contained"
            style={styles.buttonContinue}
            onClick={() => nextStep()}
          > Continuar </Button>
        }
      </FormContext.Provider>
    )

  else {
    return (
      <React.Fragment>
        <Confirm />

        <Button
          color="secondary"
          variant="contained"
          style={styles.buttonBack}
          onClick={() => prevStep()}
        > Voltar </Button>

        <Button
          variant="contained"
          style={styles.buttonSuccess}
          color="primary">
          Submeter
        </Button>
      </React.Fragment>
    )
  }
}

const styles = {
  buttonContinue: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: "#21b6ae",
  },
  buttonBack: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#999999',
    color: '#FFFFFF'
  },
  buttonSuccess: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#00C0FF',
    color: '#FFFFFF'
  }
}

export default UserForm