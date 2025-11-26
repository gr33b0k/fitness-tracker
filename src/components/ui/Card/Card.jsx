import "./Card.css";

const Card = ({ colSpan, rowSpan, title, titleIcon, children }) => {
  return (
    <div
      className={`card`}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
    >
      <header className="card__header">
        <h2 className="card__header-title">
          {titleIcon && titleIcon}
          {title}
        </h2>
      </header>
      <div className="card__content">{children}</div>
    </div>
  );
};

export default Card;
