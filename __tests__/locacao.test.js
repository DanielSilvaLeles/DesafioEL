const request = require('supertest');

const app = require('../src/server');

describe('Testes de locação de veiculo', () => {
  it('deve fazer o calculo de locação e retornar o valor do veiculo multiplacado por 2.', async () => {
    await request(app)
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

    const res = await request(app)
      .get('/locacao/simular/')
      .send({
        "placa": "QQQ2313",
        "qtd_horas": 2
      });
    expect(res.statusCode).toEqual(200);
    
    const {valorLocacao} = res.body;
    
    await request(app)
      .delete('/veiculo/')
      .send({placa: 'QQQ2313'});
   
    expect(valorLocacao).toEqual(240);
  });
});

describe('Testes de vistoria do veiculo', () => {
    it('deve fazer o calculo acrescentando 30% no valor para cada ocorrencia, no qual são 3 ocorrencias neste teste.', async () => {

      const res = await request(app)
        .get('/locacao/vistoriar/')
        .send({
            "placa": "QQQ2313",
            "valorLocacao": 100,
            "carroLimpo": true,
            "tanqueCheio": true,
            "amassados": true,
            "arranhoes": false
        });
      
      const {acrescimo, valorFinalLocacao} = res.body;
      
      expect(res.statusCode).toEqual(200);
      expect(acrescimo).toEqual(90);
      expect(valorFinalLocacao).toEqual(190);
    });
  
    it('deve fazer o calculo, porém deve retornar 0 no acrescimo e o valor da locação sem acrescimo.', async () => {

      const res = await request(app)
        .get('/locacao/vistoriar/')
        .send({
            "placa": "QQQ2313",
            "valorLocacao": 100,
            "carroLimpo": false,
            "tanqueCheio": false,
            "amassados": false,
            "arranhoes": false
        });
      
      const {acrescimo, valorFinalLocacao} = res.body;
      
      expect(res.statusCode).toEqual(200);
      expect(acrescimo).toEqual(0);
      expect(valorFinalLocacao).toEqual(100);
    });

});


