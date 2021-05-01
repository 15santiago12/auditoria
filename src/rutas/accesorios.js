const express = require('express');
const router = express.Router();
const accesoriosControlador = require('../controladores/AccesoriosControler');

router.post('/',accesoriosControlador.AgregarAccesorio);
router.get('/', accesoriosControlador.ListaAccesorios);
router.put('/:id', accesoriosControlador.EditarAccesorio);
router.delete('/:id', accesoriosControlador.EliminarAccesorio);



module.exports = router; 