const Veiculo = require('../models/veiculo');

class VeiculoController {

    constructor(){

    }

    async post (req, res) {
        try{
            const veiculo = await Veiculo.create(req.body);
            res.send({veiculo});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao incluir veiculo.'});
        }
    }

    async get(req,res) {
        try{
            const {placa} = req.body;
            const veiculo = await Veiculo.findOne({placa})
            if (!veiculo)
                return res.status(400).send({error: 'Veiculo não encontrado.'});
            res.send(veiculo)    
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao consultar veiculo.'});
        }
    }

    async getAll(req,res) {
        try{
            const veiculo = await Veiculo.findOne()
            if (!veiculo)
                return res.status(400).send({error: 'Não existem veiculos cadastrados.'});
            res.send(veiculo)    
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao consultar veiculo.'});
        }
    }

    async delete(req,res) {
        try{
            const {placa} = req.body;
            const veiculo = await Veiculo.deleteOne({placa});
            res.send({message: 'Excluído com sucesso.'})
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao excluir veiculo.'});

        }
    }

    async put(req,res) {
        try{
            const veiculo = await Veiculo.updateOne(req.body);
            res.send({message: 'Atualizado com sucesso.'});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao atualizar veiculo.', message: err.message});

        }
    }
}

module.exports = new VeiculoController();
