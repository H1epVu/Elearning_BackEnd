const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cors({ origin: true }))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})