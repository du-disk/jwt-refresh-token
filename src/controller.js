const jsonwebtoken = require("jsonwebtoken");
const {
    NODE_SECRET_KEY,
    NODE_TOKEN_LIFE = 900,
    NODE_REFRESH_SECRET_KEY,
    NODE_REFRESH_TOKEN_LIFE = 86400
} = process.env

class Controller {
    login(req, res, _next) {
        const {
            username,
            password
        } = req.body

        const token = jsonwebtoken.sign({ username, password }, NODE_SECRET_KEY, { expiresIn: NODE_TOKEN_LIFE })
        const refreshToken = jsonwebtoken.sign({ username }, NODE_REFRESH_SECRET_KEY, { expiresIn: NODE_REFRESH_TOKEN_LIFE })

        const response = {
            token,
            refreshToken,
            success: true,
        }

        global[refreshToken] = refreshToken

        res.send(response)
    }

    refreshToken(req, res, _next) {
        const { refreshToken } = req.body

        if ((refreshToken) && (refreshToken in global)) {

            jsonwebtoken.verify(token, NODE_REFRESH_SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ "success": false, "message": err.message });
                }
                const token = jsonwebtoken.sign({ refreshToken }, NODE_SECRET_KEY, { expiresIn: NODE_TOKEN_LIFE })
                const response = {
                    token,
                    success: true
                }

                global[refreshToken] = refreshToken
                res.status(200).json(response);
            });
        } else {
            res.status(404).send('Invalid request')
        }
    }
}

module.exports = new Controller()