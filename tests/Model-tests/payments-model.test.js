const db = require("../../data/dbConfig");
const {
  findPayments,
  findPaymentById,
  insertPayment,
  updatePayment,
  removePayment
} = require("../../models/payments-model");

//POST
describe("payments model", function() {
  describe("insertPayment", function() {
    beforeEach(async () => {
      await db("payments").truncate();
    });

    it("should insert a payment", async function() {
      await insertPayment({
        loan_id: 2,
        payment_date: "08/15/19",
        payment_amt: 22
      });
      const payments = await db("payments");
      expect(payments).toHaveLength(1);
    });
    it("should insert the provided payment", async function() {
      await insertPayment({
        loan_id: 2,
        payment_date: "08/15/19",
        payment_amt: 22
      });
      const payments = await db("payments");
      expect(payments[0].payment_amt).toBe(22);
    });
  });

  describe("findPayment", function() {
    beforeEach(async () => {
      await db("payments").truncate();
    });
    it("should return all payments", async function() {
      let payment = await insertPayment({
        loan_id: 2,
        payment_date: "08/15/19",
        payment_amt: 22
      });
      await findPayments();
      const payments = await db("payments");
      expect(payments.length).toBeGreaterThan(0);
    });
  });

  describe("findPaymentById", function() {
    beforeEach(async () => {
      await db("payments").truncate();
    });
    it("should return a single payment", async function() {
      let payment = await insertPayment({
        loan_id: 2,
        payment_date: "08/15/19",
        payment_amt: 22
      });
      await findPaymentById(1);
      const payments = await db("payments");
      expect(payments).toHaveLength(1);
    });

    it("should return the payment which matches the id", async function() {
      let payment = await insertPayment({
        loan_id: 2,
        payment_date: "08/15/19",
        payment_amt: 22
      });
      const payments = await findPaymentById(1);
      expect(payments.payment_amt).toBe(22);
    });
  });

  describe("updatePayment", function() {
    beforeEach(async () => {
      await db("payments").truncate();
    });

    it("should update the provided payment", async function() {
      await insertPayment({
        loan_id: 2,
        payment_date: "08/15/19",
        payment_amt: 22
      });
      let newPayment = await updatePayment(1, {
        loan_id: 2,
        payment_date: "08/15/19",
        payment_amt: 33
      });
      const payments = await db("payments");
      expect(payments[0].payment_amt).toBe(33);
    });
  });

  describe("removePayment", function() {
    beforeEach(async () => {
      await db("payments").truncate();
    });
    it("should remove a payment", async function() {
      let payments = await insertPayment({
        loan_id: 2,
        payment_date: "08/15/19",
        payment_amt: 22
      });
      const payment = await removePayment(1);
      expect(payments[0]).toBe(undefined);
    });
  });
});
