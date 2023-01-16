import "./style.scss";

const CheckIcon = ({ fill = "#000000" }) => (
  <svg width={10} height={7} viewBox="0 0 10 7">
    <path
      fill={fill}
      fillRule="evenodd"
      d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
    />
  </svg>
);

const Checkbox = (props) => {
  const { isChecked, category, option, label, onClick } = props;
  const handleClick = (e) => {
    onClick(e, option, true);
  };
  return (
    <div
      className="checkbox"
      data-category={category}
      data-option={option}
      onClick={handleClick}
    >
      <div className="input">
        <div className={"box" + (isChecked ? " is-checked" : "")}>
          {isChecked && <CheckIcon />}
        </div>
      </div>
      <div className={"label" + (isChecked ? " is-checked" : "")}>{label}</div>
    </div>
  );
};

export default Checkbox;
