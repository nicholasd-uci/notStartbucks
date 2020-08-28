const router = require('express').Router()
const { Bean } = require('../models')

// GET all users
router.get('/beans', (req, res) => {
  Bean.findAll()
    .then(beans => res.json(beans))
    .catch(err => console.log(err))
})


module.exports = router

// POST one bean
// router.post('/beans', (req, res) => {
//   Bean.create(req.body)
//     .then(beans => res.json(beans))
//     .catch(err => console.log(err))
// })
