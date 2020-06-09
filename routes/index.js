// Rutas express
const express = require('express');
const router = express.Router();
const liquidacionController = require('./controllers/liquidacionController')

module.exports = function() {
    router.get('/datos', liquidacionController.formularioDatos);
    router.post('/liquidacion', liquidacionController.calcularliquidacion);
}