//imports
const server = require("../../server");
const request = require("supertest");

const loansRouter = require("../../routers/loans-router");
const { getJwtToken } = require("../../middleware/users-validation");

const db = require("../../data/dbConfig");

//token
const token = getJwtToken("test@test.com");

//CLIENTS

describe("loansRouter", () => {
  //POST to '/api/auth/loans'
  describe("POST /", function() {
    it("should return 201 - CREATE", function() {
      beforeEach(async () => {
        await db("loans").truncate();
      });
      return request(server)
        .post("/api/auth/loans")
        .set("Authorization", token)
        .send({
          client_id: 1,
          loan_amt: 500,
          init_date: "01/15/2019",
          due_date: "02/15/2020"
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("should return JSON formatted response", function() {
      beforeEach(async () => {
        await db("loans").truncate();
      });
      return request(server)
        .post("/api/auth/loans")
        .set("Authorization", token)
        .send({
          client_id: 1,
          loan_amt: 500,
          init_date: "01/15/2019",
          due_date: "02/15/2020"
        })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  //GET to '/api/auth/loans'

  describe("GET /", function() {
    it("should return 200 - OK", async () => {
      const expectedStatusCode = 200;

      const response = await request(server)
        .get("/api/auth/loans")
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON formatted response", async () => {
      const response = await request(server)
        .get("/api/auth/loans")
        .set("Authorization", token);

      expect(response.type).toEqual("application/json");
    });
  });
  //GET to '/api/auth/loans/:id'
  //check that it returns 404 against test database, since there is no loan with that id
  describe("GET /:id", function() {
    it("should return 404 - NOT FOUND", async () => {
      const expectedStatusCode = 404;
      // beforeEach(async () => {
      //   await db("loans").truncate();
      //   request(server)
      //     .post("/api/auth/loans/")
      //     .set("Authorization", token)
      //     .send({
      //       client_id: 1,
      //           loan_amt: 500,
      //           init_date: "01/15/2019",
      //           due_date: "02/15/2020"
      //     });
      // });

      const response = await request(server)
        .get("/api/auth/loans/1")
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON formatted response", async () => {
      beforeEach(async () => {
        await db("loans").truncate();
        request(server)
          .post("/api/auth/loans/")
          .set("Authorization", token)
          .send({
            client_id: 1,
            loan_amt: 500,
            init_date: "01/15/2019",
            due_date: "02/15/2020"
          });
      });

      return request(server)
        .get("/api/auth/loans/1")
        .set("Authorization", token);

      expect(response.type).toEqual("application/json");
    });
  });
  //PUT to '/api/auth/loans/:id'
  describe("PUT /:id", function() {
    it("should return 200 - OK", function() {
      beforeEach(async () => {
        await db("loans").truncate();
        request(server)
          .post("/api/auth/loans/")
          .set("Authorization", token)
          .send({
            client_id: 1,
            loan_amt: 500,
            init_date: "01/15/2019",
            due_date: "02/15/2020"
          });
      });
      return request(server)
        .put("/api/auth/loans/1")
        .set("Authorization", token)
        .send({
          client_id: 1,
          loan_amt: 500,
          init_date: "01/15/2019",
          due_date: "02/15/2020"
        })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON formatted response", function() {
      beforeEach(async () => {
        await db("loans").truncate();
        request(server)
          .post("/api/auth/loans/")
          .set("Authorization", token)
          .send({
            client_id: 1,
            loan_amt: 500,
            init_date: "01/15/2019",
            due_date: "02/15/2020"
          });
      });
      return request(server)
        .put("/api/auth/loans/1")
        .set("Authorization", token)
        .send({
          client_id: 1,
          loan_amt: 500,
          init_date: "01/15/2019",
          due_date: "02/15/2020"
        })
        .then(res => {
          expect(res.type).toEqual("application/json");
        });
    });
  });
  //DELETE to '/api/auth/loans/:id'
  describe("DELETE /", function() {
    it("should return 200 - OK", async () => {
      beforeEach(async () => {
        await db("loans").truncate();
        request(server)
          .post("/api/auth/loans/")
          .set("Authorization", token)
          .send({
            client_id: 1,
            loan_amt: 500,
            init_date: "01/15/2019",
            due_date: "02/15/2020"
          });
      });
      const expectedStatusCode = 200;

      const response = await request(server)
        .delete("/api/auth/loans/1")
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON formatted response", function() {
      beforeEach(async () => {
        await db("loans").truncate();
        request(server)
          .post("/api/auth/loans/")
          .set("Authorization", token)
          .send({
            client_id: 1,
            loan_amt: 500,
            init_date: "01/15/2019",
            due_date: "02/15/2020"
          });
        const response = await request(server)
          .delete("/api/auth/loans/1")
          .set("Authorization", token)
          .then(res => {
            expect(res.type).toEqual("application/json");
          });
      });
    });
  });
});
