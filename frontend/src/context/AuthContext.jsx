import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("storelyToken");
    const storedUser = localStorage.getItem("storelyUser");

    if (token) {
      setUser(
        storedUser
          ? JSON.parse(storedUser)
          : { token }
      );
    }
  }, []);

  const saveToken = (token) => {
    localStorage.setItem("storelyToken", token);
    setUser((prev) => ({ ...prev, token }));
  };

  const logout = () => {
    localStorage.removeItem("storelyToken");
    localStorage.removeItem("storelyUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, saveToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
