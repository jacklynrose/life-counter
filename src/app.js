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

function render() {
  const playerOneLabel = document.querySelector("#player-one h2");
  const playerTwoLabel = document.querySelector("#player-two h2");
  const playerOneLife = document.querySelector("#player-one p");
  const playerTwoLife = document.querySelector("#player-two p");

  playerOneLabel.innerText = window.game.playerOne.name;
  playerTwoLabel.innerText = window.game.playerTwo.name;
  playerOneLife.innerText = `Life: ${window.game.playerOne.life}`;
  playerTwoLife.innerText = `Life: ${window.game.playerTwo.life}`;
}

function handleNewGame() {
  const playerOne = document.getElementById("player-one-name").value;
  const playerTwo = document.getElementById("player-two-name").value;
  const startingLifeValue = document.getElementById(
    "player-starting-life"
  ).value;
  window.game = createGame({
    playerOne,
    playerTwo,
    startingLifeValue,
  });
  render();
}

function handlePlayerOneDamage() {
  const playerOneInput = parseInt(
    document.getElementById("player-one-input").value
  );
  window.game = damagePlayer(window.game, PLAYER_ONE, playerOneInput);
  render();
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    document
      .getElementById("start-game")
      .addEventListener("click", handleNewGame);
    document
      .getElementById("player-one-damage")
      .addEventListener("click", handlePlayerOneDamage);
  });
} else {
  module.exports = {
    PLAYER_ONE,
    PLAYER_TWO,
    createGame,
    playerLife,
    damagePlayer,
  };
}
