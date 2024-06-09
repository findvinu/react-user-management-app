import { Link } from "react-router-dom";
import Logo from "../../assets/images/vinuBytes.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" style={{ height: "30px" }} />
      <div className="links">
        <Link to="/user-list">User List</Link>
        <Link to="/add-user">Add User</Link>
      </div>
    </div>
  );
};

export default Header;
