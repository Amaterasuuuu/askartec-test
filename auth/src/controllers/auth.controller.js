class AuthController {
    constructor(service) {
        this.service = service
    }

    login = async (req, res) => {
        res.status(200).json('Successfully login')
    }
}

module.exports = new AuthController()
