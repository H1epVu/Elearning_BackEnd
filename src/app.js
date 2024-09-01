const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')

const sequelize = require('../db');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cors({ origin: true }))

const connectDatabases = async () => {
    try {
        await Promise.all([
            mongoose.connect(process.env.MONGODB_URI),
            sequelize.sync({ force: true })
        ]);
        console.log('Connected to databases');

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (err) {
        console.error('Unable to connect to databases:', err);
    }
};

connectDatabases();