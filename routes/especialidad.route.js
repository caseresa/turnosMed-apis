const especialidadCtrl = require('./../controllers/especialidad.controller');

//Manejador de rutas
const express = require('express');
const router = express.Router();

//Rutas para la gestion de especialidades
router.get('/', especialidadCtrl.getEspecialidades);
router.post('/', especialidadCtrl.createEspecialidad);

module.exports = router;