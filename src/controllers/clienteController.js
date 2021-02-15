const Cliente = require('../models/cliente');
const Utils = require('../utils');

class ClienteController {

    constructor(){

    }

    async get(req,res) {
        try {
            const {cpf} = req.body;
            const cliente = await Cliente.findOne({cpf});
            if (!cliente)
                return res.status(400).send({error: 'Cliente não encontrato.'});

            return res.status(200).send(cliente);
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao buscar cliente.'});
    
        }
    }

    async getAll(req,res) {
        try {
            const cliente = await Cliente.find();
            if (!cliente)
                return res.status(400).send({error: 'Não existem clientes cadastrados.'});

            return res.status(200).send(cliente);
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao buscar cliente.'});
    
        }
    }

    async post (req, res) {
        try{
            const {cpf} =  req.body

            let cliente = await Cliente.findOne({cpf});
            if (cliente)
                return res.status(400).send({error: 'Cliente já cadastrado.'});

            if (!Utils.validarCPF(cpf))
                return res.status(400).send({message: 'CPF inválido'})

            cliente = await Cliente.create(req.body);
            res.status(200).send({cliente});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao incluir cliente.'});
    
        }
    }
    
    async delete(req,res) {
        try{
            const {cpf} = req.body;
            const cliente = await Cliente.deleteOne({cpf});
            res.send({message: 'Excluído com sucesso.'})
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao excluir cliente.'});

        }
    }

    async put (req,res) {
        try{
            const cliente = await Cliente.updateOne(req.body);
            res.send({message: 'Atualizado com sucesso.'});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao excluir cliente.'});

        }
    }

}

module.exports = new ClienteController();
