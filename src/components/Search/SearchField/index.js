import { useState } from "react";
import "./style.scss";

export default function SearchField({
  name,
  id,
  placeholder = "Placeholder text...",
}) {
  //  State
  const [focused, setFocused] = useState(null);
  const [query, setQuery] = useState("");

  //  Vars
  const cssNamespace = "search-field";
  const wrapperClassName = `${cssNamespace}_wrapper`;
  const actionsClassName = `${cssNamespace}_actions`;
  const clearClassName = `${cssNamespace}_clear`;
  const submitClassName = `${cssNamespace}_submit`;
  const inputClassName = `${cssNamespace}_input t-ui`;
  const inputModifierFocused = focused ? ` ${inputClassName}--focused` : "";
  const inputModifierHasValue =
    query !== "" ? ` ${inputClassName}--has-value` : "";

  //  Handles
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleInputFocus = (event) => {
    setFocused(true);
  };
  const handleInputBlur = (event) => {
    setFocused(false);
  };
  const resetInput = () => {
    setQuery("");
  };
  const submitInput = () => {
    //
  };

  return (
    <div className={cssNamespace}>
      <div className={wrapperClassName}>
        <input
          className={`${inputClassName}${inputModifierFocused}${inputModifierHasValue}`}
          type="text"
          value={query}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <div className={actionsClassName}>
          {query !== "" && (
            <div className={clearClassName}>
              <button onClick={resetInput}>
                <span className="label">Clear</span>
                <span className="icon icon-clear"></span>
              </button>
            </div>
          )}
          <div className={submitClassName}>
            <button onClick={submitInput}>
              <span className="label">Submit</span>
              <span className="icon icon-search"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
