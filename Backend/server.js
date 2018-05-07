const express = require('express');
const ejs = require('ejs');//modulo para cargar html al cliente desde el servidor
const cors = require('cors');//modulo para crear servidor cliente
const router = require('./src/routes/routes');//modulo de rutas
const path = require('path');

const app = express();
let puerto = 10000;
//CONFIGURACION
app.set('views', path.join(__dirname, '/src/views'));//indicar al servidor donde esta las vistas
app.set('port', puerto);
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/src/views")));

//MIDDLEWARES = FUNCIONES QUE SE EJECUTAN ANTES DE RECIBIR INFORMACION DEL CLIENTE
app.use(cors());
app.use(express.json());//express.json() = body parser = modulo para manipular json
app.use(express.urlencoded({extended: false}));//modulo para recibir datos a traves de la url

//RUTAS
app.use('/tareas', router);

app.listen(puerto, () => {
    console.log('servidor en puerto '+ app.get('port'));
});