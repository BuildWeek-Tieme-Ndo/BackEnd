exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("payments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("payments").insert([
        { id: 1, loan_id: 1, payment_date: "02/15/19", payment_amt: 41.67 },
        { id: 2, loan_id: 1, payment_date: "03/15/19", payment_amt: 41.66 },
        { id: 3, loan_id: 1, payment_date: "04/15/19", payment_amt: 41.66 },
        { id: 4, loan_id: 1, payment_date: "05/15/19", payment_amt: 41.67 },
        { id: 5, loan_id: 1, payment_date: "06/15/19", payment_amt: 41.66 },
        { id: 6, loan_id: 1, payment_date: "07/15/19", payment_amt: 41.67 },
        { id: 7, loan_id: 1, payment_date: "08/15/19", payment_amt: 41.66 },
        { id: 8, loan_id: 1, payment_date: "09/15/19", payment_amt: 41.67 },
        { id: 9, loan_id: 1, payment_date: "10/15/19", payment_amt: 41.66 },
        { id: 10, loan_id: 1, payment_date: "11/15/19", payment_amt: 41.67 },
        { id: 11, loan_id: 2, payment_date: "07/15/19", payment_amt: 21.0 },
        { id: 12, loan_id: 2, payment_date: "08/15/19", payment_amt: 21.0 },
        { id: 13, loan_id: 2, payment_date: "08/15/19", payment_amt: 21.0 },
        { id: 14, loan_id: 2, payment_date: "09/15/19", payment_amt: 20.0 },
        { id: 15, loan_id: 2, payment_date: "10/15/19", payment_amt: 21.0 },
        { id: 16, loan_id: 2, payment_date: "11/15/19", payment_amt: 21.0 },
        { id: 17, loan_id: 3, payment_date: "09/15/19", payment_amt: 8.33 },
        { id: 18, loan_id: 3, payment_date: "10/15/19", payment_amt: 8.34 },
        { id: 19, loan_id: 3, payment_date: "11/15/19", payment_amt: 8.33 },
        { id: 20, loan_id: 4, payment_date: "11/15/19", payment_amt: 62.5 }
      ]);
    });
};
