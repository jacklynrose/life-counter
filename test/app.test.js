const { createGame } = require("../src/app");

describe("Life Counter", () => {
  describe("Creating a game", () => {
    it("throws an error if you try to start the game with no player 1 name", () => {
      const playerOne = undefined;
      expect(() => {
        createGame({ playerOne });
      }).toThrow("You must provide a player 1 name");
    });
  });
});
