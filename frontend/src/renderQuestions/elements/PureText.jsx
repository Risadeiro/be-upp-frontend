import React from "react";
import {FormControl, FormLabel} from "@material-ui/core";

const PureText = ({id, label}) => {
  return (
    <FormControl style={styles.questionContainer}>
      {label
        ? label.map((label, i) => (
            <React.Fragment key={`${id}-${i}`}>
              <FormLabel
                key={`${id}-${i}`}
                component="legend"
                style={styles.labelText}
              >
                {" "}
                {label}{" "}
              </FormLabel>
              <br />
            </React.Fragment>
          ))
        : null}
    </FormControl>
  );
};

const styles = {
  labelText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "left",
    alignSelf: "stretch",
  },
  questionContainer: {
    flex: 1,
    padding: 20,
    width: "60%",
    marginBottom: 50,
  },
  floatingText: {
    marginBottom: 50,
  },
};

export default PureText;
