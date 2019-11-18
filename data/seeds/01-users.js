exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Jones Osei",
          password: "osei111",
          email: "josei@tiemendo.com"
        },
        {
          id: 2,
          name: "Bernice Dosoo",
          password: "password",
          email: "bdosoo@tiemendo.com"
        }
      ]);
    });
};
