//imports
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../models/clients-model");
const restricted = require("../middleware/restricted-middleware");
const { validateClient } = require('../middleware/data-validation')

//endpoints
router.post('/', restricted, (req, res) => {
    const client = req.body;
    const validateResult = validateClient(client)
    if (validateResult.isSuccessful === true){
    db.insertClient(client)
      .then(client => {
          res.status(201).json(client);
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

router.get('/',restricted, (req, res) => {
    db.findClient()
        
        .then(clients => {
            clients
                ? res.status(200).json(clients)
                : res.status(404).json({ message: "Could not find any clients" })
        })
        .catch(err => res.status(500).json({ message: "Could not retrieve clients; please try again later" }))
})

router.get('/:id',restricted, (req, res) => {
    const { id } = req.params;
    db.findClientById(id)
        
        .then(client => {
            client
                ? res.status(200).json(client)
                : res.status(404).json({ message: "Could not find a client with that id" })
        })
        .catch(err => res.status(500).json({ message: "Could not retrieve client; please try again later" }))
})

router.put('/:id',restricted, (req, res) => {
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

router.delete('/:id',restricted, (req, res) =>{
    const { id } = req.params;
    db.removeClient(id)
    .then(clients => {
        res.status(200).json({ message: 'client deleted'})
    })
    .catch(err => {
        console.log(err.toString());
        res.status(500).json({ message: 'Failed to delete client', error: err})
    })
})


//export
module.exports = router;
