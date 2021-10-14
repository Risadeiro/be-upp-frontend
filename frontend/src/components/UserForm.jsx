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
  const [allElements, setAllElements] = useState(questionJSON)
  const [steps, setSteps] = useState(0)
  const [nPages] = useState(questionJSON.pages.length)

  const { questions, pageLabel } = allElements.pages[steps] ?? {}

  const nextStep = () =>
    setSteps(steps + 1)

  const prevStep = () =>
    setSteps(steps - 1)

  const handleChange = (questionID, event, tableRowIndex) => {
    const newElements = allElements

    // console.log(questionID)
    // console.log(event.target)
    // console.log("tableRowIndex", tableRowIndex)

    // To do: refactor handleChange
    /*
    newElements.pages[steps].questions.forEach(question => {
      const { id, type } = question;

      if (questionID === id) {
        switch (type) {
          case 'table':
            const newTable = question.value
            var found = false

            for (var i = 0; i < newTable.length; i++) {
              if (newTable[i].name === event.target.name) {
                newTable[i].optionValue = event.target.value
                found = true
                break
              }
            }

            if (!found) {
              const obj = {}
              obj.numRow = tableRowIndex
              obj.name = event.target.name
              obj.optionValue = event.target.value

              question['value'].push(obj)
            }
            break;

          case 'checkbox':
            if (event.target.checked)
              question['value'].push(event.target.value)
            else {
              const index = question['value'].indexOf(event.target.value);
              if (index > -1) {
                question['value'].splice(index, 1);
              }
            }
            break;

          default:
            question['value'] = event.target.value;
            break;
        }
      }

      setAllElements(newElements)
    });
    */
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
              <RenderElements key={questionId} props={{ questionId: questionId, ...questionInfo }} />)
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