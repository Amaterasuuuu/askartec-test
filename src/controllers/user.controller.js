const UserService = require('../services/user.service')

class UserController {
    constructor(service) {
        this.service = service
    }

    findAll = async (req, res) => {
        const users = await this.service.findAll()
        res.status(200).json(users)
    }

    findOne = async (req, res) => {
        const { id } = req.params
        const user = await this.service.findById(id)
        res.status(200).json(user)
    }

    create = async (req, res) => {
        const { login, password } = req.body
        const user = await this.service.create(login, password)
        res.status(201).json(user)
    }

    delete = async (req, res) => {
        const { id } = req.params
        const result = await this.service.delete(id)
        res.status(204).json(result)
    }
}

module.exports = new UserController(new UserService())
