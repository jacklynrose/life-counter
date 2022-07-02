const { createGame } = require("../src/app");

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
  });
});
