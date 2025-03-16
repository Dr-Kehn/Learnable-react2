import React, { createContext, useContext, useState, useEffect } from "react";
import { getUserFromStorage, saveUserToStorage, removeUserFromStorage } from "../utils/authHelpers";

export interface User {
  username: string;
  role: "Admin" | "Trader" | "Client";
}

interface AuthContextType {
  user: User | null;
  login: (username: string, role: "Admin" | "Trader" | "Client") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getUserFromStorage());
  }, []);

  const login = (username: string, role: "Admin" | "Trader" | "Client") => {
    const newUser = { username, role };
    saveUserToStorage(newUser);
    setUser(newUser);
  };

  const logout = () => {
    removeUserFromStorage();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
