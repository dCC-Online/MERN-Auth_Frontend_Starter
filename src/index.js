import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import HomePage from "./Pages/HomePage/HomePage";

import { AuthProvider } from "./utils/useAuth";
import PrivateRoute from "./utils/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          // If you want to protect pages from non-logged in users, wrap the component in the <PrivateRoute> component like so 
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
