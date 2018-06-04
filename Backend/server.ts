import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';

import  router  from "./src/routes/v1";

//INICIAR EXPRESS
const app = express();

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
router(app);

//INICIAR SERVIDOR
let puerto = 8000;
app.set('port', puerto);

let server = app.listen(puerto, () => {
    console.log('servidor en puerto ' + app.get('port'));
});

export default server;