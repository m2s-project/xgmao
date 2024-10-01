import Icon from "@mdi/react";
import "./button.css";

const Button = ({icon, label, onClick, type }) => {
  return (
    <button type={type?type:null} className="button" onClick={onClick}>
      {icon?<> <Icon path={icon} size={0.7}/> <span>{label}</span></>:label  }
    </button>
  );
};
export default Button;
