const db = require("../../data/dbConfig");
const { find, findById, add } = require("../../models/users-model");

//POST
describe("users model", function() {
  describe("add", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should insert a user", async function() {
      await add({
        name: "Tester",
        email: "tester@test.com",
        password: "password"
      });
      const users = await db("users");
      expect(users).toHaveLength(1);
    });
    it("should insert the provided user", async function() {
      await add({
        name: "Tester",
        email: "tester@test.com",
        password: "password"
      });
      const users = await db("users");
      expect(users[0].name).toBe("Tester");
    });
  });

  describe("find", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });
    it("should return all users", async function() {
      let user = await add({
        name: "Tester",
        email: "tester@test.com",
        password: "password"
      });
      await find();
      const users = await db("users");
      expect(users.length).toBeGreaterThan(0);
    });
  });

  describe("findById", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });
    it("should return a single user", async function() {
      let user = await add({
        name: "Tester",
        email: "tester@test.com",
        password: "password"
      });
      await findById(1);
      const users = await db("users");
      expect(users).toHaveLength(1);
    });

    it("should return the user which matches the id", async function() {
      let user = await add({
        name: "Tester",
        email: "tester@test.com",
        password: "password"
      });
      const users = await findById(1);
      expect(users.name).toBe("Tester");
    });
  });
});
