const UserController = require("./user-controller");
const User = require("./user");

describe("UserController", () => {
  let userController;

  beforeEach(() => {
    userController = new UserController();
  });

  test("add user to userController", () => {
    const user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
  });

  test("remove user from userController", () => {
    const user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test("add user that is not already in the list", () => {
    expect(userController.getUsers()).toHaveLength(0);
    const user = new User(1, "Ana", "ana@example.com");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
    expect(userController.getUsers()).toHaveLength(1);
  });

  test("remove user that is not in the list leaves users unchanged", () => {
    const inList = new User(1, "Ana", "ana@example.com");
    const notInList = new User(2, "Bob", "bob@example.com");
    userController.add(inList);
    userController.remove(notInList);
    expect(userController.getUsers()).toEqual([inList]);
    expect(userController.getUsers()).toHaveLength(1);
  });

  test("findByEmail returns user when email exists", () => {
    const user = new User(10, "Carla", "carla@example.com");
    userController.add(user);
    expect(userController.findByEmail("carla@example.com")).toBe(user);
  });

  test("findByEmail returns undefined when email does not exist", () => {
    userController.add(new User(1, "Ana", "ana@example.com"));
    expect(userController.findByEmail("missing@example.com")).toBeUndefined();
  });

  test("findById returns user when id exists", () => {
    const user = new User(42, "Dan", "dan@example.com");
    userController.add(user);
    expect(userController.findById(42)).toBe(user);
  });

  test("findById returns undefined when id does not exist", () => {
    userController.add(new User(1, "Ana", "ana@example.com"));
    expect(userController.findById(999)).toBeUndefined();
  });
});
