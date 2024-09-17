import React from "react";

const Select = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="select">
      {" "}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}{" "}
    </select>
  );
};

export default Select;
