const request = require('supertest');

const app = require('../src/server');


describe('Testes do cliente', () => {
  it('deve criar um novo cliente.', async () => {

    const res = await request(app)
      .post('/cliente/')
      .send({
        "nome": "TESTE UNITARIO",
        "cpf": "33493257007",
        "aniversario": "1985-01-01T00:00:00.000Z",
        "endereco": {
            "cep": "222000",
            "logradouro": "LOGTESTE"
        }
      });

    expect(res.statusCode).toEqual(200);
  });

  it('deve retornar erro pois o cliente já existe.', async () => {

    const res = await request(app)
      .post('/cliente/')
      .send({
        "nome": "TESTE UNITARIO",
        "cpf": "33493257007",
        "aniversario": "1985-01-01T00:00:00.000Z",
        "endereco": {
            "cep": "222000",
            "logradouro": "LOGTESTE"
        }
      });

    expect(res.statusCode).toEqual(400);
  });

  it('deve retornar erro pois o CPF é inválido.', async () => {

    const res = await request(app)
      .post('/cliente/')
      .send({
        "nome": "TESTE UNITARIO",
        "cpf": "12345678900",
        "aniversario": "1985-01-01T00:00:00.000Z",
        "endereco": {
            "cep": "222000",
            "logradouro": "LOGTESTE"
        }
      });

    expect(res.statusCode).toEqual(400);
  });

  it('deve retornar as informações do cliente.', async () => {

    const res = await request(app)
      .get('/cliente/')
      .send({cpf: '33493257007'});

    expect(res.statusCode).toEqual(200);
  });

  it('deve ocorrer erro ao consultar o cliente.', async () => {

    const res = await request(app)
      .get('/cliente/')
      .send({cpf: '01489183615'});

    expect(res.statusCode).toEqual(400);
  });

  it('deve apagar as informações do cliente.', async () => {

    const res = await request(app)
      .delete('/cliente/')
      .send({cpf: '33493257007'});

    expect(res.statusCode).toEqual(200);
  });
});
