import { createContext, useEffect, useState } from "react";

const usersDatabase = createContext([]);

export function Database() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setUser(data))
      .then(() => {
        let database = users.map((user) => ({
          password: user.username,
          username: user.name,
          usermail: user.email,
        }));
        setUser(database);
      });
  }, []);

  return (
    <div>
      <usersDatabase.Provider value={users}>
        
      </usersDatabase.Provider>
    </div>
  );
}
