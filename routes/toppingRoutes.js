const router = require('express').Router()
const { Topping } = require('../models')

// GET all users
router.get('/toppings', (req, res) => {
  Topping.findAll()
    .then(toppings => res.json(toppings))
    .catch(err => console.log(err))
})

module.exports = router