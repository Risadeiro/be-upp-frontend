import React, { useState, useEffect } from 'react'
import questionJSON from '../questions.json'
import RenderElements from '../renderQuestions/RenderElements'
import { FormContext } from '../renderQuestions/FormContext'
import {
  Typography,
  AppBar,
  Button,
} from '@material-ui/core'

const UserForm = () => {
  const [steps, setSteps] = useState(0)
  const [elements, setElements] = useState(null)
  const { questions, pageLabel } = elements ?? {}

  useEffect(() => {
    setElements(questionJSON.pages[steps])
  }, [steps, elements])

  const nextStep = () => {
    setSteps(steps + 1)
  }

  const prevStep = () => {
    setSteps(steps - 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(elements)
  }

  const handleChange = (questionID, event) => {
    const newElements = { ...elements }

    console.log(questionID)
    console.log(event.target)

    newElements.questions.forEach(question => {
      const { id, type } = question;

      if (questionID === id) {
        switch (type) {
          case 'table':


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

      setElements(newElements)
    });

    // console.log(elements)
  }

  // console.log(questions)

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
        {questions ? questions.map((questions, i) => <RenderElements key={i} questions={questions} />) : null}
        <br />

        {/* <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}> Submit </button> */}
      </form>

      <Button
        color="secondary"
        variant="contained"
        style={styles.buttonBack}
        onClick={prevStep}
      > Voltar </Button>

      <Button
        color="primary"
        variant="contained"
        style={styles.buttonContinue}
        onClick={nextStep}
      > Continuar </Button>
    </FormContext.Provider>
  )
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
  }
}

export default UserForm
