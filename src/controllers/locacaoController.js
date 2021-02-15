const Veiculo = require('../models/veiculo');

class LocacaoController {

    constructor(){

    }

    // Disponibilizar um serviço de simulação de locação com base no veículo selecionado, 
    // valor hora do veículo, total de horas.

    async simularLocacao(req,res) {
        try{
            const {placa, qtd_horas} = req.body;

            // Busca o valor da hora do veiculo
            const veiculo = await Veiculo.findOne({placa})

            const valorLocacao = veiculo.valorHora * qtd_horas

            res.send({placa: placa, valorLocacao: valorLocacao})
            
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao calcular locação.', message: err.message});

        }
    }

    // Check-List para vistoria na devolução do veículo considerando os itens: 
    // CARRO LIMPO, TANQUE CHEIO, AMASSADOS e ARRANHÕES, considerando um custo adicional 
    // de 30% do valor da locação em cada ocorrência

    async vistoriar(req,res) {
        try{
            const {valorLocacao, carroLimpo, tanqueCheio, amassados, arranhoes} = req.body;
            const valorAcrescimo = valorLocacao * 0.3;

            var qtdAcrescimo = 0;

            if (carroLimpo) qtdAcrescimo += 1;        
            if (tanqueCheio) qtdAcrescimo += 1;
            if (amassados) qtdAcrescimo += 1;
            if (arranhoes) qtdAcrescimo += 1;

            var valorAcrescimoTotal = qtdAcrescimo * valorAcrescimo

            res.send({
                acrescimo: valorAcrescimoTotal, 
                valorFinalLocacao: valorLocacao + valorAcrescimoTotal 
            });
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao calcular vistoria.', message: err.message});

        }
    }
}
module.exports = new LocacaoController();
