const sum = require("./sum");
test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("add 5 + 7 to equal 12", () => {
  expect(sum(5, 7)).toBe(12);
});
