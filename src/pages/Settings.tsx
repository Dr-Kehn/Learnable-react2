import React from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Settings.css";


const Settings: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Settings Page</h2>
      {user?.role === "Admin" ? (
        <p>Admin settings go here.</p>
      ) : (
        <p>Unauthorized access.</p>
      )}
    </div>
  );
};

export default Settings;
