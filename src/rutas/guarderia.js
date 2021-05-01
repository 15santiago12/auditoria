const express = require('express');
const router = express.Router();
const guarderiaControlador = require('../controladores/GuarderiaControler');

router.post('/',guarderiaControlador.AgregarGuarderia);
router.get('/', guarderiaControlador.ListaGuarderia);
router.put('/:id', guarderiaControlador.EditarGuarderia);
router.delete('/:id', guarderiaControlador.EliminarGuarderia);



module.exports = router; 