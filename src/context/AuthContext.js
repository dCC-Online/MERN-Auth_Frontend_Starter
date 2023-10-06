import React, { createContext, useContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const decodedUser = token ? jwtDecode(token) : null;
  const [user, setUser] = useState(decodedUser);
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      let loggedInUser = jwtDecode(token);
      setUser(loggedInUser);
    } else {
      localStorage.removeItem("token");
      setUser(null)
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
