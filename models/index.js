const Drink = require('./Drink.js')
const Bean = require('./Bean.js')
const Syrup = require('./Syrup.js')
const Topping = require('./Topping.js')

Topping.hasMany(Drink)
Bean.hasMany(Drink)
Syrup.hasMany(Drink)
Drink.belongsTo(Topping)
Drink.belongsTo(Syrup)
Drink.belongsTo(Bean)

module.exports = { Drink, Bean, Syrup, Topping }
