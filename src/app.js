const PLAYER_ONE = "playerOne";
const PLAYER_TWO = "playerTwo";

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

function playerLife(player) {
  return player.life;
}

function maxDamage(player, damage) {
  if (player.life <= damage) {
    return player.life;
  }
  return damage;
}

function damagePlayer(game, player, damage) {
  return {
    ...game,
    [player]: {
      ...game[player],
      life: game[player].life - maxDamage(game[player], damage),
    },
  };
}

module.exports = {
  PLAYER_ONE,
  PLAYER_TWO,
  createGame,
  playerLife,
  damagePlayer,
};
