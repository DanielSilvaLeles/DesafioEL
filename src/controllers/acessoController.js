
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const Cliente = require('../models/cliente');
const Operador = require('../models/operador');
const Utils = require('../utils');

class AcessoController {

    constructor(){
    }

    // Cria usuario para acesso ao sistema
    async criarUsuario (req, res)  {
        try{
            var usuario = new Usuario();
            const {login} = req.body;

            // Valida CPF
            if (!Utils.validarCPF(login))
                return res.status(400).send({error: 'CPF inválido.'});
            
            // Verifica a existencia do usuario
            usuario = await Usuario.findOne({login})

            if (usuario)
                return res.status(400).send({error: 'Usuário já existente.'});

            // Cria o usuario no banco
            usuario = await Usuario.create(req.body);

            // Retorna os dados do usuario
            usuario.senha = undefined;
            res.send({usuario});
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao incluir usuario.', message: err.message});

        }
    }

    async validarLogin (req,res) {
        try {        
            const {login, senha} = req.body;
            const usuario = await Usuario.findOne({login}).select('+senha')

            // Verifica a existencia do Login
            if (!usuario)
                return res.status(401).send({error: 'Login não encontrado.'});
            
            // Valida a senha do usuario
            if (!await bcrypt.compare(senha, usuario.senha))
                return res.status(401).send({error: 'Senha inválida.'});

            // Valida o CPF, caso correto, procura cliente.
            if (validarCPF(login)){
                const cliente = await Cliente.findOne({login});
                res.send({cliente});
            }
            else{
                
                const operador = await Operador.findOne({login});
                if (operador)
                    res.send({operador}); 
                else
                    res.send({error: "Operador nao encontrato."})
            }
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao validar login.', message: err.message});
        }
    }

    async delete(req,res) {
        try{
            const {login} = req.body;
            await Usuario.deleteOne({login});
            res.send({message: 'Excluído com sucesso.'})
        }
        catch(err) {
            return res.status(400).send({error: 'Erro ao excluir operador.'});

        }
    }


}

module.exports = new AcessoController();
