// ProfileEditForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './l.css';

const ProfileEditForm = ({ user, onUpdate, onCancel }) => {
    const [formData, setFormData] = useState({
      name: user.name,
      linkedin:user.linkedin,
      address:user.address,
    //   year:user.year,
      collegeCity:user.collegeCity,
      collegeName:user.collegeName,
      phoneNumber:user.phoneNumber,
      // Add other fields as needed
    });
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('auth-token');
      await axios.put('http://localhost:8080/api/edit-profile', formData, {
        headers: {
          'auth-token': token,
        },
      });
      onUpdate(formData); // Notify parent component about the update
      navigate('/profile'); // Navigate to /profile
      window.location.reload(); // Reload the /profile route


    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-2xl mb-4 text-center">Edit your Profile</h2>

    <form onSubmit={handleSubmit}>
        <div></div>
        <div>
            <label className="font-semibold">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
            <label className="font-semibold">Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
            <label className="font-semibold">Phone number:</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div>
            <label className="font-semibold">College:</label>
            <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} />
        </div>
        <div>
            <label className="font-semibold">City:</label>
            <input type="text" name="collegeCity" value={formData.collegeCity} onChange={handleChange} />
        </div>
        <div>
            <label className="font-semibold">linkedin:</label>
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} />
        </div>
      <button type="submit" className="px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">
        Update Profile</button>
      <button type="button" onClick={onCancel}
        className="px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
        Cancel
        </button>
    </form>
    </div>
  );
};

export default ProfileEditForm;
