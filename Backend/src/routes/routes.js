const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('meanApp', ['tareas']);

router.get('/', (req, res, next) => {
    // db.tareas.find((err, tareas) => {
    //     if (err) {
    //         //return next(err);
    //     }
    //     //res.json(tareas);
    // });
    res.render('index.html');
});

router.get('/:id', (req, res, next) => {
    db.tareas.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, tarea) => {
        if (err) return next(err);

        res.json(tarea);
    });
});

router.post('/', (req, res, next) => {
    const nuevaTarea = req.body;

    if (!nuevaTarea.nombre) {
        res.status(400).json({
            error: 'Falta parametro nombre'
        });
    }

    db.tar.save(nuevaTarea, (err, tarea) => {
        if (err) return next(err);

        res.json(nuevaTarea);
    });
});

router.delete('/:id', (req, res, next) => {
    db.tareas.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, result) => {
        if (err) return next(err);

        res.json(result);
    });
});

router.put('/:id', (req, res, next) => {
    const nuevaTarea = req.body;

    db.tareas.update({ _id: mongojd.ObjectId(res.params.id) }, (err, tarea) => {
        if (err) return next(err);

        res.json(tarea);
    });
});

module.exports = router;