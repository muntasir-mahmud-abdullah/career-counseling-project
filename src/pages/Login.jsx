import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in successful:", result.user);
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form
        className="bg-base-100 p-10 shadow-lg rounded"
        onSubmit={handleLogin}
      >
        <h1 className="text-2xl mb-5">Login</h1>

        <div className="form-control mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label>Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle the visibility state
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? "Hide" : "Show"}{" "}
              {/* Button text changes based on state */}
            </button>
          </div>
        </div>
        <p className="my-4">
          Forgot your password?{" "}
          <Link to="/forget-password" className="link link-hover">
            Reset it here
          </Link>
        </p>

        <button className="btn btn-primary w-full mb-3">Login</button>
        <button
          type="button"
          className="btn btn-secondary w-full"
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button>
        <p className="mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="link link-hover">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
