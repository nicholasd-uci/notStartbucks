const Drink = require('./Drink.js')
const Bean = require('./Bean.js')
const Syrup = require('./Syrup.js')
const Topping = require('./Topping.js')

Drink.hasMany(Bean, Syrup, Topping)
Bean.belongsTo(Drink)
Syrup.belongsTo(Drink)
Topping.belongsTo(Drink)

module.exports = { Drink, Bean, Syrup, Topping }
