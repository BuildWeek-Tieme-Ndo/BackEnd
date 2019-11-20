//imports
const server = require("../server");
const request = require("supertest");

const clientsRouter = require("../routers/clients-router");
const loansRouter = require("../routers/loans-router");
const paymentsRouter = require("../routers/payments-router");
const usersRouter = require("../routers/users-router");
const { getJwtToken } = require("../middleware/users-validation");

const db = require("../data/dbConfig");

//token
const token = getJwtToken("test@test.com");

//CLIENTS

describe("clientsRouter", () => {
  //POST to '/api/auth/clients'
  describe("POST /", function() {
    it("should return 201 - CREATE", function() {
      beforeEach(async () => {
        await db("clients").truncate();
      });
      return request(server)
        .post("/api/auth/clients")
        .set("Authorization", token)
        .send({
          name: "Mohammed Clark-Smith",
          village: "Bolgatanga",
          user_id: 2,
          goal: "2 MT Maize Annual",
          harvest: "3 MT"
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("should return JSON formatted response", function() {
      beforeEach(async () => {
        await db("clients").truncate();
      });
      return request(server)
        .post("/api/auth/clients")
        .set("Authorization", token)
        .send({
          name: "Mohammed Clark-Smith",
          village: "Bolgatanga",
          user_id: 2,
          goal: "2 MT Maize Annual",
          harvest: "3 MT"
        })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  //GET to '/api/auth/clients'

  describe("GET /", function() {
    it("should return 200 - OK", async () => {
      const expectedStatusCode = 200;

      const response = await request(server)
        .get("/api/auth/clients")
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON formatted response", async () => {
      const response = await request(server)
        .get("/api/auth/clients")
        .set("Authorization", token);

      expect(response.type).toEqual("application/json");
    });
  });
  //GET to '/api/auth/clients/:id'

  describe("GET /:id", function() {
    it("should return 200 - OK", async () => {
      const expectedStatusCode = 200;

      const response = await request(server)
        .get("/api/auth/clients")
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON formatted response", async () => {
      const response = await request(server)
        .get("/api/auth/clients")
        .set("Authorization", token);

      expect(response.type).toEqual("application/json");
    });
  });
  //PUT to '/api/auth/clients/:id'
  describe("PUT /:id", function() {
    it("should return 200 - OK", function() {
      beforeEach(async () => {
        await db("clients").truncate();
        request(server)
          .post("/api/auth/clients/")
          .set("Authorization", token)
          .send({
            name: "Mohammed Clark-Smith",
            village: "Bolgatanga",
            user_id: 2,
            goal: "2 MT Maize Annual",
            harvest: "3 MT"
          });
      });
      return request(server)
        .put("/api/auth/clients/1")
        .set("Authorization", token)
        .send({
          name: "Mohammed Clark-Smith",
          village: "test",
          user_id: 2,
          goal: "2 MT Maize Annual",
          harvest: "3 MT"
        })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON formatted response", function() {
      beforeEach(async () => {
        await db("clients").truncate();
        request(server)
          .post("/api/auth/clients/")
          .set("Authorization", token)
          .send({
            name: "Mohammed Clark-Smith",
            village: "Bolgatanga",
            user_id: 2,
            goal: "2 MT Maize Annual",
            harvest: "3 MT"
          });
      });
      return request(server)
        .put("/api/auth/clients/1")
        .set("Authorization", token)
        .send({
          name: "Mohammed Clark-Smith",
          village: "test",
          user_id: 2,
          goal: "2 MT Maize Annual",
          harvest: "3 MT"
        })
        .then(res => {
          expect(res.type).toEqual("application/json");
        });
    });
  });
  //DELETE to '/api/auth/clients/:id'
  describe("DELETE /", function() {
    it("should return 200 - OK", async () => {
       beforeEach(async () => {
        await db("clients").truncate();
        request(server)
          .post("/api/auth/clients/")
          .set("Authorization", token)
          .send({
            name: "Mohammed Clark-Smith",
            village: "Bolgatanga",
            user_id: 2,
            goal: "2 MT Maize Annual",
            harvest: "3 MT"
          });
      });
      const expectedStatusCode = 200;

      const response = await request(server)
        .delete("/api/auth/clients/1")
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON formatted response", function() {});
  });
});
