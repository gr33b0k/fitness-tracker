import ProfileBadge from "../ProfileBadge/ProfileBadge";
import "./Header.css";

const Header = ({ header, subheader, userInfo }) => {
  return (
    <header className="main__header">
      <div className="main__header-text">
        <h1 className="main__header-title">{header}</h1>
        <h2 className="main__header-subtitle">{subheader}</h2>
      </div>
      <ProfileBadge userInfo={userInfo} />
    </header>
  );
};

export default Header;
