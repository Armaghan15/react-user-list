import React from "react";

// Imports for External Components
import User from "../User/User";
import Card from "../UI/Card";

// Imports for Styles
import classes from "../Users/Users.module.css";

const Users = (props) => {
  return (
    <Card className={classes.users}>
      <h1 className={classes.CardHeading}>Users</h1>
      <div className={classes.UsersGrid}>
        {props.users.map((user) => (
          <User key={user.id} name={user.username} age={user.age} />
        ))}
      </div>
    </Card>
  );
};

export default Users;
