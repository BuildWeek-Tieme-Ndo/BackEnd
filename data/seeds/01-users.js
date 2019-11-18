exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Jacob Charter",
          password: "$2a$14$w11faNEk35f7Ea0jXzJVnuzcpxEIZYqiRKrTV9rTelLMs69pSwb9W",
          email: "jcharter@tiemendo.com"
        },
        {
          id: 2,
          name: "Bernice Osei",
          password: "$2a$14$lfCkzo1QLqPHpf56rvMPmO3E/KMVvB9fyXKFP40.iHM8sLQGOK5/K",
          email: "bosei@tiemendo.com"
        }
      ]);
    });
};
