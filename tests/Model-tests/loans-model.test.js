const db = require("../../data/dbConfig");
const {
  findLoans,
  findLoanById,
  insertLoan,
  updateLoan,
  removeLoan
} = require("../../models/loans-model");

//POST
describe("loans model", function() {
  describe("insertLoan", function() {
    beforeEach(async () => {
      await db("loans").truncate();
    });

    it("should insert a loan", async function() {
      await insertLoan({
        client_id: 1,
        loan_amt: 500,
        init_date: "01/15/2019",
        due_date: "02/15/2020"
      });
      const loans = await db("loans");
      expect(loans).toHaveLength(1);
    });
    it("should insert the provided loan", async function() {
      await insertLoan({
        client_id: 1,
        loan_amt: 500,
        init_date: "01/15/2019",
        due_date: "02/15/2020"
      });
      const loans = await db("loans");
      expect(loans[0].loan_amt).toBe(500);
    });
  });

  describe("findLoan", function() {
    beforeEach(async () => {
      await db("loans").truncate();
    });
    it("should return all loans", async function() {
      let loan = await insertLoan({
        client_id: 1,
        loan_amt: 500,
        init_date: "01/15/2019",
        due_date: "02/15/2020"
      });
      await findLoans();
      const loans = await db("loans");
      expect(loans.length).toBeGreaterThan(0);
    });
  });

  describe("findLoanById", function() {
    beforeEach(async () => {
      await db("loans").truncate();
    });
    it("should return a single loan", async function() {
      let loan = await insertLoan({
        client_id: 1,
        loan_amt: 500,
        init_date: "01/15/2019",
        due_date: "02/15/2020"
      });
      await findLoanById(1);
      const loans = await db("loans");
      expect(loans).toHaveLength(1);
    });

    it("should return the loan which matches the id", async function() {
      let loan = await insertLoan({
        client_id: 1,
        loan_amt: 500,
        init_date: "01/15/2019",
        due_date: "02/15/2020"
      });
      const loans = await findLoanById(1);
      expect(loans.loan_amt).toBe(500);
    });
  });

  describe("updateLoan", function() {
    beforeEach(async () => {
      await db("loans").truncate();
    });

    it("should update the provided loan", async function() {
      await insertLoan({
        client_id: 1,
        loan_amt: 500,
        init_date: "01/15/2019",
        due_date: "02/15/2020"
      });
      let newLoan = await updateLoan(1, {
        client_id: 1,
        loan_amt: 800,
        init_date: "01/15/2019",
        due_date: "02/15/2020"
      });
      const loans = await db("loans");
      expect(loans[0].loan_amt).toBe(800);
    });
  });

  describe("removeLoan", function() {
    beforeEach(async () => {
      await db("loans").truncate();
    });
    it("should remove a loan", async function() {
      let loans = await insertLoan({
        client_id: 1,
        loan_amt: 500,
        init_date: "01/15/2019",
        due_date: "02/15/2020"
      });
      const loan = await removeLoan(1);
      expect(loans[0]).toBe(undefined);
    });
  });
});
