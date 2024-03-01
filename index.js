require("dotenv").config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const express = require('express');
const cors = require('cors');

// Swagger
const { swaggerDocument } = require("./utils/swagger");
const swaggerUi = require("swagger-ui-express");

// Auth
const { isLoggedIn } = require("./utils/authMiddleware");

// Routes
const tasks = require('./router/task');
const users = require('./router/user');
const projects = require('./router/project');

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument()));


let corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions))


// Connection to the database
mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Using the routes
app.use('/projects', projects);
// If you want to remove the protected routes, you can remove the isLoggedIn middleware from the tasks route.
app.use('/tasks', isLoggedIn , tasks);
app.use('/auth', users);

app.listen(process.env.PORT , () => {
    console.log(`Server started on port ${process.env.PORT}`);
    }
);