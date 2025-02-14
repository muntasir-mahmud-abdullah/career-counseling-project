import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebaseConfig";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          CareerCounsel
        </Link>
      </div>
      <div className="flex-none">
        {user ? (
          <div className="dropdown dropdown-end flex items-center gap-6">
            <Link to='/myprofile'><button className="btn btn-primary">My Profile</button></Link>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL || "https://i.ibb.co.com/hHrP1HD/soccer-9204076-640.png"}
                  alt="User"
                />
              </div>
              
            </label>
                <button onClick={() => signOut(auth)}>Logout</button>
            
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
