import { PiSignOut } from "react-icons/pi";
import Navigation from "../Navigation/Navigation.jsx";
import logo from "../../assets/logo.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="logo" />
      </div>
      <Navigation />
      <div className="sidebar__footer">
        <button className="login_button">
          <PiSignOut />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
