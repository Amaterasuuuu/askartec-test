const CategoryService = require('../services/category.service')

class CategoryController {
    constructor(service) {
        this.service = service
    }

    findAll = async (req, res) => {
        const categories = await this.service.findAll()
        res.status(200).json(categories)
    }

    findOne = async (req, res) => {
        const { id } = req.params
        const result = this.service.findOne({ _id: id })
        res.status(200).json(result)
    }

    create = async (req, res) => {
        const { name } = req.body
        const result = await this.service.create(name)
        res.status(200).json(result)
    }

    delete = async (req, res) => {
        const { id } = req.params
        const result = await this.service.delete(id)
        res.status(204).json(result)
    }
}

module.exports = new CategoryController(new CategoryService)
