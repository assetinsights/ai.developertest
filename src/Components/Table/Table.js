import React from "react";

/** Table Component Test
 * Testing table component in react with Mock data to map data from another source into a readable format
 */

function Table({ userList, colNames, width = "auto", height = "auto" }) {
  return (
    <div class="table">
      {userList.length > 0 && (
        <table>
          <thead style={{ backgroundColor: "black", color: "white" }}>
            <tr>
              {colNames.map((headerItem, index) => (
                <th key={index}>{headerItem.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(userList).map((obj, index) => (
              <tr key={index}>
                {Object.values(obj).map((value, index2) => (
                  <td key={index2}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
