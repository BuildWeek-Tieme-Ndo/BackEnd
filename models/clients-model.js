//import
const db = require('../data/dbConfig');

//export

module.exports = {
    findClient,
    findClientById,
    findClientBy,
    insertClient,
    updateClient,
    removeClient
};

function findClient(user) {
   const ID = user.userId;
   console.log('ID', ID)
    return db('clients as c')
              .join('users as u', 'c.user_id', 'u.id')
              .select('c.id', 'u.id', 'c.name', 'c.village')
              .where({ user_id: ID })
              
}

function findClientById(id) {
    return db('clients').where({ id }).first();
}

function findClientBy(filter) {
    return db('clients').where(filter);
}

async function insertClient(client) {
    const [id] = await db('clients').insert(client, 'id');
    return findClientById(id);
}

function updateClient(id, client) {
    return db('clients')
            .where({ id })
            .update(client)
}

function removeClient(id) {
    return db('clients')
            .where({ id })
            .del();
}