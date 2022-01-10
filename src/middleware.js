const jwt = require('jsonwebtoken')
const NODE_SECRET_KEY = process.env.NODE_SECRET_KEY

module.exports = (req, res, next) => {
    const token = req.headers['x-access-token']

    if (token) {
        jwt.verify(token, NODE_SECRET_KEY, (err, decoded) => {
            if (err) {
                console.error(err.message)
                return res.status(401).json({ "success": false, "message": `You're is not authenticated!` });
            }
            req.decoded = decoded;
            next();
        });
    } else {
        return res.status(403).send({
            "success": false,
            "message": 'No token provided.'
        });
    }
}