const {
  createGame,
  playerLife,
  damagePlayer,
  PLAYER_ONE,
  PLAYER_TWO,
} = require("../src/app");

describe("Life Counter", () => {
  describe("Creating a game", () => {
    it("throws an error if you try to start the game with no player 1 name", () => {
      const playerOne = undefined;
      const playerTwo = "Yasmin";
      expect(() => {
        createGame({ playerOne, playerTwo });
      }).toThrow("You must provide a player 1 name");
    });

    it("throws an error if you try to start the game with no player 2 name", () => {
      const playerOne = "Jacklyn";
      const playerTwo = undefined;
      expect(() => {
        createGame({ playerOne, playerTwo });
      }).toThrow("You must provide a player 2 name");
    });

    it("throws an error if you try to start the game without a starting life value", () => {
      const playerOne = "Jacklyn";
      const playerTwo = "Yasmin";
      const startingLifeValue = undefined;
      expect(() => {
        createGame({ playerOne, playerTwo, startingLifeValue });
      }).toThrow("You must provide a starting life value");
    });

    it("throws an error if you try to start the game with a starting life value below 1", () => {
      const playerOne = "Jacklyn";
      const playerTwo = "Yasmin";
      const startingLifeValue = -1;
      expect(() => {
        createGame({ playerOne, playerTwo, startingLifeValue });
      }).toThrow("You must provide a starting life value");
    });

    it("starts a game", () => {
      expect(
        createGame({
          playerOne: "Jacklyn",
          playerTwo: "Yasmin",
          startingLifeValue: 10,
        })
      ).toEqual({
        playerOne: {
          name: "Jacklyn",
          life: 10,
        },
        playerTwo: {
          name: "Yasmin",
          life: 10,
        },
      });
    });
  });
  describe("Asking a player's status", () => {
    it("returns the player's life", () => {
      const game = createGame({
        playerOne: "Jacklyn",
        playerTwo: "Yasmin",
        startingLifeValue: 10,
      });
      expect(playerLife(game.playerOne)).toEqual(10);
      expect(playerLife(game.playerTwo)).toEqual(10);
    });
  });
  describe("Damaging a player", () => {
    it("should damage the player", () => {
      const game = createGame({
        playerOne: "Jacklyn",
        playerTwo: "Yasmin",
        startingLifeValue: 10,
      });

      const gameAfterPlayerOneDamaged = damagePlayer(game, PLAYER_ONE, 5);
      expect(playerLife(gameAfterPlayerOneDamaged.playerOne)).toEqual(5);
      expect(playerLife(gameAfterPlayerOneDamaged.playerTwo)).toEqual(10);

      const gameAfterPlayerTwoDamaged = damagePlayer(
        gameAfterPlayerOneDamaged,
        PLAYER_TWO,
        2
      );
      expect(playerLife(gameAfterPlayerTwoDamaged.playerOne)).toEqual(5);
      expect(playerLife(gameAfterPlayerTwoDamaged.playerTwo)).toEqual(8);
    });
  });

  it("should not go below 0", () => {
    const game = createGame({
      playerOne: "Jacklyn",
      playerTwo: "Yasmin",
      startingLifeValue: 10,
    });

    const gameAfterPlayerOneDamaged = damagePlayer(game, PLAYER_ONE, 11);
    expect(playerLife(gameAfterPlayerOneDamaged.playerOne)).toEqual(0);
    expect(playerLife(gameAfterPlayerOneDamaged.playerTwo)).toEqual(10);
  });
});
