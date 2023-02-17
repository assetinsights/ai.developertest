import React from "react";

function EmployeeList({ employees }) {
  return (
    <div>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <h2>{employee.name}</h2>
            <p>
              Employment status:{" "}
              {employee.employment_status ? "Active" : "Inactive"}
            </p>
            <p>Role: {employee.role}</p>
            <p>Reporting line: {employee.reporting_line}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
