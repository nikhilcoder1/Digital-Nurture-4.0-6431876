import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Virat', 'KL Rahul', 'Hardik', 'Bumrah', 'Gill'];
  const evenTeam = ['Rohit', 'Jadeja', 'Ishan', 'Surya', 'Iyer', 'Siraj'];

  // Destructuring
  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  // Merging arrays using spread operator
  const T20players = ['Rohit', 'Virat', 'Bumrah'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Jadeja'];
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <p>{odd1}, {odd2}, {restOdd.join(', ')}</p>

      <h2>Even Team Players</h2>
      <p>{even1}, {even2}, {restEven.join(', ')}</p>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;