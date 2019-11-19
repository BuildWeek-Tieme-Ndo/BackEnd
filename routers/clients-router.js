//imports
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../models/clients-model");
const restricted = require("../middleware/restricted-middleware");

//endpoints
router.post('/', (req, res) => {
    
})

router.get('/', (req, res) => {
    db.findClient(req.user)
        .then(clients => {
            clients
                ? res.status(200).json(clients)
                : res.status(404).json({ message: "Could not find any clients for this user" })
        })
        .catch(err => res.status(500).json({ message: "Could not retrieve clients; please try again later" }))
})

//export
module.exports = router;
