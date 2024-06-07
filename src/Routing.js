import { Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";

const Routing = () => {
  return (
    <Routes>
      <Route path="/redux-toolkit-user-app/" element={<UserList />} />
      <Route path="/redux-toolkit-user-app/user-list" element={<UserList />} />
      <Route path="/redux-toolkit-user-app/add-user" element={<AddUser />} />
      <Route
        path="/redux-toolkit-user-app/update-user/:id"
        element={<UpdateUser />}
      />
    </Routes>
  );
};

export default Routing;
