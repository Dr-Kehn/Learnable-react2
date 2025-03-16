import React from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Dashboard.css";


const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      {user?.role === "Admin" && <p>Admin Controls: Manage users and content.</p>}
      {user?.role === "Trader" && <p>Trader Panel: Upload and manage trades.</p>}
      {user?.role === "Client" && <p>Client View: Browse published trades.</p>}
    </div>
  );
};

export default Dashboard;
