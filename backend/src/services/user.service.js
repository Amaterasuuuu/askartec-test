const bcrypt = require('bcryptjs')
const UserModel = require('../models/user.model')

class UserService {
    async findAll(options) {
        return await UserModel.find(options)
    }

    async findOne(options) {
        try {
            return await UserModel.findOne(options)
        } catch(e) {
            return { status: 400, message: 'User is not defined' }
        }
    }

    async findById(id) {
        try {
            return await UserModel.findById(id)
        } catch(e) {
            return { status: 400, message: 'User is not defined' }
        }
    }

    async create(login, password) {
        const exist = await this.findOne({ login })
        if (exist) {
            return { status: 400, message: 'User allready exist' }
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)
        const user = new UserModel({
            login,
            password: hashedPass
        })
        return await user.save()
    }

    async delete(id) {
        const user = await this.findById(id)
        if (!user) {
            return { status: 400, message: 'User is not defined' }
        }
        try {
            await user.delete()
            return { status: 204, message: 'User is successfully delete' }    
        } catch(e) {
            return { status: 500, message: e.message }    
        }
    }
}

module.exports = UserService
