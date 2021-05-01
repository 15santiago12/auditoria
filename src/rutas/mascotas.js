const express = require('express');
const router = express.Router();
const mascotaControlador = require('../controladores/MascotaControler');

router.post('/',mascotaControlador.AgregarMascota);
router.get('/', mascotaControlador.ListaMascotas);
router.put('/:id', mascotaControlador.EditarMascota);
router.delete('/:id', mascotaControlador.EliminarMascota);



module.exports = router; 