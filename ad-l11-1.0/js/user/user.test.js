const User = require("./user");

describe("User", () => {
  test("constructor sets id, name and email", () => {
    const user = new User(7, "Eva", "eva@example.com");
    expect(user.getId()).toBe(7);
    expect(user.getName()).toBe("Eva");
    expect(user.getEmail()).toBe("eva@example.com");
  });

  test("equalsTo returns true for same id", () => {
    const a = new User(1, "A", "a@x.com");
    const b = new User(1, "B", "b@x.com");
    expect(a.equalsTo(b)).toBe(true);
  });
});
