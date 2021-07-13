const CategoryModel = require('../models/category.model')

class CategoryService {
    async findAll(options = {}) {
        const categories = await CategoryModel.find(options)
        for (let category of categories) {
            category.products_count = await CategoryModel.countDocuments({
                _id: category._id
            })
        }
        return categories
    }

    async findOne(options) {
        try {
            const category = await CategoryModel.findOne(options)
            category.products_count = await CategoryModel.countDocuments(options)
            return category
        } catch(e) {
            return { status: 400, message: 'Category is not defined' }
        }
    }

    async create(name) {
        const category = new CategoryModel({
            name
        })
        return await category.save()
    }

    async delete(id) {
        const category = await this.findOne({ _id: id })
        if (!category) {
            return { status: 400, message: 'Category is not defined' }
        }
        try {
            await category.delete()
            return { status: 204, message: 'Category is successfully deleted' }    
        } catch(e) {
            return { status: 500, message: e.message }
        }
    }
}

module.exports = CategoryService
