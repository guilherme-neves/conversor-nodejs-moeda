const connection = require("../database/connections");

module.exports = {
  async create(request, response) {
    const { name, password, email } = request.body;
    try {
      await connection("users").insert({
        name,
        password,
        email,
      });

      response.json({
        name,
        password,
        email
      });
    } catch (error) {
      response.status(404).json(error);
    }
  },
};
