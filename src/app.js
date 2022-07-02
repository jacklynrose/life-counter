function createGame({ playerOne, playerTwo, startingLifeValue }) {
  if (!playerOne) {
    throw new Error("You must provide a player 1 name");
  }
  if (!playerTwo) {
    throw new Error("You must provide a player 2 name");
  }
  if (!startingLifeValue || startingLifeValue < 1) {
    throw new Error("You must provide a starting life value");
  }

  return {
    playerOne: {
      name: playerOne,
      life: startingLifeValue,
    },
    playerTwo: {
      name: playerTwo,
      life: startingLifeValue,
    },
  };
}

module.exports = {
  createGame,
};
