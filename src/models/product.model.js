const { Schema, model, Types } = require('mongoose')
const CategoryModel = require('./category.model')

const ProductModel = new Schema({
    name: { type: String, required: true },
    category_id: { type: Types.ObjectId, ref: CategoryModel }
})

module.exports = model('Products', ProductModel)
