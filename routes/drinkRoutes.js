const router = require('express').Router()
const { Drink } = require('../models')

// GET all users
Drink.get('/drinks', (req, res) => {
  Drink.findAll()
    .then(drinks => res.json(drinks))
    .catch(err => console.log(err))
})

// POST one user
Drink.post('/drinks', (req, res) => {
  User.create(req.body)
    .then(drinks => res.json(drinks))
    .catch(err => console.log(err))
})

module.exports = router