import { useState, useEffect, useContext } from "react";
import { UsersDatabase } from "./Database";

export function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    usermail: "",
  });
  const value = useContext(UsersDatabase);

  function handleInput(event) {
    const { name, value } = event.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  }

  console.log(value);

  function handleReset() {
    setUser({
      username: "",
      password: "",
      usermail: "",
    });
  }

  function handleLogin() {
    let filteredDatabase = value.filter((el) => {
      return (
        el.username === user.username &&
        el.password === user.password &&
        el.usermail === user.usermail
      );
    });
    filteredDatabase.length
      ? alert("Funziona")
      : alert(`${user.username} does not exist`);
    console.log(filteredDatabase);
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

      <button
        onClick={handleLogin}
        disabled={!user.username || !user.password || !user.usermail}
      >
        Login
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
