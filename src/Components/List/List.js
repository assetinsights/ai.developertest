import React from "react";
import Card from "../Card/Card";

function List({ employees, data }) {
  return (
    <div className="employeeList">
      {employees.map((employees) => (
        <Card
          key={employees.id}
          name={employees.name}
          date={employees.date_added}
          employment={employees.employment_status}
          role={employees.role}
          reportingLine={employees.reporting_line}
        />
      ))}
    </div>
  );
}

export default List;

// 0
// :
// {id: 1, name: 'John Doe', date_added: '2023-02-17T17:11:01.127Z', employment_status: true, role: 'Manager', …}
// 1
// :
// {id: 2, name: 'Jane Smith', date_added: '2023-02-17T17:11:01.127Z', employment_status: true, role: 'Engineer', …}
// 2
// :
// {id: 3, name: 'Bob Johnson', date_added: '2023-02-17T17:11:01.127Z', employment_status: false, role: 'Intern', …}
// 3
// :
// {id: 4, name: 'Sara Lee', date_added: '2023-02-17T17:11:01.127Z', employment_status: true, role: 'Senior Engineer', …}
// 4
// :
// {id: 5, name: 'Alex Nguyen', date_added: '2023-02-17T17:11:01.127Z', employment_status: true, role: 'Data Analyst', …}
// 5
// :
// {id: 6, name: 'Ashley Kim', date_added: '2023-02-17T17:11:01.127Z', employment_status: true, role: 'HR Specialist', …}
