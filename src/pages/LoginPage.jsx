import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5500/api/auth", {
        email,
        password,
      });
      setToken(response.data);
      navigate("/");
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit} className="form-layout">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Login
        </button>
      </form>
      <div className="register-option">
        New user?{" "}
        <span onClick={() => navigate("/register")} className="register-link">
          Register here
        </span>
        .
      </div>
    </div>
  );
};

export default LoginPage;
