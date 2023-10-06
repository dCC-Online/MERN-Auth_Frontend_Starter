import React from "react";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { token, user } = useAuth();

  //Open the console and see what "user" is looking like after it is decoded
  console.log(user);
  return (
    <div>
      <h2>Welcome {user?.name}</h2>
      <p>Your Token: {token}</p>
    </div>
  );
};

export default HomePage;
