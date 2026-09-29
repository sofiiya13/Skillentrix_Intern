function UserCard(props) {
    return (
      <div  className="card">
        <h3>{props.name}</h3>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
      </div>
    );
  }
  
  export default UserCard;