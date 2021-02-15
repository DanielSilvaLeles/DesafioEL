
// Serviço de agendamento de um veículo calculando o valor final considerando a 
// categoria do veículo, valor hora, total de horas

const mongoose = require("../database.js")

// Model de Agendamento

const AgendamentoSchema =  mongoose.Schema({
  placa: {
    type: String,
    require: true
  },
  categoria: {
    type: String,
    require: true,
  },
  valorHora: {
    type: Number,
    require: true
  },
  qtdHoras: {
    type: Number,
    require: true
  },
  valorAgendamento: {
    type: Number,
    require: false
  }
});  
  
const Agendamento = mongoose.model('agendamentos', AgendamentoSchema);

module.exports = Agendamento