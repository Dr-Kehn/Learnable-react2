import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";


const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: "Admin" | "Trader" | "Client") => {
    login("User", role);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => handleLogin("Client")}>Login as Client</button>
      <button onClick={() => handleLogin("Trader")}>Login as Trader</button>
      <button onClick={() => handleLogin("Admin")}>Login as Admin</button>
    </div>
  );
};

export default Login;
