const express = require('express');
const app = express();
const ejs = require('ejs');//modulo para cargar html al cliente desde el servidor
const cors = require('cors');//modulo para crear servidor cliente
const usuarioRouter = require('./src/routes/usuarioRoutes');//modulo de rutas
const path = require('path');
//paquete para manipulacion de json
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let puerto = 8000;

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
app.use('/usuarios', usuarioRouter);

app.listen(puerto, () => {
    console.log('servidor en puerto '+ app.get('port'));
});