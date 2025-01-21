import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { motion } from "framer-motion"; // Import motion

const Register = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name, photoURL });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User logged in:", result.user);
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.form
        className="bg-base-100 p-10 shadow-lg rounded"
        onSubmit={handleRegister}
        initial={{ opacity: 0 }} // Starting opacity for animation
        animate={{ opacity: 1 }} // Animate to full opacity
        transition={{ duration: 0.5 }} // Animation duration
      >
        <h1 className="text-2xl mb-5">Register</h1>

        <motion.div
          className="form-control mb-4"
          initial={{ x: -50 }} // Start from left
          animate={{ x: 0 }} // Animate to its normal position
          transition={{ duration: 0.3 }}
        >
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
            required
          />
        </motion.div>

        <motion.div
          className="form-control mb-4"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <label>Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered"
          />
        </motion.div>

        <motion.div
          className="form-control mb-4"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered"
            required
          />
        </motion.div>

        <motion.div
          className="form-control mb-4"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <label>Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </motion.div>

        <button className="btn btn-primary w-full mb-3">Register</button>

        <motion.button
          type="button"
          className="btn btn-secondary w-full"
          onClick={handleGoogleLogin}
          whileHover={{ scale: 1.05 }} // Hover animation to scale up
        >
          Sign up with Google
        </motion.button>

        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="link link-hover">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;
