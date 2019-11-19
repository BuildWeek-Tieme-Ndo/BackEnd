//imports and dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('./routers/users-router');
const clientsRouter = require('./routers/clients-router');

//server
const server = express();

//middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

//routes
server.use('/api', usersRouter);
server.use('/api/auth/clients', clientsRouter)

//server test
server.get('/', (req, res) => {
    res.send('testing')
})

//export
module.exports = server;