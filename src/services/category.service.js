const CategoryModel = require('../models/category.model')

class CategoryService {
    async findAll(options) {
        return await CategoryModel.find(options)
    }

    async findOne(options) {
        try {
            return await CategoryModel.findOne(options)
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
