const mongoose = require('mongoose')

const coffeeSchema = mongoose.Schema({
    name: String,
    region: String,
    year: Number,
    quantity: Number,
    roast: String,
    tastingnotes: [],    
})

const Coffee = mongoose.model("Coffee", coffeeSchema)

module.exports = Coffee