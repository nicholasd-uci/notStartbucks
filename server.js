// npm init -y , i , mysql1, express
const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))


// require('./models')

// force .sync(force: true) --> then remove it after you have set up path in userRoutes.js folder.
require('./db').sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))
