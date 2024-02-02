import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

//* Example of loader function with auth API request
export async function getCars() {
  let token = localStorage.getItem("token");
  let response = await axios.get(`http://localhost:5000/api/cars`, {
    headers: { Authorization: "Bearer " + token },
  });
  return response.data;
}


export default function HomePage() {
  const data = useLoaderData()
  const [cars,setCars] = useState(data)

  return (
    <div>HomePage</div>
  )
}
