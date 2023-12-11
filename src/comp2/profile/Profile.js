import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProfileEditForm from "../edit-profile/ProfileEditForm";

import "./l.css";

const Profile = () => {
  const [user, setUser] = useState({});

  const [isEditing, setIsEditing] = useState(false);

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Use useEffect to fetch the user's data upon component mount
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (!token) {
      navigate("/login");
    } else {
      axios
        .get("http://localhost:8080/api/profile", {
          headers: {
            "auth-token": token,
          },
        })
        .then((response) => {
          console.log(response.data.user); // Debugging

          setUser(response.data.user._doc);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            navigate("/login");
          } else {
            setError(error.response.data.message || "An error occurred.");
          }
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    // Remove the authentication token from local storage
    localStorage.removeItem("auth-token");
    // Redirect to the login page
    navigate("/signin");
  };

  if (error) {
    return (
      <div className="container mt-5">
        <h2>Profile</h2>
        <p>{error}</p>
      </div>
    );
  }
  const handleUpdate = (updatedData) => {
    setUser(updatedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };
  return (
    <div className="bg-transparent min-h-screen flex items-center justify-center">
      <div className="container mx-auto mt-8 p-6 rounded-lg shadow-lg bg-white">
        {isEditing ? (
          <ProfileEditForm
            user={user}
            onUpdate={handleUpdate}
            onCancel={handleCancel}
          />
        ) : (
          <div className="p-6 rounded-lg border border-gray-300">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
              My Profile
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <p className="font-semibold text-gray-700">Name: </p>
                <p className="text-gray-800">{user.name}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-700">Email: </p>
                <p className="text-gray-800">{user.email}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-700">Points: </p>
                <p className="text-gray-800">{user.points}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-700">Phone Number: </p>
                <p className="text-gray-800">{user.phoneNumber}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-700">Branch: </p>
                <p className="text-gray-800">{user.branch}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-700">LinkedIn Profile: </p>
                <p className="text-gray-800">{user.linkedin}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-700">Address: </p>
                <p className="text-gray-800">{user.address}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-700">Collage: </p>
                <p className="text-gray-800">{user.collegeName}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-700">City: </p>
                <p className="text-gray-800">{user.collegeCity}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-700">Referral code: </p>
                <p className="text-gray-800">{user.refral}</p>
              </div>
             
            </div>

            <div className="flex items-center justify-center space-x-4 mt-6">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
              >
                Edit
              </button>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
