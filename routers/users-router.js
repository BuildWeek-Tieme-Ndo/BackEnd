//imports
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../models/users-model');
const restricted = require('../middleware/restricted-middleware');
const { validateRegistration, validateUser, getJwtToken } = require('../middleware/users-validation');

//endpoints for /api/

router.post('/register', (req, res) => {
    let user = req.body;
    const validateResult = validateRegistration(user);

    if (validateResult.isSuccessful === true) {
        const hash = bcrypt.hashSync(user.password, 14);
        user.password = hash;

        db.add(user)
          .then(saved => {
              res.status(201).json({ message: `user ${user.name} has been registered` });
          })
          .catch(err => {
              console.log(err.toString());
              res.status(500).json({ message: 'Could not register user; please try again later', error: err});
          });
    } else {
        res.status(400).json({
            message: "User info is invalid. See errors for details.",
            errors: validateResult.errors
        });
    }
});

//exports
module.exports = router;