import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <div className="container mt-5">
      <h2>Profile</h2>
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>College Name: {user.collegeName}</p>
        <p>College State: {user.collegeState}</p>
        <p>College City: {user.collegeCity}</p>
        <p>Phone Number: {user.phoneNumber}</p>
        <p>Points: {user.points}</p>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
