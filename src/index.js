/* Load Packages */
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

/* Load Local Packages */
const router = require('./router')

const app = new express()
const PORT = process.env.NODE_PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} at ${new Date()}`)
})