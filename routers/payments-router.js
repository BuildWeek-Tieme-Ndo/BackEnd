//imports
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../models/payments-model");
const restricted = require("../middleware/restricted-middleware");
const { validatePayment } = require('../middleware/data-validation')

//endpoints
router.post('/', restricted, (req, res) => {
    const payment = req.body;
    const validateResult = validatePayment(payment)
    if (validateResult.isSuccessful === true){
    db.insertPayment(payment)
      .then(payment => {
          res.status(201).json(payment);
      })
      .catch(err => {
          console.log(err.toString());
          res.status(500).json({ message: 'Failed to add payment', error: err})
      })
    } else {
         res.status(400).json({
      message: "payment info is invalid. See errors for details.",
      errors: validateResult.errors
    });
    }
})

router.get('/',restricted, (req, res) => {
    db.findPayments()
        
        .then(payments => {
            payments
                ? res.status(200).json(payments)
                : res.status(404).json({ message: "Could not find any payments" })
        })
        .catch(err => res.status(500).json({ message: "Could not retrieve payments; please try again later" }))
})

router.get('/:id',restricted, (req, res) => {
    const { id } = req.params;
    db.findPaymentById(id)
        
        .then(payment => {
            payment
                ? res.status(200).json(payment)
                : res.status(404).json({ message: "Could not find a payment with that id" })
        })
        .catch(err => res.status(500).json({ message: "Could not retrieve payment; please try again later" }))
})

router.get('/by-loan/:id', restricted, (req, res) => {
    const {id } = req.params;
    db.findPaymentsByLoanId(id)

         .then(payment => {
            payment
                ? res.status(200).json(payment)
                : res.status(404).json({ message: "Could not find any payments associated with that loan number" })
        })
        .catch(err => res.status(500).json({ message: "Could not retrieve payment; please try again later" }))
})

router.put('/:id',restricted, (req, res) => {
    const { id } = req.params
    const payment = req.body;
    const validateResult = validatePayment(payment)
    if (validateResult.isSuccessful === true){
    db.updatePayment(id,payment)
      .then(payment => {
          res.status(200).json(payment);
      })
      .catch(err => {
          console.log(err.toString());
          res.status(500).json({ message: 'Failed to update payment', error: err})
      })
    } else {
         res.status(400).json({
      message: "payment info is invalid. See errors for details.",
      errors: validateResult.errors
    });
    }
})

router.delete('/:id',restricted, (req, res) =>{
    const { id } = req.params;
    db.removePayment(id)
    .then(payments => {
        res.status(200).json({ message: 'payment deleted'})
    })
    .catch(err => {
        console.log(err.toString());
        res.status(500).json({ message: 'Failed to delete payment', error: err})
    })
})


//export
module.exports = router;
