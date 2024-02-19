import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

//* Example of loader function with auth API request
export async function getCars() {
  try{
    let token = localStorage.getItem("token");
    if(!token){
      console.warn("Unauthorized - No Token Found")
      return []
    }

    let response = await axios.get(`http://localhost:5000/api/cars`, {
      headers: { Authorization: "Bearer " + token },
    });
    
    return response.data;
  }catch(er){
    console.log(er.response)
  }
}


export default function HomePage() {
  const data = useLoaderData()
  const [cars,setCars] = useState(data)

  return (
    <div>HomePage</div>
  )
}
