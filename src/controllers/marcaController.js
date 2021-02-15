const Marca = require('../models/marca');

class MarcaController {

    constructor(){

    }

    async post (req, res) {
        try{
            const marca = await Marca.create(req.body);
            res.send({marca});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao incluir marca.'});

        }
    }

    async get (req,res) {
        const {placa} = req.body;
        const marca = await Marca.findOne({placa})
        res.send(marca)    
    }

    async delete (req,res) {
        try{
            const {placa} = req.body;
            const marca = await Marca.deleteOne({placa});
            res.send({message: 'Excluído com sucesso.'})
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao excluir marca.'});

        }
    }

    async put (req,res) {
        try{
            const marca = await Marca.updateOne(req.body);
            res.send({message: 'Atualizado com sucesso.'});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao atualizar marca.', message: err.message});

        }
    }

}

module.exports = new MarcaController();
