import React from "react";
import "./radiobutton.css";

const RadioButton = ({ label, value, checked, onChange }) => {
  return (
    <label className="radio-label">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="radio-input"
      />
      <span className="radio-custom"></span> {label}
    </label>
  );
};

export default RadioButton;
