const db = require("../../data/dbConfig");
const {
  findClient,
  findClientById,
  insertClient,
  updateClient,
  removeClient
} = require("../../models/clients-model");

//POST
describe("clients model", function() {
  describe("insertClient", function() {
    beforeEach(async () => {
      await db("clients").truncate();
    });

    it("should insert a client", async function() {
      await insertClient({
        name: "Mohammed Clark-Smith",
        village: "Bolgatanga",
        user_id: 2,
        goal: "2 MT Maize Annual",
        harvest: "3 MT"
      });
      const clients = await db("clients");
      expect(clients).toHaveLength(1);
    });
    it("should insert the provided client", async function() {
      await insertClient({
        name: "Mohammed Clark-Smith",
        village: "Bolgatanga",
        user_id: 2,
        goal: "2 MT Maize Annual",
        harvest: "3 MT"
      });
      const clients = await db("clients");
      expect(clients[0].name).toBe("Mohammed Clark-Smith");
    });
  });

  describe("findClient", function() {
    beforeEach(async () => {
      await db("clients").truncate();
    });
    it("should return all clients", async function() {
      let client = await insertClient({
        name: "Mohammed Clark-Smith",
        village: "Bolgatanga",
        user_id: 2,
        goal: "2 MT Maize Annual",
        harvest: "3 MT"
      });
      await findClient();
      const clients = await db("clients");
      expect(clients.length).toBeGreaterThan(0);
    });
  });

  describe("findClientById", function() {
    beforeEach(async () => {
      await db("clients").truncate();
    });
    it("should return a single client", async function() {
      let client = await insertClient({
        name: "Mohammed Clark-Smith",
        village: "Bolgatanga",
        user_id: 2,
        goal: "2 MT Maize Annual",
        harvest: "3 MT"
      });
      await findClientById(1);
      const clients = await db("clients");
      expect(clients).toHaveLength(1);
    });

    it("should return the client which matches the id", async function() {
      let client = await insertClient({
        name: "Mohammed Clark-Smith",
        village: "Bolgatanga",
        user_id: 2,
        goal: "2 MT Maize Annual",
        harvest: "3 MT"
      });
      const clients = await findClientById(1);
      expect(clients.name).toBe("Mohammed Clark-Smith");
    });
  });
  
  describe("updateClient", function() {
    beforeEach(async () => {
      await db("clients").truncate();
    });

    it("should update the provided client", async function() {
      await insertClient({
        name: "Mohammed Clark-Smith",
        village: "Bolgatanga",
        user_id: 2,
        goal: "2 MT Maize Annual",
        harvest: "3 MT"
      });
      let newClient = await updateClient(1, {
        name: "Mohammed Smith",
        village: "Bolgatanga",
        user_id: 2,
        goal: "2 MT Maize Annual",
        harvest: "3 MT"
      });
      const clients = await db("clients");
      expect(clients[0].name).toBe("Mohammed Smith");
    });
  });

  describe("removeClient", function() {
    beforeEach(async () => {
      await db("clients").truncate();
    });
    it("should remove a client", async function() {
      let clients = await insertClient({
        name: "Mohammed Clark-Smith",
        village: "Bolgatanga",
        user_id: 2,
        goal: "2 MT Maize Annual",
        harvest: "3 MT"
      });
      const client = await removeClient(1);
      expect(clients[0]).toBe(undefined);
    });
  });
});
