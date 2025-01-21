import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServiceDetails from "./pages/ServiceDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import MyProfile from "./pages/MyProfile";
import ForgotPassword from "./pages/ForgotPassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "forget-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "myprofile",
        element:<MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "service/:id",
    element: (
      <ProtectedRoute>
        {" "}
        <ServiceDetails></ServiceDetails>
      </ProtectedRoute>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
