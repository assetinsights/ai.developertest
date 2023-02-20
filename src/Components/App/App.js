import React, { useState, useEffect } from "react";
import List from "../List/List";
import AddEmployee from "../AddEmployee/AddEmployee";
import "./App.css";

/** creating an example database of ids & values to display in front end for Admin view */
// const userList = [
//   { id: 1, name: "Thom", instrument: "guitar", vibe: "tetchy" },
//   { id: 2, name: "Jonny", instrument: "anything", vibe: "smooth" },
//   { id: 3, name: "Ed", instrument: "guitar", vibe: "mellow" },
//   { id: 4, name: "Colin", instrument: "bass guitar", vibe: "focused" },
//   { id: 5, name: "Phil", instrument: "drums", vibe: "metronomic" },
// ];

/** Declares column name values to pass down as props to table component */
//const colNames = ["id", "name", "instrument", "vibe"];

function App() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({});

  /**useEffect function GET 
   * Function to collect all current database entries
   * Populates list of Employees for user to review
  } */
  useEffect(() => {
    async function fetchEmployees() {
      let response = await fetch("http://localhost:3001/employee", {
        mode: "cors",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.json();

      setEmployees([...data.payload]);
      console.log("The data loaded: ", data);
      console.log("The employees state: ", employees);
    }
    fetchEmployees();
  }, []);

  /**Function useEffect- POST
   * Function to allow user to send a newly created employee object
   * Sends employee object to the database
   * @param {*} employeeObject
   */
  useEffect(() => {
    async function addNewEmployee(newEmployee) {
      console.log("useEffect employeeObject from state: ", newEmployee);
      const employee = await fetch("http://localhost:3001/employee", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });

      if (employee.success) {
        console.log("POST was success");
      }
      setEmployees([...employees, newEmployee]);
    }

    addNewEmployee(newEmployee);
    console.log("addNewEmployee useEffect has worked");
  }, []);

  /** handleSubmit takes in the employeeObject created by the users in AddEmployee and updates the state variable newEmployee
   *
   * @param {*} employeeObject
   */
  // function handleSubmit(employeeObject) {
  //   console.log("You clicked postObject");
  //   setNewEmployee(employeeObject);
  //   console.log("handleSubmit postObject: ", employeeObject);
  // }

  return (
    <div>
      <h1>User.Management</h1>
      <AddEmployee />
      <br />
      <List employees={employees}></List>
    </div>
  );
}

export default App;
