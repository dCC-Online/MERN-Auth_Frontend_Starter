import React from 'react';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { token } = useAuth();

  return (
    <div>
      <h2>Home</h2>
      <p>Your Token: {token}</p>
    </div>
  );
};

export default HomePage;
