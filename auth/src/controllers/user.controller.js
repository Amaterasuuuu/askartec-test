class UserController {
    findAll = async (req, res) => {
        const result = await axios.get(`${process.env.BACKEND_URL}/users/`)
            .then(data => data.data)
        res.status(200).json(result)
    }

    findOne = async (req, res) => {
        const { id } = req.params
        const result = await axios.get(`${process.env.BACKEND_URL}/users/${id}`)
            .then(data => data.data)
        res.status(200).json(result)
    }

    create = async (req, res) => {
        const { login, password } = req.body
        const result = await axios.post(
            `${process.env.BACKEND_URL}/users/`,
            { login, password }
        ).then(data => data.data)
        res.status(201).json(result)
    }

    delete = async (req, res) => {
        const { id } = req.params
        const result = await axios.delete(
            `${process.env.BACKEND_URL}/users/`,
            { id }
        ).then(data => data.data)
        res.status(204).json(result)
    }
}

module.exports = new UserController()
