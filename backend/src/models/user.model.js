const { Schema, model, Types } = require('mongoose')
const ProductModel = require('./product.model')

const UserModel = new Schema({
    login: { type: String, required: true },
    password: { type: String, required: true },
    fav_products: [{
        type: String,
        default: []
    }]
})

module.exports = model('Users', UserModel)
