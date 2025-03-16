// src/utils/authHelpers.ts

export interface User {
    username: string;
    role: "Admin" | "Trader" | "Client";
  }
  
  const STORAGE_KEY = "authUser";
  
  export const getUserFromStorage = (): User | null => {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  };
  
  export const saveUserToStorage = (user: User): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  };
  
  export const removeUserFromStorage = (): void => {
    localStorage.removeItem(STORAGE_KEY);
  };
  