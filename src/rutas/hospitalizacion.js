const express = require('express');
const router = express.Router();
const hospitalizacionControlador = require('../controladores/HospitalizacionControler');

router.post('/',hospitalizacionControlador.AgregarHospitalizacion);
router.get('/', hospitalizacionControlador.ListaHospitalizacion);
router.put('/:id', hospitalizacionControlador.EditarHospitalizacion);
router.delete('/:id', hospitalizacionControlador.EliminarHospitalizacion);



module.exports = router; 