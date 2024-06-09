import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { addUser } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);

  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    latitude: "",
    longitude: "",
  });

  const userSubmitHandler = (event) => {
    event.preventDefault();

    const newUser = { ...userData, ...users, id: new Date().getTime() };
    console.log("newUser", newUser);
    dispatch(addUser(newUser));
    setUserData({
      name: "",
      username: "",
      email: "",
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      latitude: "",
      longitude: "",
    });

    navigate("/user-list");
  };

  const userChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
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
          value={userData.name}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="username"
          id="username"
          label="Username"
          value={userData.username}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="email"
          id="email"
          label="Email"
          value={userData.email}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="street"
          id="street"
          label="Street"
          value={userData.street}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="suite"
          id="suite"
          label="Suite"
          value={userData.suite}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="city"
          id="city"
          label="City"
          value={userData.city}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="zipcode"
          id="zipcode"
          label="Zipcode"
          value={userData.zipcode}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="latitude"
          id="latitude"
          label="Latitude"
          value={userData.latitude}
          onChange={userChangeHandler}
        />
        <Input
          type="text"
          name="longitude"
          id="longitude"
          label="Longitude"
          value={userData.longitude}
          onChange={userChangeHandler}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddUser;
