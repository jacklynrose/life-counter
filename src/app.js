function createGame({ playerOne, playerTwo, startingLifeValue }) {
  if (!playerOne) {
    throw new Error("You must provide a player 1 name");
  }
  if (!playerTwo) {
    throw new Error("You must provide a player 2 name");
  }
  if (!startingLifeValue) {
    throw new Error("You must provide a starting life value");
  }
}

module.exports = {
  createGame,
};
