import { useState } from "react";
import "../styles/LoginForm.css";

function LoginForm() {
  let [user, setUser] = useState({
    first: "",
    last: "",
    username: "",
    password: "",
  });

  function changeHandler(e) {
    setUser((prev) => {
      const temp = { ...prev };
      console.log(temp);
      temp[e.target.id] = e.target.value;
      return temp;
    });
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form className="login-form" onSubmit={submitHandler}>
        <input
          type="text"
          id="first"
          placeholder="First Name"
          value={user.first}
          onChange={changeHandler}
        />
        <input
          type="text"
          id="last"
          placeholder="Last Name"
          value={user.last}
          onChange={changeHandler}
        />
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={user.username}
          onChange={changeHandler}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={user.password}
          onChange={changeHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
