exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("clients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("clients").insert([
        {
          id: 1,
          name: "Ayi Adarkwa",
          village: "Kwabia",
          user_id: 1,
          goal: "6 MT Maize Annual",
          harvest: "6.25 MT"
        },
        {
          id: 2,
          name: "John Dotse",
          village: "Badu",
          user_id: 1,
          goal: "3 MT Maize Annual",
          harvest: "3.5 MT"
        },
        {
          id: 3,
          name: "Mohammed Clerk",
          village: "Bolgatanga",
          user_id: 2,
          goal: "2 MT Maize Annual",
          harvest: "3 MT"
        },
        {
          id: 4,
          name: "Kofi Nkansah",
          village: "Apatase",
          user_id: 2,
          goal: "9 MT Maize Annual",
          harvest: "8.75 MT"
        }
      ]);
    });
};
