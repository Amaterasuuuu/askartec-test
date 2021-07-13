const CategoryService = require('./category.service')
const UserService = require('./user.service')
const ProductModel = require('../models/product.model')

class ProductService {
    constructor() {
        this.category_service = new CategoryService()
        this.user_service = new UserService()
    }

    async findAll(options) {
        try {
            return await ProductModel.find(options)
        } catch(e) {
            return { status: 400, message: 'Bad request' }
        }
    }

    async findOne(options) {
        try {
            return await ProductModel.findOne(options)
        } catch(e) {
            return { status: 400, message: 'Product is not defined' }
        }
    }

    async findAllFav(ids) {
        return this.findAll({
            _id: { $in: ids }
        })
    }

    async create(name, category_id) {
        const category = await this.category_service.findOne({ _id: category_id })
        if (!category) {
            return { status: 400, message: 'Category is not defined' }
        }
        const product = new ProductModel({
            name,
            category_id
        })
        return await product.save()
    }

    async delete(id) {
        const product = await this.findOne({ _id: id })
        if (!product) {
            return { status: 400, message: 'Product is not defined' }
        }
        try {
            await product.delete()
            return { status: 204, message: 'Product successfully deleted' }
        } catch(e) {
            return { status: 400, message: e.message }
        }
    }

    async addToFav(user_id, product_id) {
        const user = await this.user_service.findOne({ _id: user_id })
        if (user.status == 400) {
            return user
        }
        const product = await this.findOne({ _id: product_id })
        if (product.status == 400) {
            return product_exist
        }
        try {
            user.fav_products.push(product._id)
            await user.save()
            return { status: 200, message: 'Product successfully added to favorites' }    
        } catch(e) {
            return { status: 500, message: e.message }
        }
    }
}

module.exports = ProductService
