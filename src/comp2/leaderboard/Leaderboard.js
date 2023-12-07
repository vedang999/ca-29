import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './l.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from the backend API
    axios.get('http://localhost:8080/api/leaderboard')
      .then((response) => {
        setLeaderboardData(response.data.leaderboard);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }, []);

  return (
    <div className="home-container">
      
    {/* <div id="main2" className="full-screen-vanta"></div> */}
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-md text-center">
      <h2 className="text-4xl font-semibold mb-6">Leaderboard</h2>
      <table className="mx-auto w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-3 px-6 border-b">Name</th>
            <th className="py-3 px-6 border-b">College Name</th>
            <th className="py-3 px-6 border-b">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-3 px-6 border-b">{user.name}</td>
              <td className="py-3 px-6 border-b">{user.collegeName}</td>
              <td className="py-3 px-6 border-b">{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
          </div>
  );
};

export default Leaderboard;
