//imports
const server = require("../../server");
const request = require("supertest");

const usersRouter = require("../../routers/users-router");

const db = require("../../data/dbConfig");

//ONBOARDING

describe("usersRouter", () => {
  //POST to '/api/register'
  describe("POST /", function() {
    it("should return 201 - CREATE", function() {
      beforeEach(async () => {
        await db("users").truncate();
      });
      return request(server)
        .post("/api/register")
        .send({
          name: "Tester",
          email: "tester@test.com",
          password: "password"
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("should return JSON formatted response", function() {
      beforeEach(async () => {
        await db("users").truncate();
      });
      return request(server)
        .post("/api/register")
        .send({
          name: "Tester",
          email: "tester@test.com",
          password: "password"
        })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  //POST to '/api/login'
  describe("POST /", function() {
    it("should reject incorrect login info", async () => {
      beforeEach(async () => {
        await db("users").truncate();
        request(server)
          .post("/api/register")
          .send({
            name: "Tester",
            email: "tester@test.com",
            password: "password"
          });
      });
      const expectedStatusCode = 401;

      const response = await request(server)
        .post("/api/login")
        .send({
          email: "tester@test.com",
          password: "passwordz"
        });

      expect(response.status).toEqual(expectedStatusCode);
    });
    it("should return JSON formatted response", function() {
      beforeEach(async () => {
        await db("users").truncate();
        request(server)
          .post("/api/register/")
          .send({
            name: "Tester",
            email: "tester@test.com",
            password: "password"
          });
        const response = await request(server)
          .post("/api/login")
          .send({
            email: "tester@test.com",
            password: "password"
          })
          .then(res => {
            expect(res.type).toEqual("application/json");
          });
      });
    });
  });
});
