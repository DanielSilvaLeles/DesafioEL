const mongoose = require('../database.js')
const bcrypt = require('bcrypt')

// Model de Operador

const OperadorSchema =  mongoose.Schema({
  matricula: {
    type: String,
    require: true,
    unique: true
  },
  nome: {
    type: String,   
    require: true
  }
});

const Operador = mongoose.model('operadores', OperadorSchema);

module.exports = Operador