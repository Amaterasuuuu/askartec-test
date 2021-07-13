const ProductService = require('../services/product.service')

class ProductController {
    constructor(service) {
        this.service = service
    }

    findAll = async (req, res) => {
        const { category_id } = req.query
        const options = category_id ? { category_id } : {}
        const result = await this.service.findAll(options)
        res.status(200).json(result)
    }
    
    findAllFav = async (req, res) => {
        const { ids } = req.query
        const result = await this.service.findAllFav(ids)
        res.status(200).json(result)
    }

    findOne = async (req, res) => {
        const { id } = req.params
        const result = await this.service.findOne({ _id: id })
        res.status(200).json(result)
    }
    
    create = async (req, res) => {
        const { name, category_id } = req.body
        const result = await this.service.create(name, category_id)
        res.status(201).json(result)
    }

    delete = async (req, res) => {
        const { id } = req.params
        const result = await this.service.delete(id)
        res.status(204).json(result)
    }

    addToFav = async (req, res) => {
        const { product_id, user_id } = req.body
        const result = await this.service.addToFav(user_id, product_id)
        res.status(200).json(result)
    }
}

module.exports = new ProductController(new ProductService())
