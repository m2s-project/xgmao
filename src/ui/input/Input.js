import "./input.css";

const Input = ({ type, label, value, onChange }) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};
export default Input;
