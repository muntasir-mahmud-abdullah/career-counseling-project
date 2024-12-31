// App.jsx continued implementation
import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import ServiceDetails from "./pages/ServiceDetails";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
      <div className="">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
  );
};

export default App;