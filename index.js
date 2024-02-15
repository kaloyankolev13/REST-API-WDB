require("dotenv").config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Routes
const tasks = require('./router/tasks');

const express = require('express');
const app = express();


mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/tasks', tasks);

app.listen(process.env.PORT , () => {
    console.log(`Server started on port ${process.env.PORT}`);
    }
);