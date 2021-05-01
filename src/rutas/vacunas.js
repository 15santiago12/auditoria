const express = require('express');
const router = express.Router();
const vacunasControlador = require('../controladores/VacunasControler');

router.post('/',vacunasControlador.AgregarVacuna);
router.get('/', vacunasControlador.ListaVacunas);
router.put('/:id', vacunasControlador.EditarVacuna);
router.delete('/:id', vacunasControlador.EliminarVacuna);



module.exports = router; 