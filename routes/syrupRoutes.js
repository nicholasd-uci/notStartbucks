const router = require('express').Router()
const { Syrup } = require('../models')

// GET all users
router.get('/syrups', (req, res) => {
  Syrup.findAll()
    .then(syrups => res.json(syrups))
    .catch(err => console.log(err))
})

module.exports = router