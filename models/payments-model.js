//import
const db = require("../data/dbConfig");

//export

module.exports = {
  findPayments,
  findPaymentById,
  findPaymentsByLoanId,
  findPaymentBy,
  insertPayment,
  updatePayment,
  removePayment
};


//helper functions

function findPayments() {
  return db("payments");
    
}

function findPaymentById(id) {
  return db("payments")
    .where({ id })
    .first();
}

function findPaymentsByLoanId(id){
    return db("payments")
        .where({ loan_id: id})
        
}

function findPaymentBy(filter) {
  return db("payments").where(filter);
}

async function insertPayment(payment) {
  const [id] = await db("payments").insert(payment, "id");
  return findPaymentById(id);
}

async function updatePayment(id, payment) {
  const updatedPayment = await db("payments")
    .where({ id })
    .update(payment, "id");
    return findPaymentById(id)
}

function removePayment(id) {
  return db("payments")
    .where({ id })
    .del();
}
