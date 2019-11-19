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
    return db('clients as c')
              .join('users', 'c.user_id', 'users.id')
              .select('c.id', 'c.name', 'c.village')
}

function findClientById(id) {
    return db('clients').where({ id }).first();
}

function findClientBy(filter) {
    return db('clients').where(filter);
}

async function insertClient(client) {
    const [id] = await db('clients').insert(client, 'id');
    return findById(id);
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