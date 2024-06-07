import { Link } from "react-router-dom";
import Logo from "../../assets/images/vinuBytes.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" style={{ height: "30px" }} />
      <div className="links">
        <Link to="/redux-toolkit-user-app/user-list">User List</Link>
        <Link to="/redux-toolkit-user-app/add-user">Add User</Link>
      </div>
    </div>
  );
};

export default Header;
