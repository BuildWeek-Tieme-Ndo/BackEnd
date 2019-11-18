exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("loans")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("loans").insert([
        {
          id: 1,
          client_id: 1,
          loan_amt: 500.0,
          init_date: "01/15/2019",
          due_date: "02/15/2020"
        },
        {
          id: 2,
          client_id: 2,
          loan_amt: 250.0,
          init_date: "06/15/2019",
          due_date: "07/15/2020"
        },
        {
          id: 3,
          client_id: 3,
          loan_amt: 100.0,
          init_date: "08/15/2019",
          due_date: "09/15/2020"
        },
        {
          id: 4,
          client_id: 4,
          loan_amt: 750.0,
          init_date: "10/15/2019",
          due_date: "11/15/2020"
        }
      ]);
    });
};
