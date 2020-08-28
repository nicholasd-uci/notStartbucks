const Drink = require('./Drink.js')
const Bean = require('./Bean.js')
const Syrup = require('./Syrup.js')
const Topping = require('./Topping.js')


Bean.hasMany(Drink)
Syrup.hasMany(Drink)
Topping.hasMany(Drink)

Drink.belongsTo(Bean)
Drink.belongsTo(Syrup)
Drink.belongsTo(Topping)


module.exports = { Drink, Bean, Syrup, Topping }


// that will put the drink ID on the bean
// Drink.hasOne(Bean)

// this means that it will only be that bean id on that drink
// Bean.hasOne(Drink)
