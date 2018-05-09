var mongoose = require('./_db').mongoose;
var usuario;

var usuarioSchema = mongoose.Schema({
    nombre : {type: String, required: true},
    apellido : {type: String, required: true},
    fechaCreacion: {type: Date, default: Date.now}
});

var usuarioModel = mongoose.model('usuarios', usuarioSchema);
usuario = usuarioModel;

exports.usuario = usuario;