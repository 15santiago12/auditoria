const express = require('express');
const router = express.Router();
const medicamentosControlador = require('../controladores/MedicamentosControler');

router.post('/',medicamentosControlador.AgregarMedicamento);
router.get('/', medicamentosControlador.ListaMedicamentos);
router.put('/:id', medicamentosControlador.EditarMedicamento);
router.delete('/:id', medicamentosControlador.EliminarMedicamento);



module.exports = router; 