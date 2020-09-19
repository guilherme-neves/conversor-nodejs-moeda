const connection = require("../database/connections");

module.exports = {
  async create(request, response) {
    const { name, password, email } = request.body;
    try {
     const resp =  await connection("users").insert({
        name,
        password,
        email,
      });

      response.json({
        id: resp[0],
        name,
        password,
        email
      });
    } catch (error) {
      response.status(404).json(error);
    }
  },
};
