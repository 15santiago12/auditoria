const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarServicio = async (req, res) => {

        const {tipoServicio, nombreMascota, nombreDueno, contacto, direccion} = req.body;
        const NuevoServicio = {tipoServicio, nombreMascota, nombreDueno, contacto, direccion};
        const Agrgar = await pool.query("INSERT INTO servicios set ? ",[NuevoServicio], (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send("datos exitosos")
            }
        });
}

exports.ListaServicios = async (req, res) =>{
        const servicios = await pool.query("SELECT * from servicios", (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
}

exports.EditarServicio = async (req, res) => {
    try {
        const {id} = req.params;
        const {tipoServicio, nombreMascota, nombreDueno, contacto, direccion} = req.body;
        const Nuevo = {tipoServicio, nombreMascota, nombreDueno, contacto, direccion};
        const Editar = await pool.query('UPDATE servicios SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El servicio ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarServicio = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM servicios WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El servicio ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarServicio = async (req, res) =>{
    try {
        const {id} = req.params;
        const BuscarServicio = await pool.query("SELECT * from servicios WHERE id = ?", [id]);
        res.status(200).json({BuscarServicio});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
