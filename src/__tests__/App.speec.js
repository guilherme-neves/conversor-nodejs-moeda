
const request = require('supertest');
const app = require('../index');

describe('Currency', () => {
  it('should be able to create a new user' , async () => {
    const response = await request(app).post('/users').send({
      name: "Guilherme",
      email: "gui@gui.com.br",
      password: "106518"
    });

    expect(response.body).toEqual(
      expect.objectContaining({
        name: "Guilherme",
        email: "gui@gui.com.br",
        password: "106518"
      }),
    );
  })


})
