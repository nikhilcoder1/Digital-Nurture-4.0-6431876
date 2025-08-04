import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 90 },
    { name: 'Rohit Sharma', score: 85 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Hardik Pandya', score: 70 },
    { name: 'Jasprit Bumrah', score: 65 },
    { name: 'Ravindra Jadeja', score: 78 },
    { name: 'Shubman Gill', score: 55 },
    { name: 'Suryakumar Yadav', score: 60 },
    { name: 'Ishan Kishan', score: 72 },
    { name: 'Shreyas Iyer', score: 68 },
    { name: 'Mohammed Siraj', score: 80 }
  ];

  // Using arrow function to filter players scoring < 70
  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;