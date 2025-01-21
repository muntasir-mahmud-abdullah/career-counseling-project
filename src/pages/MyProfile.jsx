import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebaseConfig";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      alert("Profile updated successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10">
      <Helmet>
        <title>
          My Profile
        </title>
      </Helmet>
      <h1 className="text-2xl mb-5">My Profile</h1>
      <form className="bg-base-100 p-10 shadow-lg rounded" onSubmit={handleUpdate}>
        <div className="form-control mb-4">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
          />
        </div>
        <div className="form-control mb-4">
          <label>Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered"
          />
        </div>
        <button className="btn btn-primary w-full">Update Profile</button>
      </form>
    </div>
  );
};

export default MyProfile;
