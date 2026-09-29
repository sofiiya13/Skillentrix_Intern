import { useState } from "react";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      phone: phone
    };

    props.addUser(newUser);

    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;