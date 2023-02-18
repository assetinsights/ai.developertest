import React from "react";
import Card from "../Card/Card";

function List({ employees }) {
  return (
    <div>
      {employees.map(() => (
        <Card />
      ))}
    </div>
  );
}

export default List;
