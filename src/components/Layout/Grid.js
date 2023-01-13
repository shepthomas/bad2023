import "../../lib/_layout.scss";

const Grid = ({ children, className }) => (
  <div className={"grid" + (className ? " " + className : "")}>{children}</div>
);

export default Grid;
