import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";


const SignUp: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (role: "Admin" | "Trader" | "Client") => {
    login("NewUser", role);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <button onClick={() => handleSignUp("Client")}>Sign up as Client</button>
      <button onClick={() => handleSignUp("Trader")}>Sign up as Trader</button>
      <button onClick={() => handleSignUp("Admin")}>Sign up as Admin</button>
    </div>
  );
};

export default SignUp;
