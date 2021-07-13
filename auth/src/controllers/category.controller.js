const axios = require('axios')

class CategoryController {
    findAll = async (req, res) => {
        const categories = await axios.get(`${process.env.BACKEND_URL}/categories/`)
            .then(data => data.data)
        res.status(200).json(categories)
    }

    findOne = async (req, res) => {
        const { id } = req.params
        const result = await axios.get(`${process.env.BACKEND_URL}/categories/${id}`)
            .then(data => data.data)
        res.status(200).json(result)
    }

    create = async (req, res) => {
        const { name } = req.body
        const result = await axios.post(
            `${process.env.BACKEND_URL}/categories/`,
            { name }
        ).then(data => data.data)
        res.status(200).json(result)
    }

    delete = async (req, res) => {
        const { id } = req.params
        const result = await axios.delete(
            `${process.env.BACKEND_URL}/categories/`,
            { id }
        ).then(data => data.data)
        res.status(204).json(result)
    }
}

module.exports = new CategoryController()
