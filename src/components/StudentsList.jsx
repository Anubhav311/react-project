import "../styles/StudentsList.css";
const list = [
  { id: 1, name: "vikash" },
  { id: 2, name: "harsh" },
  { id: 3, name: "ritesh" },
  { id: 4, name: "cobra kai" },
];

function StudentsList() {
  return (
    <div>
      {list.map((student, idx) => {
        return (
          <div key={idx} className="list-item-container">
            <p className="student-id">{student.id}</p>
            <p>{student.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default StudentsList;
