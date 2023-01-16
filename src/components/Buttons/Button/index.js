import React from "react";
import "./style.scss";

export default function Button({
  className,
  onClick,
  label,
  type,
  size,
  icon,
  justified,
  iconOnly,
}) {
  className += " button";

  //  Type
  if (type) {
    className += " is-" + type;
  } else {
    className += " is-primary";
  }

  //  Big
  if (size) className += " is-" + size;

  //  Justified
  if (justified) className += " is-justified";

  //  Icon only
  if (iconOnly) className += " is-icon-only";

  return (
    <button className={className} onClick={onClick}>
      <div className="contents">
        {label && <span className="label">{label}</span>}
        {icon && (
          <span className={"icon" + (icon ? " icon-" + icon : "")}>{icon}</span>
        )}
      </div>
    </button>
  );
}
