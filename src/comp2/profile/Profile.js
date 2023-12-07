import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './l.css';

const Profile = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Use useEffect to fetch the user's data upon component mount
  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      navigate('/login');
    } else {
      axios.get('http://localhost:8080/api/profile', {
        headers: {
          'auth-token': token,
        },
      })
        .then((response) => {
            console.log(response.data.user); // Debugging

          setUser(response.data.user._doc);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            navigate('/login');
          } else {
            setError(error.response.data.message || 'An error occurred.');
          }
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    // Remove the authentication token from local storage
    localStorage.removeItem('auth-token');
    // Redirect to the login page
    navigate('/signin');
  };

  if (error) {
    return (
      <div className="container mt-5">
        <h2>Profile</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="home-container">
    {/* <div id="main2" className="full-screen-vanta"></div> */}
    <div className="container mt-5 mx-auto">
  <div className="bg-white p-4 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
    <p className="mb-2"><span className="font-semibold">Name:</span> {user.name}</p>
    <p className="mb-2"><span className="font-semibold">Email:</span> {user.email}</p>
    <p className="mb-2"><span className="font-semibold">Points:</span> {user.points}</p>
    <p className="mb-2"><span className="font-semibold">Phone Number:</span> {user.phoneNumber}</p>
    <p className="mb-2"><span className="font-semibold">College</span> {user.collegeName}</p>
    <p className="mb-2"><span className="font-semibold">City:</span> {user.collegeCity}</p>
    <p className="mb-2"><span className="font-semibold">State:</span> {user.collegeState}</p>
    <p className="mb-2"><span className="font-semibold">linkedin:</span> {user.linkedin}</p>
    <p className="mb-2"><span className="font-semibold">address:</span> {user.address}</p>
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">
      Logout
    </button>
  </div>
</div>

    </div>
  );
};

export default Profile;
