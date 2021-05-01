const express = require('express');
const router = express.Router();
const empleadosControlador = require('../controladores/EmpleadosControler');

router.post('/',empleadosControlador.AgregarEmpleado);
router.get('/', empleadosControlador.ListaEmpleados);
router.put('/:id', empleadosControlador.EditarEmpleado);
router.delete('/:id', empleadosControlador.EliminarEmpleado);



module.exports = router; 