import React from "react";
import './textarea.css'


const TextArea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="textarea"
    />
  );
};

export default TextArea;
