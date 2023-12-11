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
    <div className=" bg-transparent p-6 rounded-lg shadow-md max-w-md mx-auto">
    <h2 className="text-3xl mb-6 text-center font-bold text-gray-800">Edit your Profile</h2>

    <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-semibold mb-1">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div className="flex flex-col">
            <label htmlFor="address" className="text-gray-700 font-semibold mb-1">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-gray-700 font-semibold mb-1">Phone number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div className="flex flex-col">
            <label htmlFor="collegeName" className="text-gray-700 font-semibold mb-1">College:</label>
            <input type="text" id="collegeName" name="collegeName" value={formData.collegeName} onChange={handleChange} className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div className="flex flex-col">
            <label htmlFor="collegeCity" className="text-gray-700 font-semibold mb-1">City:</label>
            <input type="text" id="collegeCity" name="collegeCity" value={formData.collegeCity} onChange={handleChange} className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div className="flex flex-col">
            <label htmlFor="linkedin" className="text-gray-700 font-semibold mb-1">LinkedIn:</label>
            <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div className="flex flex-row justify-between space-x-2">
            <button type="submit" className="px-4 py-2 border-r-2 text-black rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:border-blue-300">
                Update Profile
            </button>
            <button type="button" onClick={onCancel} className="px-4 py-2 border-r-2 bg-gray-300 text-red-500 rounded-md hover:bg-transparent focus:outline-none focus:ring focus:border-blue-300">
                Cancel
            </button>
        </div>
    </form>
</div>
  );
};

export default ProfileEditForm;
