
// Serviço de agendamento de um veículo calculando o valor final considerando a 
// categoria do veículo, valor hora, total de horas

const Agendamento = require('../models/agendamento');

class AgendamentoController {

    constructor(){
    }

    // Realiza agendamento
    async post(req, res) {
        try{
            var agendamento = Agendamento();
            agendamento = req.body;

            agendamento.valorAgendamento = agendamento.valorHora * agendamento.qtdHoras;

            agendamento = await Agendamento.create(agendamento);
            res.send(agendamento);         
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao incluir agendamento.', message: err.message});

        }
    }

    async getAll(req,res) {
        try{
            const agendamento = await Agendamento.find()
            if (!agendamento)
                return res.status(400).send({error: 'Não existem agendamentos cadastrados.'});

            return res.send(agendamento) 
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao consultar agendamento.'});

        }  
    }

    async getById(req,res) {
        try{
            const {id} = req.body;
            const agendamento = await Agendamento.findOne({id})
            if (!agendamento)
                return res.status(400).send({error: 'Agendamento não encontrado.'});

            return res.send(agendamento)    
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao consultar agendamento.'});

        }
    }

    async getByPlaca(req,res) {    
        try{
            const {placa} = req.body;
            const agendamento = await Agendamento.findOne({placa})
            if (!agendamento)
                return res.status(400).send({error: 'Agendamento não encontrado.'});

            return res.send(agendamento)    
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao consultar agendamento.'});

        }
    }

    async delete(req,res) {
        try{
            const {id} = req.body;
            await Agendamento.deleteOne({id});
            res.send({message: 'Excluído com sucesso.'})
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao excluir agendamento.'});

        }
    }

    async put(req,res) {
        try{
            await Agendamento.updateOne(req.body);
            res.send({message: 'Atualizado com sucesso.'});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao atualizar agendamento.', message: err.message});

        }
    }

}

module.exports = new AgendamentoController();
