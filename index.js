const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Creando la App de express
    const app = express();

// Cargando archivos dinamicos
    app.use(express.static('public'));

// Habilitando el Template Engine
    app.set('view engine', 'pug');

// Habilitando body parser
    app.use(bodyParse.urlencoded({extended: true}));

// Añadiendo carpeta que contiene las vistas
    app.set('views', path.join(__dirname, './views'));

// Incializando el servidor de express en el puerto 9999
    app.listen(9999);