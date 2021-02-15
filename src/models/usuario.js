const mongoose = require('../database.js')
const bcrypt = require('bcrypt')

// Model de Usuario

const UsuarioSchema =  mongoose.Schema({
  login: {
    type: String,
    require: true,
    unique: true
  },
  senha: {
    type: String,
    require: true,
    select: false
  }
});  

// Criptografa a senha
 UsuarioSchema.pre('save', async function(next){
   const hash = await bcrypt.hash(this.senha, 10);
   this.senha = hash;

   next()
 })

const Usuario = mongoose.model('usuarios', UsuarioSchema);

module.exports = Usuario