import { useEffect, useState } from "react";
import { Login } from "./Login";
import React from "react";

export const UsersDatabase = React.createContext([]);

export function Database() {
  const [originalUsers, setOriginalUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setOriginalUsers(data);
      });
  }, []);

  useEffect(() => {
    const filteredDatabase = originalUsers.map((user) => ({
      password: user.username,
      username: user.name,
      usermail: user.email,
    }));
    setFilteredUsers(filteredDatabase);
    // console.log(filteredUsers);
  }, [originalUsers]);

  return (
    <div>
      <UsersDatabase.Provider value={filteredUsers}>
        <Login />
      </UsersDatabase.Provider>
    </div>
  );
}
