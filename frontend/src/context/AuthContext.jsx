import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const saveToken = (token) => {
    localStorage.setItem("token", token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, saveToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
