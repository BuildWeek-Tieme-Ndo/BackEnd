//import
const db = require("../data/dbConfig");

//export

module.exports = {
  findLoans,
  findLoanById,
  findLoanBy,
  insertLoan,
  updateLoan,
  removeLoan
};


//helper functions

function findLoans() {
  return db("loans");
    
}

function findLoanById(id) {
  return db("loans")
    .where({ id })
    .first();
}

function findLoanBy(filter) {
  return db("loans").where(filter);
}

async function insertLoan(loan) {
  const [id] = await db("loans").insert(loan, "id");
  return findLoanById(id);
}

async function updateLoan(id, loan) {
  const updatedLoan = await db("loans")
    .where({ id })
    .update(loan, "id");
    return findLoanById(id)
}

function removeLoan(id) {
  return db("loans")
    .where({ id })
    .del();
}
