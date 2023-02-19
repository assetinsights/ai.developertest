import { useState } from "react";

function AddEmployee({ handleSubmit }) {
  const [employeeObject, setEmployeeObject] = useState({
    name: "",
    role: "",
    employmentStatus: "",
    reportingLine: "",
  });

  function handleName(e) {
    console.log(e.target.value);
    setEmployeeObject({ ...employeeObject, name: e.target.value });
  }

  function handleRole(e) {
    console.log(e.target.value);
    setEmployeeObject({ ...employeeObject, role: e.target.value });
  }

  function handleEmploymentStatus(e) {
    console.log(e.target.value);
    setEmployeeObject({ ...employeeObject, employmentStatus: e.target.value });
  }

  function handleReportingLine(e) {
    console.log(e.target.value);
    setEmployeeObject({ ...employeeObject, reportingLine: e.target.value });
  }

  return (
    <div>
      <h3>Add New Employee</h3>
      <br />
      <label>Employee Name: </label>
      <input type="text" onChange={handleName}></input>
      <br />
      <label>Role: </label>
      <input type="text" onChange={handleRole}></input>
      <br />
      <label>Employment Status (Active or Inactive): </label>
      <input type="text" onChange={handleEmploymentStatus}></input>
      <br />
      <label>Reporting Line: </label>
      <input type="text" onChange={handleReportingLine}></input>
      <br />
      <button
        onClick={() => {
          handleSubmit(employeeObject);
        }}
      >
        Add Employee
      </button>
    </div>
  );
}

export default AddEmployee;
