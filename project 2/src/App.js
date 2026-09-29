import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);

  function addUser(newUser) {
    setUsers([...users, newUser]);
  }

  return (
    <div className="App">
      <h1>Contact Cards</h1>

      <UserForm addUser={addUser} />

      <UserList users={users} />
    </div>
  );
}