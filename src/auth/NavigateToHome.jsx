import { Navigate } from "react-router-dom";

function NavigateToHome({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/landing" />;
  }
  return children;
}

export default NavigateToHome;
