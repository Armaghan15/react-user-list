import React, { useState } from "react";
import "./App.css";

// Imports for external Components
import Users from "./Components/Users/Users";
import NewUser from "./Components/NewUser/NewUser";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const USERS = [
  {
    id: 1,
    username: "Alex",
    age: "21",
  },

  {
    id: 2,
    username: "Max",
    age: "23",
  },

  {
    id: 3,
    username: "Charles",
    age: "24",
  },

  {
    id: 4,
    username: "Carlos",
    age: "27",
  },

  {
    id: 5,
    username: "Max",
    age: "23",
  },

  {
    id: 6,
    username: "Max",
    age: "23",
  },
];

const App = () => {
  // State for our USERS array
  const [users, setUsers] = useState(USERS);

  const addNewUser = (submitedData) => {
    setUsers((prevUsers) => {
      return [submitedData, ...prevUsers];
    });

    console.log("====================================");
    console.log(typeof submitedData.age);
    console.log("====================================");
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <NewUser onNewUserSubmit={addNewUser}></NewUser>
      <Users users={users}></Users>
      <Footer></Footer>
    </div>
  );
};

export default App;
