const request = require('supertest');

const app = require('../src/server');

describe('Testes de acesso a aplicação.', () => {
  it('deve fazer login na aplicação.', async () => {
    const res = await request(app)
      .post('/acesso/criarUsuario/')
      .send({
        "login": "33493257007",
        "senha": "123"
      });
    
    expect(res.statusCode).toEqual(200);
  });

  it('deve apagar o usuario da aplicação.', async () => {
    const res = await request(app)
      .delete('/acesso/')
      .send({
        "login": "33493257007"
      });
    
    expect(res.statusCode).toEqual(200);

  });
});
