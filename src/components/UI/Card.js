import "./Card.css";
const Card = ({ children, className }) => {
  const cls = `card ${className}`;
  return <div className={cls}>{children}</div>;
};

export default Card;
