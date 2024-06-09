import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../api";
import { fetchUsers, deleteUser, updateUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";

import "../index.css";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers({ method: "GET", url: getUser }));
  }, [dispatch]);

  if (loading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const userDeleteHandler = (id) => {
    dispatch(deleteUser(id));
  };

  const userUpdateHandler = (user) => {
    navigate(`/update-user/${user.id}`, {
      state: { user },
    });
  };

  return (
    <ul className="listContainer">
      {users &&
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            userUpdateHandler={userUpdateHandler}
            userDeleteHandler={userDeleteHandler}
          />
        ))}
    </ul>
  );
};

export default UserList;
