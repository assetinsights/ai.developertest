import React from "react";

function Card({ name, date, employment, role, reportingLine }) {
  return (
    <>
      <div class="employeeCard">
        <h2>Employee: {name}</h2>
        <p>Role: {role}</p>
        <p>Employment Status: {employment}</p>
        <p>Reporting Line: {reportingLine}</p>
        <date>Date Added: {date}</date>
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <br />
    </>
  );
}

export default Card;
