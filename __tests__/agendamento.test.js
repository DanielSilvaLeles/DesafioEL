const request = require('supertest');

const app = require('../src/server');

describe('Testes de agendamento', () => {
  it('deve criar um novo agendamento para o veiculo e calcular o valor do agendamento em 250.', async () => {

    const res = await request(app)
      .post('/agendamento/')
      .send({
        "placa": "QQQ2313",
        "categoria": "BASICO",
        "qtdHoras": 5,
        "valorHora": 50
      });
      
    const {valorAgendamento} = res.body;
    
    expect(res.statusCode).toEqual(200);
    expect(valorAgendamento).toEqual(250);
  });
  
  it('deve retornar as informações do agendamento pela placa.', async () => {

    const res = await request(app)
      .get('/agendamento/porPlaca')
      .send({placa: 'QQQ2313'});


    expect(res.statusCode).toEqual(200);
  });

  it('deve ocorrer erro ao consultar o agendamento.', async () => {

    const res = await request(app)
      .get('/agendamento/porPlaca')
      .send({placa: 'RUM4242'});

    expect(res.statusCode).toEqual(400);
  });

  it('deve apagar as informações do agendamento.', async () => {

    const res = await request(app)
      .delete('/veiculo/')
      .send({placa: 'QQQ2313'});

    expect(res.statusCode).toEqual(200);
  });
});


