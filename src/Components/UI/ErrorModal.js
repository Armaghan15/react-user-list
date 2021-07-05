import React from "react";

// Imports for external Components
import Card from "./Card";

// Imports for Style Classes
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.BackDrop} />
      <Card className={classes.ErrorModal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
          <button onClick={props.okClicked} className={classes.button}>
            OK
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
