import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const saveToken = (token) => {
    localStorage.setItem("storelyToken", token);
  };

  const logout = () => {
    localStorage.removeItem("storelyToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, saveToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
