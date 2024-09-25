const express = require('express')
const path = require('path');
const cors = require("cors")
const bodyParser = require('body-parser')

const sequelize = require('../db');
const mongoose = require('mongoose');

const User = require('../models/mysql/user');
const Instructor = require('../models/mysql/instructor');
const Course = require('../models/mysql/course');
const Enrollment = require('../models/mysql/enrollment');
const Payment = require('../models/mysql/payment');
const Category = require('../models/mysql//category');

require('../models/mysql/associations');

const userRoutes = require('../routes/user')
const instructorRoutes = require('../routes/instructor')
const courseRoutes = require('../routes/course')
const enrollmentRoutes = require('../routes/enrollment')

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8888

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cors({ origin: true }))

app.use('/uploads/videos/lectures', express.static(path.join(__dirname, '../uploads/videos/lectures')));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/user', userRoutes)
app.use('/instructor', instructorRoutes)
app.use('/course', courseRoutes)
app.use('/enrollment', enrollmentRoutes)

const connectDatabases = async () => {
    try {
        await Promise.all([
            mongoose.connect(process.env.MONGODB_URI),
            sequelize.sync()
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