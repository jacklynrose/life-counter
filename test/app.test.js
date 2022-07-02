const { createGame, playerLife } = require("../src/app");

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
});
