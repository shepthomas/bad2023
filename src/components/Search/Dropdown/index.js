import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { OptionGroup } from "../Options";
import "./style.scss";

//  Animation states
const container = {
  open: {
    opacity: 1,
    display: "block",
    y: 0,
    transition: {
      duration: 0.15,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  closed: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const list = {
  show: { opacity: 1 },
  hide: { opacity: 0 },
};

function Dropdown({ label, options, category, filterKey, add, remove }) {
  //  State
  const [isOpen, setIsOpen] = useState(false);

  //  Ref
  const optionDropdown = useRef();

  const toggle = () => {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };
  const openDropdown = () => {
    setIsOpen(true);
    window.addEventListener("click", onBodyClick, false);
    window.addEventListener("keydown", onEsc, false);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    window.removeEventListener("click", onBodyClick, false);
    window.removeEventListener("keydown", onEsc, false);
  };

  const onBodyClick = (e) => {
    // // Ignore clicks on the popover or button
    const targetRef = optionDropdown.current;

    if (targetRef && targetRef.contains(e.target)) {
      return;
    }

    closeDropdown();
  };

  const onEsc = (e) => {
    // Esc key
    if (e.keyCode === 27) {
      closeDropdown();
    }
  };

  //  Handle Option click
  const onOptionClick = (e, value) => {
    e.preventDefault();

    //  If state doesn't include option
    if (!filterKey[category].includes(value)) {
      //  Add it in
      add(category, value);
    } else {
      //  Remove it
      remove(category, value);
    }
  };

  console.log(category);

  return (
    <div className="dd-wrapper" ref={optionDropdown}>
      <div
        className={
          "dd-button chevron" +
          (isOpen ? " is-open" : "") +
          (filterKey[category].length > 0 ? " has-selection" : "")
        }
        onClick={toggle}
      >
        <span className="dd-label">{label}</span>
      </div>
      <motion.div
        className={"dd-container"}
        variants={container}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className={"dd-content"}
          variants={list}
          animate={isOpen ? "show" : "hide"}
        >
          {options && (
            <OptionGroup
              options={options}
              checkedOptions={filterKey[category]}
              onOptionClick={onOptionClick}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Dropdown;
