import { useState, useEffect, useContext } from "react";
import { usersDatabase } from "./Database";

export function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    usermail: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

  function handleReset() {
    setUser({
      username: "",
      password: "",
      usermail: "",
    });
  }

  return (
    <div>
      <label>
        Username:
        <input
          name="username"
          value={user.username}
          onChange={handleInput}
        ></input>
      </label>
      <label>
        Password:{" "}
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleInput}
        ></input>
      </label>

      <label>
        Email:{" "}
        <input
          name="usermail"
          value={user.usermail}
          onChange={handleInput}
        ></input>
      </label>

      <button disabled={!user.username || !user.password || !user.usermail}>
        Login
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
