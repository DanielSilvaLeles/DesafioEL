const Modelo = require('../models/modelo');

class modeloController {

    constructor(){

    }

    async post (req, res)  {
        try{
            const modelo = await Modelo.create(req.body);
            res.send({modelo});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao incluir modelo.'});

        }
    }

    async get (req,res) {
        const {placa} = req.body;
        const modelo = await Modelo.findOne({placa})
        res.send(modelo)    
    }

    async delete (req,res) {
        try{
            const {placa} = req.body;
            const modelo = await Modelo.deleteOne({placa});
            res.send({message: 'Excluído com sucesso.'})
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao excluir modelo.'});

        }
    }

    async put (req,res) {
        try{
            const modelo = await Modelo.updateOne(req.body);
            res.send({message: 'Atualizado com sucesso.'});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao atualizar modelo.', message: err.message});

        }
    }
}
module.exports = new modeloController();
