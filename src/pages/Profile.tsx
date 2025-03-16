import React from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Profile.css";


const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Profile Page</h2>
      {user ? (
        <p>Welcome, {user.username}! Your role is {user.role}.</p>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;
