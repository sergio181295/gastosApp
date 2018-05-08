const router = require('express').Router();
var path = require('path');

//CONECTAR A BASE DE DATOS
const db = require(path.join(__dirname, '..', '/models/usuario'));

router.get('/', (req, res, next) => {
    db.obtenerTodos(req.query)
    .then(function(ok) {
        res.send(ok);
    });
    //res.render('index.html');
});

// router.get('/:id', (req, res, next) => {
//     db.tareas.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, tarea) => {
//         if (err) return next(err);

//         res.json(tarea);
//     });
// });

router.post('/', (req, res, next) => {
    // if (!nuevaTarea.nombre) {
    //     res.status(400).json({
    //         error: 'Falta parametro nombre'
    //     });
    // }

    res.send(db.crear(req));
    // .then(function(ok) {
    //     res.send(ok); 
    // });
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