require("dotenv").config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');


// Routes
const tasks = require('./router/task');
const users = require('./router/user');

const express = require('express');
const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Connection to the database
mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Using the routes
app.use('/tasks', tasks);
app.use('/auth', users);

app.listen(process.env.PORT , () => {
    console.log(`Server started on port ${process.env.PORT}`);
    }
);