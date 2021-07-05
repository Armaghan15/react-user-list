import React, { useState } from "react";

// Imports for external Components
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

// Import for classes
import classes from "./NewUser.module.css";

const NewUser = (props) => {
  // States for the inputs
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // State for handling the wrong age input
  const [isWrongAge, setIsWrongAge] = useState(false);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const okButtonHandler = () => {
    setIsWrongAge(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredAge <= 0) {
      setIsWrongAge(true);
      return;
    }

    // Else
    else {
      const submitedData = {
        id: Math.random().toString(),
        username: enteredUsername,
        age: enteredAge,
      };

      props.onNewUserSubmit(submitedData);

      // Clear all the inputs by reseting the enteredUsername and enteredAge
      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  return (
    <div>
      {isWrongAge && (
        <ErrorModal
          title="Negative or no Age"
          message="Kindly provide a positive number for age greater than 0"
          okClicked={okButtonHandler}
        ></ErrorModal>
      )}

      {!isWrongAge && (
        <Card className={classes.NewUser}>
          <form onSubmit={formSubmitHandler}>
            <div className="username">
              <label htmlFor="username">USERNAME</label>
              <input
                placeholder="Enter Username"
                type="text"
                id="username"
                onChange={usernameChangeHandler}
                value={enteredUsername}
                required
              />
            </div>

            <div className="age">
              <label htmlFor="age">AGE</label>
              <input
                placeholder="Enter Age"
                type="number"
                id="age"
                onChange={ageChangeHandler}
                value={enteredAge}
                required
              />
            </div>

            <button className="SubmitButton" type="submit">
              Add User
            </button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default NewUser;
