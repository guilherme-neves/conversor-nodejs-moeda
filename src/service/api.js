const axios = require("axios");

const api = axios.create({
  baseURL: "https://api.exchangeratesapi.io",
});

module.exports = api;
