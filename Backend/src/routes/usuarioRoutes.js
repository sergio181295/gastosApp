const router = require('express').Router();
var path = require('path');
const utilidades = require(path.join(__dirname, '..', '/base/utilidades'))
const db = require(path.join(__dirname, '..', '/models/usuario'));

router.get('/', (req, res, next) => {
    db.usuario.find({}, function (err, usuarios) {
        res.send(utilidades.manejarError(err, usuarios));
    });
    //res.render('index.html');
});

router.get('/:id', (req, res, next) => {
    db.usuario.findById(req.params.id, function (err, usuario) {
        res.send(utilidades.manejarError(err, usuario));
    });   
});

router.post('/', (req, res, next) => {
    // if (!nuevaTarea.nombre) {
    //     res.status(400).json({
    //         error: 'Falta parametro nombre'
    //     });
    // }
    var nuevoUsuario = new db.usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido
    });

    if (!nuevoUsuario.nombre)
        throw "error al crear, falta nombre";

    console.log(nuevoUsuario);
    
    nuevoUsuario.save(function (err, usuario) {
        console.log(err);
        console.log(usuario);
        
        res.send(utilidades.manejarError(err, usuario));
    });
});

router.delete('/:id', (req, res, next) => {
    db.usuario.findByIdAndRemove(req.params.id, (err, usuario) => {
        if (err) res.status(500).send(err);

        res.status(200).send(usuario);
    });
});

router.put('/:id', (req, res, next) => {
    const nuevoUsuario = req.body;

    db.usuario.findByIdAndUpdate(req.params.id, nuevoUsuario, {new: true}, (err, usuario) => {
        if (err) res.status(500).send(err);

        res.status(200).send(usuario);
    });
});

module.exports = router;

