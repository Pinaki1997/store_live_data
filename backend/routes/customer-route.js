const { getCustomerHistory, saveCustomerData,   } = require("../controllers/customer-controller");
const router = require("express").Router();

module.exports = (app, basePath) => {
	// Route for getting customer details history
	router.get("/history", getCustomerHistory);

	// handle customer in & customer out event 
	router.post("/event", saveCustomerData);

	// Use the base path passed from index.js
	app.use(`${basePath}/customer`, router); // Mount the router at the base path
};
