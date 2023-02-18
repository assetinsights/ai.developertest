import React from "react";

function Card({ employees }) {
  return (
    <div>
      <h1>{employees.name}</h1>
      <h2>{employees.role}</h2>
      <p>{employees.employment_status}</p>
      <h3>{employees.reporting_line}</h3>
      <p>{employees.date_added}</p>
    </div>
  );
}

export default Card;
