import Button from "../components/Button";

const UserCard = ({ user, userUpdateHandler, userDeleteHandler }) => {
  return (
    <li>
      <div className="cardContent">
        <h2>{user.name}</h2>
        <p className={user.address && "user"}>
          <span>Username: {user.username}</span>
          <br />
          <span>Email: {user.email}</span>
        </p>
        {user.address ? (
          <p className={user.address && "address"}>
            Address: <br />
            <span>{user.address.street}</span>
            <span>{user.address.suite}</span>
            <span>{user.address.city}</span>
            <span>{user.address.zipcode}</span>
          </p>
        ) : (
          <div>Address not available</div>
        )}
      </div>
      {user.address?.geo ? (
        <p className={user.address.geo && "geo"}>
          <span>lat: {user.address.geo.lat}</span>
          <span>lng: {user.address.geo.lng}</span>
        </p>
      ) : (
        <p>Geo information not available</p>
      )}
      <div className="btnWrapper">
        <Button onClick={() => userUpdateHandler(user)}>Update</Button>
        <Button onClick={() => userDeleteHandler(user.id)}>Delete</Button>
      </div>
    </li>
  );
};

export default UserCard;
