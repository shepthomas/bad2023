import Checkbox from "./Checkbox";

const OptionGroup = ({ options, checkedOptions, onOptionClick }) => {
  return (
    <div className="option-group">
      {options &&
        options.map((option, i) => (
          <Checkbox
            key={i}
            label={option.label}
            option={option.value}
            isChecked={checkedOptions.includes(option.value)}
            onClick={onOptionClick}
          />
        ))}
    </div>
  );
};

export default OptionGroup;
