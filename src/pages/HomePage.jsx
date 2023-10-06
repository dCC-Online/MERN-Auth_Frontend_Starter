import React from "react";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { token, user } = useAuth();

  //Open the console and see what "token" & and the decoded "user" look like!
  console.log("User: ",user);
  console.log("Token: ",token);
  return (
    <div>
      <h2>Welcome {user.name}</h2>
    </div>
  );
};

export default HomePage;
