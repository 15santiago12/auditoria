const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controladores/UsuarioControler');

router.post('/',usuarioControlador.AgregarUsuario);
router.get('/', usuarioControlador.ListaUsuarios);
router.put('/:id', usuarioControlador.EditarUsuario);
router.delete('/:id', usuarioControlador.EliminarUsuario);


module.exports = router; 