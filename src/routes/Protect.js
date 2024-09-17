import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {
  const { token } = useSelector((state) => state.auth)

  if (!token) {
    // return <Navigate to="/" />
  }

  return children
}

export default Protect
