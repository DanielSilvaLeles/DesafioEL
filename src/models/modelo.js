const mongoose = require('../database.js')
const bcrypt = require('bcrypt')

// Model de Modelo

const ModeloSchema =  mongoose.Schema({
  modelo: {
    type: String,
    require: true,
    unique: true
  }
});

const Modelo = mongoose.model('modelos', ModeloSchema);

module.exports = Modelo