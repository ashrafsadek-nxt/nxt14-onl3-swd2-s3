import React, { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/data.json") 
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Users List</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
              <p>
                Address: {user.address?.street}, {user.address?.city}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
export default App;