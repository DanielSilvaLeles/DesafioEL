const mongoose = require('../database.js')
const bcrypt = require('bcrypt')

// Model de Marca

const MarcaSchema =  mongoose.Schema({
  marca: {
    type: String,
    require: true,
    unique: true
  }
});

const Marca = mongoose.model('marcas', MarcaSchema);

module.exports = Marca