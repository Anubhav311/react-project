import { useState } from "react";
import StudentsList from "./components/StudentsList";
import "./App.css";

function App() {
  let [count, setCounter] = useState(5);

  function increaseCount() {
    setCounter(count + 1);
  }

  function decreaseCount() {
    setCounter(count - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <StudentsList />
    </div>
  );
}

export default App;

// component
// state
