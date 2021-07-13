function check_auth(req, res, next) {
    const user = req.user
    if (!user) {
        return res.json({ status: 401, message: 'Unauthorized' })
    }
    next()
}

module.exports = check_auth