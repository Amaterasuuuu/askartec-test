const { Schema, model } = require('mongoose')

const CategoryModel = new Schema({
    name: { type: String, required: true },
    products_count: { type: Number, default: 0 }
})

module.exports = model('Categories', CategoryModel)
