const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/dbdesafiolocaliza", {
  //useMongoClient: true
}).then(() => {
  //console.log("Conectado ao banco de dados...");

}).catch((err) => {
  console.log("Erro ao conectar ao banco de dados." + err);
})

module.exports = mongoose;
