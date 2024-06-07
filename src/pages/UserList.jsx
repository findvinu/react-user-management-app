import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser} from "../api";
import { fetchUsers, deleteUser, updateUser  } from "../store/slices/userSlice";
import "../index.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";


const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
 const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers({ method: "GET", url: getUser }));
    console.log("getUsers", users);
  }, [dispatch]);

  if (loading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const userDeleteHandler = (id) => {
    dispatch(deleteUser(id))
  }

  const userUpdateHandler = (userId) => {
    navigate(`/update-user/${userId}`)
  }
  return (
    <ul className="listContainer">
      {users &&
        users.map((user) => (
          <li key={user.id}>
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
            {user.address.geo ? (
              <p className={user.address.geo && "geo"}>
                <span>lat: {user.address.geo.lat}</span>
                <span>lng: {user.address.geo.lng}</span>
              </p>
            ) : (
              <p>Geo information not available</p>
            )}
            <div className="btnWrapper">
              <Button onClick={() => userUpdateHandler(user.id)}>Update</Button>
              <Button onClick={() => userDeleteHandler(user.id)}>Delete</Button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default UserList;
