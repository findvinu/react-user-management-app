import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { updateUser } from "../store/slices/userSlice";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const  {userId}  = useParams();

console.log('users', users)
  const [selectedUser, setSelectedUser] = useState({
    name: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
  });

  useEffect(() => {
    const user = users.find((user) => user.id.toString() === userId);
    if (user) {
      setSelectedUser(user);
    }
  }, [users, userId]);

  const userSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(updateUser({ id: selectedUser.id, updateUser: selectedUser }));
  };

  const userChangeHandler = (event) => {
    const { name, value } = event.target;
    setSelectedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="addUserForm">
      <form onSubmit={userSubmitHandler}>
        <Input
          type="text"
          name="name"
          id="name"
          label="Name"
          value={users.name}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="username"
          id="username"
          label="Username"
          value={selectedUser?.username}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="email"
          id="email"
          label="Email"
          value={selectedUser?.email}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="street"
          id="street"
          label="Street"
          value={selectedUser?.address?.street}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="suite"
          id="suite"
          label="Suite"
          value={selectedUser?.address?.suite}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="city"
          id="city"
          label="City"
          value={selectedUser?.address?.city}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="zipcode"
          id="zipcode"
          label="Zipcode"
          value={selectedUser?.address?.zipcode}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="latitude"
          id="latitude"
          label="Latitude"
          value={selectedUser?.address?.geo?.lat}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="longitude"
          id="longitude"
          label="Longitude"
          value={selectedUser?.address?.geo?.lng}
          onChange={userChangeHandler}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UpdateUser;
