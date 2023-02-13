import "./App.css";
import Table from "../Table/Table";

/** creating an example database of ids & values to display in front end for Admin view */
const userList = [
  { id: 1, name: "Thom", instrument: "guitar", vibe: "tetchy" },
  { id: 2, name: "Jonny", instrument: "anything", vibe: "smooth" },
  { id: 3, name: "Ed", instrument: "guitar", vibe: "mellow" },
  { id: 4, name: "Colin", instrument: "bass guitar", vibe: "focused" },
  { id: 5, name: "Phil", instrument: "drums", vibe: "metronomic" },
];

/** Declares column name values to pass down as props to table component */
const colNames = ["id", "name", "instrument", "vibe"];

function App() {
  return (
    <div>
      <h1>User.Management</h1>
      <div>
        <Table userList={userList} colNames={colNames} />
      </div>
    </div>
  );
}

export default App;
