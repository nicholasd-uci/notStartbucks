const router = require('express').Router()
const { Drink, Bean, Syrup, Topping } = require('../models')

// GET all users
router.get('/drinks', (req, res) => {
  Drink.findAll({ include: [Bean, Syrup, Topping] })
    .then(drinks => res.json(drinks))
    .catch(err => console.log(err))
})

// POST one user
router.post('/drinks', (req, res) => {
  Drink.create(req.body)
    .then(drinks => {
      Drink.findOne({ where: { id: drinks.id}, include: [Bean, Syrup, Topping] })
        .then(fullDrink => res.json(fullDrink))
    })
    .catch(err => console.log(err))
})

module.exports = router