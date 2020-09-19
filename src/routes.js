const express = require("express");
const currency = require("./controllers/currency");
const user = require("./controllers/user");

const routes = express.Router();

routes.post("/currency/:id", currency.currencyConversion);
routes.get("/currency/:id", currency.listTransactionForUser);

routes.post("/users", user.create);

module.exports = routes;
