
// Cadastro de veículos informando os campos: PLACA, MARCA, MODELO, ANO, VALOR HORA, 
// COMBUSTÍVEL (gasolina, álcool, diesel), LIMITE PORTA MALAS, CATEGORIA (básico, completo, luxo)

const mongoose = require("../database.js")

// Model de Veiculo

const VeiculoSchema =  mongoose.Schema({
  placa: {
    type: String,
    require: true,
    unique: true
  },
  marca: {
    type: String,
    require: true,
  },
  modelo: {
    type: String,
    require: true
  },
  ano: {
    type: String,
    require: true
  },
  valorHora: {
    type: Number,
    require: false
  },
  combustivel: {
    type: String,
    require: true
  },
  capacidadePortaMalas: {
    type: String,
    require: true
  },
  categoria: {
    type: String,
    require: true
  }

});  
  
const Veiculo = mongoose.model('veiculos', VeiculoSchema);

module.exports = Veiculo