import React from "react";
import {Typography, AppBar, FormLabel} from "@material-ui/core";

const printAnswer = (questionId, questionInfo, dict) => {
  switch (dict[questionId][0]) {
    case "select":
      return (
        <React.Fragment key={questionId}>
          <FormLabel
            key={questionId}
            component="legend"
            style={styles.labelText}
          >
            {dict[questionId][1]}
          </FormLabel>
          <h3> {questionInfo.value[1] === "Sim" ? "Sim" : "Não"} </h3>
        </React.Fragment>
      );

    case "scale":
      return (
        <React.Fragment key={questionId}>
          <FormLabel
            key={questionId}
            component="legend"
            style={styles.labelText}
          >
            {dict[questionId][1]}
          </FormLabel>
          <h3> {questionInfo.value} </h3>
        </React.Fragment>
      );

    case "checkbox":
      return (
        <React.Fragment key={questionId}>
          <FormLabel
            key={questionId}
            component="legend"
            style={styles.labelText}
          >
            {dict[questionId][1]}
          </FormLabel>
          {questionInfo.value
            ? Object.entries(questionInfo.value).map(([itemId, itemInfo]) => (
                <h3> {itemInfo} </h3>
              ))
            : null}
        </React.Fragment>
      );

    case "radio":
      return (
        <React.Fragment key={questionId}>
          <FormLabel
            key={questionId}
            component="legend"
            style={styles.labelText}
          >
            {dict[questionId][1]}
          </FormLabel>
          {questionInfo.value
            ? Object.entries(questionInfo.value).map(([itemId, itemInfo]) => (
                <h3> {itemInfo} </h3>
              ))
            : null}
        </React.Fragment>
      );

    case "text":
      return (
        <React.Fragment key={questionId}>
          <FormLabel
            key={questionId}
            component="legend"
            style={styles.labelText}
          >
            {dict[questionId][1]}
          </FormLabel>
          <h3> {questionInfo.value} </h3>
        </React.Fragment>
      );

    case "table":
      return (
        <React.Fragment key={questionId}>
          <br />
          {questionInfo.value
            ? Object.entries(questionInfo.value).map(([itemId, itemInfo]) => (
                <React.Fragment key={`${itemId}-${questionId}`}>
                  <br />
                  <FormLabel
                    key={`2-${questionId}`}
                    component="legend"
                    style={styles.labelText}
                  >
                    {itemInfo.rowLabel}
                  </FormLabel>
                  <h3> {itemInfo.colLabel} </h3>
                  <br />
                </React.Fragment>
              ))
            : null}
        </React.Fragment>
      );
    default:
      return null;
  }
};

const Confirm = ({dict, answer}) => {
  return (
    <React.Fragment>
      <AppBar style={{marginBottom: 20}} position="sticky">
        <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
          Página de confirmação de dados
        </Typography>
      </AppBar>

      {answer
        ? Object.entries(answer).map(([questionId, questionInfo]) =>
            printAnswer(questionId, questionInfo, dict)
          )
        : null}
      <br />
    </React.Fragment>
  );
};

const styles = {
  labelText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  questionContainer: {
    flex: 1,
    border: "2px solid gray",
    borderRadius: 15,
    padding: 20,
    width: "50%",
    marginBottom: 50,
  },
  tableAnswer: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    width: "50%",
  },
};

export default Confirm;
