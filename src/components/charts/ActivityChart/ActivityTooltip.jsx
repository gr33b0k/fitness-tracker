import "./ActivityTooltip.css";

const ActivityTooltip = ({ weekday, percentage, calorieBurnt }) => {
  return (
    <div className="tooltip">
      <h5 className="tooltip__weekday">{weekday}</h5>
      <p className="tooltip__info">
        <span>Progress</span>
        {percentage}%
      </p>
      <p className="tooltip__info">
        <span>Calories</span>
        {calorieBurnt}
      </p>
    </div>
  );
};

export default ActivityTooltip;
