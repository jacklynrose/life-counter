function createGame({ playerOne, playerTwo }) {
  if (!playerOne) {
    throw new Error("You must provide a player 1 name");
  }
  if (!playerTwo) {
    throw new Error("You must provide a player 2 name");
  }
}

module.exports = {
  createGame,
};
