import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebaseConfig"; // Your Firebase config
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link sent to your email.");
      setError("");
      setTimeout(() => navigate("/login"), 5000); // Redirect after 5 seconds
    } catch (error) {
      setError("Failed to send password reset email.");
      setMessage("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-base-100 p-10 shadow-lg rounded"
        onSubmit={handleResetPassword}
      >
        <h1 className="text-2xl mb-5">Forgot Password</h1>
        
        {message && <p className="text-green-500 mb-3">{message}</p>}
        {error && <p className="text-red-500 mb-3">{error}</p>}
        
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

        <button className="btn btn-primary w-full mb-3">Send Reset Link</button>

        <p className="mt-4">
          Remembered your password?{" "}
          <Link to="/login" className="link link-hover">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
