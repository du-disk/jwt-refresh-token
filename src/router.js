const { Router } = require("express");
const controller = require("./controller");
const middleware = require("./middleware");

const router = new Router()

/* Public Router */
router.get('/ping', (_req, res, _next) => {
    res.send('PONG!!!')
})

router.post('/login', controller.login)
router.post('/refresh-token', controller.refreshToken)

/* Private Router */
router.use(middleware)

router.get('/secure', (_req, res) => {
    res.send(`Hello 👋, am Secure 🔐`)
})

module.exports = router