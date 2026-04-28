import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("storelyToken");
    if (token) {
      setUser({ token });
    }
  }, []);

  const saveToken = (token) => {
    localStorage.setItem("storelyToken", token);
    setUser({ token });
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
