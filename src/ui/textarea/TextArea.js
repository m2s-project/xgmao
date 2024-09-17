import React from "react";

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
