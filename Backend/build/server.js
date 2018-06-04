"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
var v1_1 = require("./src/routes/v1");
//INICIAR EXPRESS
var app = express();
//CONECTAR A MONGO
mongoose.connect('mongodb://localhost:27017/gastosApp', function (err) {
    if (err)
        throw err;
    console.log('Conectado a MongoDB!');
});
// express middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
//AGREGAR RUTAS
v1_1.default(app);
//INICIAR SERVIDOR
var puerto = 8000;
app.set('port', puerto);
var server = app.listen(puerto, function () {
    console.log('servidor en puerto ' + app.get('port'));
});
exports.default = server;
//# sourceMappingURL=server.js.map