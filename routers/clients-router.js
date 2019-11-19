//imports
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../models/clients-model");
const restricted = require("../middleware/restricted-middleware");
const { validateClient } = require('../middleware/data-validation')

//endpoints
router.post('/', (req, res) => {
    const client = req.body;
    const validateResult = validateClient(client)
    if (validateResult.isSuccessful === true){
    db.insertClient(client)
      .then(client => {
          res.status(200).json(client);
      })
      .catch(err => {
          console.log(err.toString());
          res.status(500).json({ message: 'Failed to add client', error: err})
      })
    } else {
         res.status(400).json({
      message: "client info is invalid. See errors for details.",
      errors: validateResult.errors
    });
    }
})

router.get('/', (req, res) => {
    const ID = req.body.user_id;
    db.findClient(ID)
        
        .then(clients => {
            clients
                ? res.status(200).json(clients)
                : res.status(404).json({ message: "Could not find any clients for this user" })
        })
        .catch(err => res.status(500).json({ message: "Could not retrieve clients; please try again later" }))
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.findClientById(id)
        
        .then(client => {
            client
                ? res.status(200).json(client)
                : res.status(404).json({ message: "Could not find a client with that id" })
        })
        .catch(err => res.status(500).json({ message: "Could not retrieve client; please try again later" }))
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const client = req.body;
    const validateResult = validateClient(client)
    if (validateResult.isSuccessful === true){
    db.updateClient(id,client)
      .then(client => {
          res.status(200).json(client);
      })
      .catch(err => {
          console.log(err.toString());
          res.status(500).json({ message: 'Failed to update client', error: err})
      })
    } else {
         res.status(400).json({
      message: "client info is invalid. See errors for details.",
      errors: validateResult.errors
    });
    }
})

router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    db.removeClient(id)
    .then(clients => {
        res.status(200).json({ message: 'client deleted'})
    })
    .catch(err => {
        console.log(err.toString());
        res.status(500).json({ message: 'Failed to delete user', error: err})
    })
})


//export
module.exports = router;
