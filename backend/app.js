const express = require('express');
const app = express();
const { exceptionHandling } = require('./middleware/exceptionHandling');
const cors = require("cors");
const { RESPONSE_CODES, RESPONSES } = require("./utils/ResponseCodes");
const routesConfig = require('./helpers/routesConfig'); // Import routesConfig

// Allow Cross-Origin requests
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));

// Middleware to define a route for the root URL
app.get('/', (req, res) => {
  res.status(RESPONSE_CODES.SUCCESS).send({ ...RESPONSES.SUCCESS })
});

// Set base path for routes
const basePath = routesConfig.basePath; // Use basePath from routesConfig

require("./routes/customer-route")(app, basePath);

// Exception handling middleware
app.use(exceptionHandling);

module.exports = app;