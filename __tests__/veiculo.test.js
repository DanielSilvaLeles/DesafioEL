const request = require('supertest');

const app = require('../src/server');

describe('Testes do veiculo', () => {
  it('deve criar um novo veiculo.', async () => {

    const res = await request(app)
      .post('/veiculo/')
      .send({
        "placa": "QQQ2313",
        "marca": "FORD",
        "modelo": "KA",
        "ano": 2020,
        "valorHora": 120,
        "combustivel": "GASOLINA",
        "capacidadePortaMalas": 230,
        "categoria": "BÁSICO"
      });

    expect(res.statusCode).toEqual(200);
  });

  it('deve retornar erro pois o veiculo já existe.', async () => {

    const res = await request(app)
      .post('/veiculo/')
      .send({
        "placa": "QQQ2313",
        "marca": "FORD",
        "modelo": "KA",
        "ano": 2020,
        "valorHora": 120,
        "combustivel": "GASOLINA",
        "capacidadePortaMalas": 230,
        "categoria": "BÁSICO"
      });

    expect(res.statusCode).toEqual(400);
  });
  
  it('deve retornar as informações do veiculo.', async () => {

    const res = await request(app)
      .get('/veiculo/')
      .send({placa: 'QQQ2313'});

    expect(res.statusCode).toEqual(200);
  });

  it('deve ocorrer erro ao consultar o veiculo.', async () => {

    const res = await request(app)
      .get('/veiculo/')
      .send({placa: 'RUM4242'});

    expect(res.statusCode).toEqual(400);
  });

  it('deve apagar as informações do veiculo.', async () => {

    const res = await request(app)
      .delete('/veiculo/')
      .send({placa: 'QQQ2313'});

    expect(res.statusCode).toEqual(200);
  });
});


