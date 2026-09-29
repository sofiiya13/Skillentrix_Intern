import UserCard from "./UserCard";

function UserList(props) {
  return (
    <div>
      {props.users.map((user) => (
         <UserCard
         key={user.email}
         name={user.name}
         email={user.email}
         phone={user.phone}
        />
      ))}
    </div>
  );
}

export default UserList;