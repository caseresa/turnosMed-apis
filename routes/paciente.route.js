const pacienteCtrl = require('./../controllers/paciente.controller');

//Manejador de rutas
const express = require('express');
const router = express.Router();

//Rutas para la gestion de especialidades
router.get('/', pacienteCtrl.getPacientes);
router.post('/', pacienteCtrl.createPaciente);

module.exports = router;