// src/context/authHelpers.ts

export type UserRole = "Admin" | "Trader" | "Client";

export interface User {
  username: string;
  role: UserRole;
}

export const loginUser = (username: string, role: UserRole): User => ({
  username,
  role,
});

export const logoutUser = (): null => null;
