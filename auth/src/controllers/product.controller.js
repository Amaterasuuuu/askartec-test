class ProductController {
    findAll = async (req, res) => {
        const { category_id } = req.query
        const result = await axios.get(`${process.env.BACKEND_URL}/products?category_id=${category_id}`)
            .then(data => data.data)
        res.status(200).json(result)
    }
    
    findAllFav = async (req, res) => {
        const { fav_products: ids } = req.user
        const result = await axios.get(`${process.env.BACKEND_URL}/products?ids=${ids}`)
            .then(data => data.data)
        res.status(200).json(result)
    }

    findOne = async (req, res) => {
        const { id } = req.params
        const result = await axios.get(`${process.env.BACKEND_URL}/products/${id}`)
            .then(data => data.data)
        res.status(200).json(result)
    }
    
    create = async (req, res) => {
        const { name, category_id } = req.body
        const result = await axios.post(
            `${process.env.BACKEND_URL}/products?ids=${ids}`,
            { name, category_id }
        ).then(data => data.data)
        res.status(201).json(result)
    }

    delete = async (req, res) => {
        const { id } = req.params
        const result = await axios.delete(
            `${process.env.BACKEND_URL}/products?ids=${ids}`,
            { id }
        ).then(data => data.data)
        res.status(204).json(result)
    }

    addToFav = async (req, res) => {
        const { product_id } = req.body
        const { _id: user_id } = req.user
        const result = await axios.post(
            `${process.env.BACKEND_URL}/products?ids=${ids}`,
            { product_id, user_id }
        ).then(data => data.data)
        res.status(200).json(result)
    }
}

module.exports = new ProductController()
