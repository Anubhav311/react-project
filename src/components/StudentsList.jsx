import { useState } from "react";
import "../styles/StudentsList.css";
const list = [
  { id: 1, name: "vikash" },
  { id: 2, name: "harsh" },
  { id: 3, name: "ritesh" },
  { id: 4, name: "cobra" },
];

function StudentsList() {
  let [sList, setSList] = useState(list);

  function deleteItem(index) {
    const temp = [...sList];
    temp.splice(index, 1);
    setSList(temp);
  }

  // function updateItem(index, value) {
  //   const temp = [...sList];
  //   temp[index]["name"] = value;
  //   setSList(temp);
  // }

  return (
    <div>
      {sList.map((student, idx) => {
        console.log(idx);
        return (
          <ListItem
            index={idx}
            key={idx}
            student={student}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
}

function ListItem({ index, student, deleteItem }) {
  return (
    <div className="list-item-container">
      <p className="student-id">{student.id}</p>
      <p className="name">{student.name}</p>
      <button onClick={() => deleteItem(index)}>Delete</button>
    </div>
  );
}

export default StudentsList;
