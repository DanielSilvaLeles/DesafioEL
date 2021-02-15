// O cadastro de cliente deverá ter os campos: ID, NOME, CPF, ANIVERSARIO, 
// ENDEREÇO (CEP, logradouro, número, complemento, cidade e estado)

const mongoose = require("../database.js")

// Model de Usuario

const EnderecoSchema =  mongoose.Schema({
  cep: {
    type: String,
    require: true
  },
  logradouro: {
    type: String,
    require: false,
  },
  numero: {
    type: String,
    require: false
  },
  complemento: {
    type: String,
    require: false
  },
  cidade: {
    type: String,
    require: false
  },
  estado: {
    type: String,
    require: false
  }
});  

const ClienteSchema =  mongoose.Schema({
    nome: {
      type: String,
      require: true
    },
    cpf: {
      type: Number,
      require: true,
      unique: true
    },
    aniversario: {
      type: Date,
      require: true
    },
    endereco: {
      type: EnderecoSchema,
      require: true
    }
  });
  
const Cliente = mongoose.model('clientes', ClienteSchema);

module.exports = Cliente