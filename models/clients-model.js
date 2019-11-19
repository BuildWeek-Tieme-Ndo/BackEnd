//import
const db = require("../data/dbConfig");

//export

module.exports = {
  findClient,
  findClientById,
  findClientBy,
  insertClient,
  updateClient,
  removeClient
};

function findClient(ID) {
  return db("clients as c")
    .join("users as u", "c.user_id", "u.id")
    .select("c.id", "c.name", "c.village")
    .where({ user_id: ID });
}

function findClientById(id) {
  return db("clients")
    .where({ id })
    .first();
}

function findClientBy(filter) {
  return db("clients").where(filter);
}

async function insertClient(client) {
  const [id] = await db("clients").insert(client, "id");
  return findClientById(id);
}

async function updateClient(id, client) {
  const updatedClient = await db("clients")
    .where({ id })
    .update(client, "id");
    return findClientById(id)
}

function removeClient(id) {
  return db("clients")
    .where({ id })
    .del();
}
