const { test } = require("../src/app");

describe("Life Counter", () => {
  it("should be a dummy test to make sure things work", () => {
    expect(true).toBeTruthy();
  });
  it("can connect to the app.js file", () => {
    expect(test()).toEqual(true);
  });
});
