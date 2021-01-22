require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const token = req.header('auth')

    if (!token) {
        return res.status(401).json({
            status: false,
            msg: 'token not empty'
        })
    }

    const decodedToken = jwt.verify(token, process.env.JWT_KEY)
    req.id = decodedToken.id
    next()
}