const express = require('express');
const router = express.Router();
const serviciosControlador = require('../controladores/ServiciosControler');

router.post('/',serviciosControlador.AgregarServicio);
router.get('/', serviciosControlador.ListaServicios);
router.put('/:id', serviciosControlador.EditarServicio);
router.delete('/:id', serviciosControlador.EliminarServicio);



module.exports = router; 