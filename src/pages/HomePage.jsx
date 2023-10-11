import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { token, user } = useAuth();

  //* Below is an example of how you will make axios requests to a protected endpoint

  // useEffect(()=>{
  //   getItems()
  // },[])
  // async function getItems() {
  //   let response = await axios.get("http://url-to-your-endpoint/", {
  //     headers: {
  //       "x-auth-token": token,
  //     },
  //   });
  // }

  //Open the console and see what "token" & and the decoded "user" look like!
  console.log("User: ", user);
  console.log("Token: ", token);
  return (
    <div>
      <h2>Welcome {user?.name}</h2>
    </div>
  );
};

export default HomePage;
