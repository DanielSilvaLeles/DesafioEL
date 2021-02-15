const Operador = require('../models/operador');

class OperadorController {

    constructor(){

    }

    async post(req, res) {
        try{
            const operador = await Operador.create(req.body);
            res.send({operador});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao incluir operador.'});
        }
    }

    async get(req,res) {
        try{
            const {matricula} = req.body;
            const operador = await Operador.findOne({matricula})
            if (!operador)
                return res.status(400).send({error: 'Operador não encontrado.'});
            res.send(operador)    
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao consultar operador.'});
        } 
    }

    async getAll(req,res) {
        try{
            const operador = await Operador.find()
            if (!operador)
                return res.status(400).send({error: 'Não existem operadores cadastrados.'});
            res.send(operador)   
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao consultar operador.'});
        } 
    }

    async delete(req,res) {
        try{
            const {matricula} = req.body;
            const operador = await Operador.deleteOne({matricula});
            res.send({message: 'Excluído com sucesso.'})
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao excluir operador.'});

        }
    }

    async put (req,res) {
        try{
            const operador = await Operador.updateOne(req.body);
            res.send({message: 'Atualizado com sucesso.'});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao atualizar operador.'});

        }
    }
}

module.exports = new OperadorController();
