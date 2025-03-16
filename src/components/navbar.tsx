import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles/navbar.css";


const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    user && (
      <nav>
        <span>{user.username} ({user.role})</span>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        {user.role === "Admin" && <Link to="/settings">Settings</Link>}
        <button onClick={logout}>Logout</button>
      </nav>
    )
  );
};

export default Navbar;
