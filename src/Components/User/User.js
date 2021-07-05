import React from "react";

// Imports for external Components
import Card from "../UI/Card";

// Imports for Classes
import classes from "../User/User.module.css";

const User = (props) => {
  return (
    <Card className={classes.user}>
      <h4>
        {props.name} ({props.age} years old)
      </h4>
    </Card>
  );
};

export default User;
