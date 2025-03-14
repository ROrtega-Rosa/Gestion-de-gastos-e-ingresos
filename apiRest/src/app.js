const config = require('./config');
const express = require ('express');
const morgan = require ('morgan');
const cors = require('cors');
const usuario = require('./modulos/usuario/ruta');
const gasto = require('./modulos/gasto/ruta');
const ingreso = require('./modulos/ingreso/ruta');
const auth = require('./modulos/auth/ruta');
//express
const app = express();

//Middleware
app.use(cors());
app.use(morgan('dev'));
// fixing "413 Request Entity Too Large" errors
app.use(express.json({limit: "50mb", extended: true}))
app.use(express.urlencoded({limit: "50mb",parameterLimit: 1000000 ,extended: true}))

//configuration
app.set('port', config.app.port)

//routes

app.use('/api/usuario',usuario);
app.use('/api/ingreso',ingreso);
app.use('/api/gasto',gasto);
app.use('/api/auth',auth);
module.exports= app