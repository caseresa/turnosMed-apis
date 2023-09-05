const medicoCtrl = require('./../controllers/medico.controller');

//Manejador de rutas
const express = require('express');
const router = express.Router();

//Rutas para la gestion de especialidades
router.get('/', medicoCtrl.getMedicos);
router.post('/', medicoCtrl.createMedico);

module.exports = router;