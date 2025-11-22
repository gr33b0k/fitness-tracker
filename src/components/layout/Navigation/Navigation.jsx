import { NavLink } from "react-router-dom";
import {
  PiCirclesFour,
  PiBowlFood,
  PiChartBar,
  PiPersonSimpleRunBold,
} from "react-icons/pi";
import "./Navigation.css";

const setClassName = ({ isActive, isPending, isTransitioning }) => {
  return isActive
    ? "navigation__link navigation__link--active"
    : isPending
    ? "navigation__link navigation__link--pending"
    : isTransitioning
    ? "navigation__link navigation__link--transitioning"
    : "navigation__link";
};

const Navigation = () => (
  <nav className="navigation">
    <NavLink className={setClassName} to="/">
      <PiCirclesFour className="navigation__icon" />
      Dashboard
    </NavLink>
    <NavLink className={setClassName} to="/diet">
      <PiChartBar className="navigation__icon" />
      Statistics
    </NavLink>
    <NavLink className={setClassName} to="/analysis">
      <PiPersonSimpleRunBold className="navigation__icon" />
      Exercises
    </NavLink>
    <NavLink className={setClassName} to="/recepies">
      <PiBowlFood className="navigation__icon" />
      Meal Plan
    </NavLink>
  </nav>
);

export default Navigation;
