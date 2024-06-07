import { Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user-list" element={<UserList />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/update-user/:id" element={<UpdateUser />} />
    </Routes>
  );
};

export default Routing;
