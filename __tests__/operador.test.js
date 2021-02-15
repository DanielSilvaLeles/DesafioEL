const request = require('supertest');

const app = require('../src/server');

describe('Testes do operador', () => {
  it('deve criar um novo operador.', async () => {

    const res = await request(app)
      .post('/operador/')
      .send({
        "matricula": "123456",
        "nome": "JOAO DA SILVA OPERADOR"
      });

    expect(res.statusCode).toEqual(200);
  });

  it('deve retornar erro pois o operador já existe.', async () => {

    const res = await request(app)
      .post('/operador/')
      .send({
        "matricula": "123456",
        "nome": "JOAO DA SILVA OPERADOR"
      });

    expect(res.statusCode).toEqual(400);
  });
  
  it('deve retornar as informações do operador.', async () => {

    const res = await request(app)
      .get('/operador/')
      .send({matricula: '123456'});

    expect(res.statusCode).toEqual(200);
  });

  it('deve ocorrer erro ao consultar o operador.', async () => {

    const res = await request(app)
      .get('/operador/')
      .send({matricula: '111111'});

    expect(res.statusCode).toEqual(400);
  });

  it('deve apagar as informações do operador.', async () => {

    const res = await request(app)
      .delete('/operador/')
      .send({matricula: '123456'});

    expect(res.statusCode).toEqual(200);
  });
});


