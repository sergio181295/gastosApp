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

    nuevoUsuario.save(function (err, usuario) {
        res.send(utilidades.manejarError(err, usuario));
    });
});

// router.delete('/:id', (req, res, next) => {
//     db.tareas.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, result) => {
//         if (err) return next(err);

//         res.json(result);
//     });
// });

// router.put('/:id', (req, res, next) => {
//     const nuevaTarea = req.body;

//     db.tareas.update({ _id: mongojd.ObjectId(res.params.id) }, (err, tarea) => {
//         if (err) return next(err);

//         res.json(tarea);
//     });
// });

module.exports = router;

