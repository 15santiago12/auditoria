const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarUsuario = async (req, res) => {
        const {nombre, apellido, cedula, contacto, direccion, correo} = req.body;
        const NuevoUsuario = {nombre, apellido, cedula, contacto, direccion, correo};
        const Agrgar = await pool.query("INSERT INTO usuarios set ? ",[NuevoUsuario], (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send("datos exitosos")
            }
        });
}

exports.ListaUsuarios = async (req, res) =>{
        const usuario = await pool.query("SELECT * from usuarios", (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
}

exports.EditarUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, apellido, cedula, contacto, direccion, correo} = req.body;
        const Nuevo = {nombre, apellido, cedula, contacto, direccion, correo};
        const Editar = await pool.query('UPDATE usuarios SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El usuario ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarUsuario = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El usuario ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarUsuario = async (req, res) =>{
    try {
        const {cedula} = req.params;
        const BuscarUsuario = await pool.query("SELECT * from usuarios WHERE cedula = ?", [cedula]);
        res.status(200).json({BuscarUsuario});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
