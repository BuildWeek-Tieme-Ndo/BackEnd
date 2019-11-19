//imports
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../models/loans-model");
const restricted = require("../middleware/restricted-middleware");
const { validateLoan } = require('../middleware/data-validation')

//endpoints
router.post('/', restricted, (req, res) => {
    const loan = req.body;
    const validateResult = validateLoan(loan)
    if (validateResult.isSuccessful === true){
    db.insertLoan(loan)
      .then(loan => {
          res.status(201).json(loan);
      })
      .catch(err => {
          console.log(err.toString());
          res.status(500).json({ message: 'Failed to add loan', error: err})
      })
    } else {
         res.status(400).json({
      message: "loan info is invalid. See errors for details.",
      errors: validateResult.errors
    });
    }
})

router.get('/',restricted, (req, res) => {
    db.findLoans()
        
        .then(loans => {
            loans
                ? res.status(200).json(loans)
                : res.status(404).json({ message: "Could not find any loans for this user" })
        })
        .catch(err => res.status(500).json({ message: "Could not retrieve loans; please try again later" }))
})

router.get('/:id',restricted, (req, res) => {
    const { id } = req.params;
    db.findLoanById(id)
        
        .then(loan => {
            loan
                ? res.status(200).json(loan)
                : res.status(404).json({ message: "Could not find a loan with that id" })
        })
        .catch(err => res.status(500).json({ message: "Could not retrieve loan; please try again later" }))
})

router.put('/:id',restricted, (req, res) => {
    const { id } = req.params
    const loan = req.body;
    const validateResult = validateLoan(loan)
    if (validateResult.isSuccessful === true){
    db.updateLoan(id,loan)
      .then(loan => {
          res.status(200).json(loan);
      })
      .catch(err => {
          console.log(err.toString());
          res.status(500).json({ message: 'Failed to update loan', error: err})
      })
    } else {
         res.status(400).json({
      message: "loan info is invalid. See errors for details.",
      errors: validateResult.errors
    });
    }
})

router.delete('/:id',restricted, (req, res) =>{
    const { id } = req.params;
    db.removeLoan(id)
    .then(loans => {
        res.status(200).json({ message: 'loan deleted'})
    })
    .catch(err => {
        console.log(err.toString());
        res.status(500).json({ message: 'Failed to delete user', error: err})
    })
})


//export
module.exports = router;
