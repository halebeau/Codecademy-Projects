const team = {
  _players: [
    {
      firstName: "Beau",
      lastName: "Hale",
      age: 39,
    },
    {
      firstName: "Vera",
      lastName: "Hale",
      age: 36,
    },
    {
      firstName: "John",
      lastName: "Doe",
      age: 25,
    },
  ],
  
  _games: [
    {
      opponent: "Team A",
      teamPoints: 10,
      opponentPoints: 5,
    },
    {
      opponent: "Team B",
      teamPoints: 5,
      opponentPoints: 6,
    },
    {
      opponent: "Team C",
      teamPoints: 11,
      opponentPoints: 7,
    },
  ],

  // Players getter method
  get players() {
    return this.players;
  },

  // Games getter method
  get games() {
    return this.games;
  },

  // Add player method
  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(newPlayer);
  },

  // Add game method
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);

console.log(team._players);
console.log(team._games);
