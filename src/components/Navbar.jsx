// Navbar.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { token,setToken } = useAuth();

  const handleLogout = () => {
    setToken(null)
  };

  return (
    <div className="navbar">
      {token ? (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="logout-button" onClick={handleLogout}>
          <Link to="/login">Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
