import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { login } from "../../redux/authSlice";
import logo from "../../assets/logo.png";
import "./login.css";

const Login = () => {
  // const dispatch = useDispatch();
  const { token, status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let user = Object.fromEntries(data);
    console.log(user);
    // dispatch(login(user));
    navigate("/home", { replace: true });
  };
  if (token) {
    return <Navigate to="/home" />;
  }

  return (
    <div className=" login">
      <img src={logo} alt="logo" width={50} />

      <form onSubmit={handleSubmit}>
        <div className="input-label-box  ">
          <input
            id="email"
            type="email"
            name="email"
            defaultValue={""}
            autoComplete="email"
            required
          />
          <label htmlFor={"email"}>Adresse e-mail ou identifiant</label>
        </div>
        <div className="input-label-box  ">
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={""}
            required
          />
          <label htmlFor={"password"}>Mot de passe</label>
        </div>

        <button className="button" type="submit">
          Se connecter
        </button>
      </form>
      {status === "loading" && <p>Chargement...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
