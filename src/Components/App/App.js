import React, { useState, useEffect } from "react";
import EmployeeList from "../EmployeeList/EmployeeList";
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

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("http://localhost:3000/employee", {
        mode: "cors",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
