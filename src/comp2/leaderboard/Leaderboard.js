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

  const colorsArray = ['#FFD700', '#C0C0C0', '#CD7F32', '#00D2BE', '#F596C8', '#9B0000', '#469BFF', '#BD9E57', '#FF8700', '#FFFFFF'];

  return (
    <div className="ld-container">
      <br></br>
      <h1 className="heading-leaderboard font-bold">LeaderBoard</h1>
      <br></br>

    <div className="container mx-auto rounded-md text-center">
            <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>CA</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((driver, index) => (
            <React.Fragment key={index}>
              <tr key={index} className="driver">
                <td className="position">{index + 1}</td>
                <td className="driver" style={{ borderLeft: `4px solid ${colorsArray[index]}`, color: '#fff' }}>
                  <span dangerouslySetInnerHTML={{ __html: `${driver.name.split(' ').map((part, i) => i > 0 ? `<strong style="color: #ffffff">${part}</strong>` : `<a style="color: #ffffff">${part}</a>`).join(' ')} <span>${driver.collegeName}</span>` }} />
                </td>
                <td className="gap"><span>+{driver.points}</span></td>
              </tr>
              <tr style={{ height: '10px' }}></tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <br></br>

    </div>
    
    {/* <div id="main2" className="full-screen-vanta"></div> */}
      {/* <h2 className="text-4xl font-semibold mb-6">Leaderboard</h2>
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
      </table> */}
      {/* <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>CA</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((driver, index) => (
            <React.Fragment key={index}>
              <tr key={index} className="driver">
                <td className="position">{index + 1}</td>
                <td className="driver" style={{ borderLeft: `4px solid ${colorsArray[index]}`, color: '#fff' }}>
                  <span dangerouslySetInnerHTML={{ __html: `${driver.name.split(' ').map((part, i) => i > 0 ? `<strong style="color: #ffffff">${part}</strong>` : `<a style="color: #ffffff">${part}</a>`).join(' ')} <span>${driver.team}</span>` }} />
                </td>
                <td className="gap"><span>{driver.gap}</span></td>
              </tr>
              <tr style={{ height: '10px' }}></tr>
            </React.Fragment>
          ))}
        </tbody>
      </table> */}
          </div>
  );
};

export default Leaderboard;
