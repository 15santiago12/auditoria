const express = require('express');
const router = express.Router();
const examenesControlador = require('../controladores/ExamenesControler');

router.post('/',examenesControlador.AgregarExamen);
router.get('/', examenesControlador.ListaExamenes);
router.put('/:id', examenesControlador.EditarExamen);
router.delete('/:id', examenesControlador.EliminarExamen);



module.exports = router; 