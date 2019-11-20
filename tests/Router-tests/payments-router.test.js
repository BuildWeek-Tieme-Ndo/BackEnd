//imports
const server = require("../../server");
const request = require("supertest");

const paymentsRouter = require("../../routers/payments-router");
const { getJwtToken } = require("../../middleware/users-validation");

const db = require("../../data/dbConfig");

//token
const token = getJwtToken("test@test.com");

//CLIENTS

describe("paymentsRouter", () => {
  //POST to '/api/auth/payments'
  describe("POST /", function() {
    it("should return 201 - CREATE", function() {
      beforeEach(async () => {
        await db("payments").truncate();
      });
      return request(server)
        .post("/api/auth/payments")
        .set("Authorization", token)
        .send({
          loan_id: 2,
          payment_date: "08/15/19",
          payment_amt: 22
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("should return JSON formatted response", function() {
      beforeEach(async () => {
        await db("payments").truncate();
      });
      return request(server)
        .post("/api/auth/payments")
        .set("Authorization", token)
        .send({
          loan_id: 2,
          payment_date: "08/15/19",
          payment_amt: 22
        })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  //GET to '/api/auth/payments'

  describe("GET /", function() {
    it("should return 200 - OK", async () => {
      const expectedStatusCode = 200;

      const response = await request(server)
        .get("/api/auth/payments")
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON formatted response", async () => {
      const response = await request(server)
        .get("/api/auth/payments")
        .set("Authorization", token);

      expect(response.type).toEqual("application/json");
    });
  });
  //GET to '/api/auth/payments/:id'
  //check that it returns 404 against test database, since there is no payment with that id
  describe("GET /:id", function() {
    it("should return 404 - NOT FOUND", async () => {
      const expectedStatusCode = 404;
      // beforeEach(async () => {
      //   await db("payments").truncate();
      //   request(server)
      //     .post("/api/auth/payments/")
      //     .set("Authorization", token)
      //     .send({
      //       loan_id: 2,
      //    payment_date: "08/15/19",
      //    payment_amt: 22
      //     });
      // });

      const response = await request(server)
        .get("/api/auth/payments/1")
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON formatted response", async () => {
      beforeEach(async () => {
        await db("payments").truncate();
        request(server)
          .post("/api/auth/payments/")
          .set("Authorization", token)
          .send({
            loan_id: 2,
            payment_date: "08/15/19",
            payment_amt: 22
          });
      });

      return request(server)
        .get("/api/auth/payments/1")
        .set("Authorization", token);

      expect(response.type).toEqual("application/json");
    });
  });
  //GET to '/api/auth/payments/by-loan/:id'
  describe("GET /by-loan/:id", function() {
    it("should return 200 - OK", async () => {
      const expectedStatusCode = 200;

      const response = await request(server)
        .get("/api/auth/payments/by-loan/1")
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON formatted response", async () => {
      beforeEach(async () => {
        await db("payments").truncate();
        request(server)
          .post("/api/auth/payments/")
          .set("Authorization", token)
          .send({
            loan_id: 2,
            payment_date: "08/15/19",
            payment_amt: 22
          });
      });

      return request(server)
        .get("/api/auth/payments/by-loan/1")
        .set("Authorization", token);

      expect(response.type).toEqual("application/json");
    });
  });
  //PUT to '/api/auth/payments/:id'
  describe("PUT /:id", function() {
    it("should return 200 - OK", function() {
      beforeEach(async () => {
        await db("payments").truncate();
        request(server)
          .post("/api/auth/payments/")
          .set("Authorization", token)
          .send({
            loan_id: 2,
            payment_date: "08/15/19",
            payment_amt: 22
          });
      });
      return request(server)
        .put("/api/auth/payments/1")
        .set("Authorization", token)
        .send({
          loan_id: 2,
          payment_date: "08/15/19",
          payment_amt: 22
        })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON formatted response", function() {
      beforeEach(async () => {
        await db("payments").truncate();
        request(server)
          .post("/api/auth/payments/")
          .set("Authorization", token)
          .send({
            loan_id: 2,
            payment_date: "08/15/19",
            payment_amt: 22
          });
      });
      return request(server)
        .put("/api/auth/payments/1")
        .set("Authorization", token)
        .send({
          loan_id: 2,
          payment_date: "08/15/19",
          payment_amt: 22
        })
        .then(res => {
          expect(res.type).toEqual("application/json");
        });
    });
  });
  //DELETE to '/api/auth/payments/:id'
  describe("DELETE /", function() {
    it("should return 200 - OK", async () => {
      beforeEach(async () => {
        await db("payments").truncate();
        request(server)
          .post("/api/auth/payments/")
          .set("Authorization", token)
          .send({
            loan_id: 2,
            payment_date: "08/15/19",
            payment_amt: 22
          });
      });
      const expectedStatusCode = 200;

      const response = await request(server)
        .delete("/api/auth/payments/1")
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON formatted response", function() {
      beforeEach(async () => {
        await db("payments").truncate();
        request(server)
          .post("/api/auth/payments/")
          .set("Authorization", token)
          .send({
            loan_id: 2,
            payment_date: "08/15/19",
            payment_amt: 22
          });
        const response = await request(server)
          .delete("/api/auth/payments/1")
          .set("Authorization", token)
          .then(res => {
            expect(res.type).toEqual("application/json");
          });
      });
    });
  });
});
