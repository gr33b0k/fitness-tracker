import { PiCaretDown } from "react-icons/pi";
import profile from "../../../assets/profile.jpg";
import "./ProfileBadge.css";

const ProfileBadge = ({ userInfo }) => {
  return (
    <div className="profile-badge">
      <img src={profile} alt="" className="profile-badge__image" />
      <span className="profile-badge__name">
        {userInfo.name} {userInfo.surname}
      </span>
      <button className="profile-badge__show-profile">
        <PiCaretDown />
      </button>
    </div>
  );
};

export default ProfileBadge;
