import React, {useState, useEffect} from "react";
import RenderElements from "../renderQuestions/RenderElements";
import {FormContext} from "../renderQuestions/FormContext";
import Confirm from "../components/Confirm";
import FirstPage from "./FirstPage";
import axios from "axios";
import {Typography, AppBar, Button} from "@material-ui/core";
import validateRequirements from "./../validation/RequirementValidation";

function useMergeState(initialState) {
  const [state, setState] = useState(initialState);
  const setMergedState = (newState) =>
    setState((prevState) => Object.assign({}, prevState, newState));
  return [state, setMergedState];
}

const UserForm = () => {
  const [allElements, setAllElements] = useState();
  const [steps, setSteps] = useState(-1);
  const [isLoading, setLoading] = useState(true);

  const [formInfo, setFormInfo] = useMergeState({
    answers: {},
    questionErrors: {},
  });

  useEffect(() => {
    axios
      .get(
        `http://${process.env.REACT_APP_API_DOMAIN}:${process.env.REACT_APP_API_PORT}/open-api/template/latest`
      )
      .then((response) => {
        setAllElements(response.data);
        setLoading(false);
      });
  }, []);

  const checkAdvance = () => {
    const allPageQuestions = allElements.pages[steps].questions;
    const notAnswered = {...formInfo.questionErrors};
    let allGood = true;

    Object.entries(allPageQuestions).map(([questionId, questionInfo]) => {
      if (
        questionInfo.type !== "pureText" &&
        questionInfo.type !== "image" &&
        questionInfo.type !== "scale" &&
        questionInfo.type !== "table" &&
        (!(questionId in formInfo.answers) ||
          !formInfo.answers[questionId].value ||
          Object.keys(formInfo.answers[questionId].value).length === 0) &&
        validateRequirements(
          questionId,
          formInfo.answers,
          allPageQuestions[questionId].requirements
        )
      ) {
        notAnswered[questionId] = {value: true, errorText: "Favor preencher."};
        allGood = false;
        return allGood;
      }

      // table checking separately
      if (questionInfo.type === "table") {
        if (
          !(questionId in formInfo.answers) ||
          Object.keys(formInfo.answers[questionId].value).length !==
            Object.keys(allPageQuestions[questionId].row).length
        ) {
          notAnswered[questionId] = {
            value: true,
            errorText: "Favor preencher.",
          };
          allGood = false;
        }
      }

      // checkbox extra checking: if it has constraints.minValue alternatives selected
      if (questionInfo.type === "checkbox") {
        const constraints = allPageQuestions[questionId].constraints;
        let hasMinValue = constraints?.minValue != null;
        let minValue = hasMinValue ? constraints?.minValue : 1;
        let count = 0;

        count = Object.keys(formInfo.answers[questionId].value).length;

        if (count < minValue) {
          notAnswered[questionId] = {
            value: true,
            errorText: `Selecionar no mínimo ${minValue} itens`,
          };
          allGood = false;
        }
      }
    });

    setFormInfo({
      answers: {...formInfo.answers},
      questionErrors: notAnswered,
    });
    return allGood;
  };

  const nextStep = () => {
    if (steps === -1 || checkAdvance()) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      setSteps(steps + 1);
    }
  };

  const prevStep = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    setSteps(steps - 1);
  };

  const addAnswer = (questionId, answer) => {
    //console.log(formInfo.answers);
    const newAnswers = {...formInfo.answers};
    newAnswers[questionId] = answer;

    const newQuestionErrors = {...formInfo.questionErrors};
    delete newQuestionErrors[questionId];

    setFormInfo({
      answers: newAnswers,
      questionErrors: newQuestionErrors,
    });
  };

  const removeAnswer = (questionId) => {
    const newAnswers = {...formInfo.answers};
    delete newAnswers[questionId];

    const newQuestionErrors = {...formInfo.questionErrors};
    delete newQuestionErrors[questionId];

    setFormInfo({
      answers: newAnswers,
      questionErrors: {...formInfo.questionErrors},
    });
  };

  const addQuestionError = (questionId, errorMessage) => {
    const newQuestionErrors = {...formInfo.questionErrors};
    newQuestionErrors[questionId] = {
      value: true,
      errorText: errorMessage,
    };

    setFormInfo({
      answers: {...formInfo.answers},
      questionErrors: newQuestionErrors,
    });
  };

  const sendData = () => {
    const questions = [];

    Object.entries(formInfo.answers).map(([questionID, questionInfo]) =>
      questions.push({
        id: questionID,
        value: questionInfo.value,
      })
    );

    const preparedData = {
      questions: questions,
      templateVersion: allElements.templateVersion,
      doctorId: 1,
    };

    axios
      .post(
        `http://${process.env.REACT_APP_API_DOMAIN}:${process.env.REACT_APP_API_PORT}/open-api/form-data/`,
        preparedData
      )
      .then(() => {
        alert("Foi enviado. Parabéns!");
      })
      .catch(() => {
        alert("Ocorreu um erro no POST Template!");
      });
  };

  if (!isLoading) {
    const {questions, pageLabel} = allElements.pages[steps] ?? {};
    const nPages = allElements.pages.length;

    var dict = {};
    Object.keys(allElements["pages"]).forEach(function (key) {
      //questions
      Object.keys(allElements["pages"][key]["questions"]).forEach(function (
        key2
      ) {
        //type
        dict[key2] = [
          allElements["pages"][key]["questions"][key2]["type"],
          allElements["pages"][key]["questions"][key2]["questionLabel"],
        ];
      });
    });

    if (steps === -1)
      return (
        <React.Fragment>
          <FirstPage> </FirstPage>
          <Button
            color="primary"
            variant="contained"
            style={styles.buttonContinue}
            onClick={() => nextStep()}
          >
            {" "}
            Iniciar{" "}
          </Button>
        </React.Fragment>
      );
    else if (!(steps === nPages))
      return (
        <FormContext.Provider
          value={{addAnswer, removeAnswer, addQuestionError}}
        >
          <AppBar style={{marginBottom: 20}} position="sticky">
            <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
              {pageLabel}
            </Typography>
          </AppBar>

          <form>
            {questions
              ? Object.entries(questions).map(([questionId, questionInfo]) => (
                  <RenderElements
                    key={questionId}
                    props={{
                      questionId: questionId,
                      answers: formInfo.answers,
                      error: formInfo.questionErrors[questionId],
                      answer: formInfo.answers[questionId],
                      ...questionInfo,
                    }}
                  />
                ))
              : null}
            <br />
          </form>

          {steps > 0 && (
            <Button
              color="secondary"
              variant="contained"
              style={styles.buttonBack}
              onClick={() => prevStep()}
            >
              Voltar
            </Button>
          )}

          {steps < nPages && (
            <Button
              color="primary"
              variant="contained"
              style={styles.buttonContinue}
              onClick={() => nextStep()}
            >
              Continuar
            </Button>
          )}
        </FormContext.Provider>
      );
    else {
      return (
        <React.Fragment>
          <Confirm dict={dict} answer={formInfo.answers} />

          <Button
            color="secondary"
            variant="contained"
            style={styles.buttonBack}
            onClick={() => prevStep()}
          >
            Voltar
          </Button>

          <Button
            variant="contained"
            style={styles.buttonSuccess}
            color="primary"
            onClick={() => sendData()}
          >
            Submeter
          </Button>
        </React.Fragment>
      );
    }
  }

  return null;
};

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
    backgroundColor: "#999999",
    color: "#FFFFFF",
  },
  buttonSuccess: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: "#00C0FF",
    color: "#FFFFFF",
  },
};

export default UserForm;
