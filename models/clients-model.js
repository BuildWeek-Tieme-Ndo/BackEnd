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

function findClient() {
  return db("clients");
    
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
