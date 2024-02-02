import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/useAuth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div onClick={() => navigate("/")} className="navbar-brand">
        My Awesome App
      </div>

      {isAuthenticated && (
        <div className="navbar-user">Welcome, {user.username}!</div>
      )}

      <div className="navbar-links">
        {/* Add Navbar Links here  */}

        {/* <Link to="/profile" className="navbar-link">
          Profile
        </Link> */}

        {/* If user is logged in, render Logout Button  */}
        {isAuthenticated ? (
          <div className="navbar-link" onClick={() => logout()}>
            Logout
          </div>
        ) : (
          <>
            <Link to="/login" className="navbar-link">
              Login
            </Link>
            <Link to="/register" className="navbar-link">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
