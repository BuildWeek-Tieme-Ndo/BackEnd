module.exports = {
  validateClient, 
  validateLoan,
  validatePayment
}

function validateClient(client) {
  let errors = [];
  if (!client.name) {
    errors.push("Client's name is required");
  }
  if (!client.user_id) {
    errors.push("please provide the id of the user in charge of this client");
  }
  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}

function validateLoan(loan) {
  let errors = [];
  if (!loan.client_id) {
    errors.push("Please provide the id of the client responsible for this loan");
  }
  if (!loan.loan_amt) {
    errors.push("please provide the total loan amount");
  }
  if (!loan.init_date) {
    errors.push("please provide the loan start date");
  }
  if (!loan.due_date) {
    errors.push("please provide the loan due date");
  }
  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}

function validatePayment(payment) {
  let errors = [];
  if (!payment.loan_id) {
    errors.push("Please provide the id of the associated loan");
  }
  if (!payment.payment_date) {
    errors.push("please provide the payment date");
  }
  if (!payment.payment_amt) {
    errors.push("please provide the payment amount");
  }
  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}
