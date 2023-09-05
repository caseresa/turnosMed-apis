const turnoCtrl = require('./../controllers/turno.controller');

//Manejador de rutas
const express = require('express');
const router = express.Router();

//Rutas para la gestion de especialidades
router.get('/', turnoCtrl.getTurnos);
router.post('/', turnoCtrl.createTurno);

module.exports = router;