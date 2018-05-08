var mongoose = require('./_db').mongoose;
var usuario;

var usuarioSchema = mongoose.Schema({
    nombre : {type: String, required: true},
    apellido : {type: String, required: true},
    fechaCreacion: {type: Date, default: Date.now}
});

exports.crear = function(req) {
    var nuevoUsuario = new usuario({
        nombre : req.body.nombre,
        apellido : req.body.apellido
    });
    console.log(req);
    
    if(!nuevoUsuario.nombre)
        throw "error al crear, falta nombre";

    return nuevoUsuario.save(function(err, usuario) {
        return manejarError(err, usuario);
    });
};

exports.obtener = function(query, res) {
    return usuario.findById(query.id, function(err, usuario) {
        return manejarError(err, usuario);
    });    
};

exports.obtenerTodos = function(query, res) {
    return usuario.find({}, function(err, usuarios) {
        return manejarError(err, usuarios);
    });
}

var usuarioModel = mongoose.model('usuarios', usuarioSchema);
usuario = usuarioModel;

exports.usuario = usuario;
exports.mongoose = mongoose;

var manejarError = function(err, obj) {
    if(err){
        console.error(err);
        return err
    }else{
        return obj;
    }
}