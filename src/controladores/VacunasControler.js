const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarVacuna = async (req, res) => {
        const {nombreMascota, nombreDueno, vacuna, fechaAplicacion, fechaProxima, contacto, direccion} = req.body;
        const NuevaVacuna = {nombreMascota, nombreDueno, vacuna, fechaAplicacion, fechaProxima, contacto, direccion};
        const Agrgar = await pool.query("INSERT INTO vacunas set ? ",[NuevaVacuna], (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send("datos exitosos")
            }
        });
}

exports.ListaVacunas = async (req, res) =>{
        const servicios = await pool.query("SELECT * from vacunas", (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
}

exports.EditarVacuna = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombreMascota, nombreDueno, vacuna, fechaAplicacion, fechaProxima, contacto, direccion} = req.body;
        const Nuevo = {nombreMascota, nombreDueno, vacuna, fechaAplicacion, fechaProxima, contacto, direccion};
        const Editar = await pool.query('UPDATE vacunas SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El registro de la vacuna ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarVacuna = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM vacunas WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El registro de vacunacion ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarVacuna = async (req, res) =>{
    try {
        const {id} = req.params;
        const BuscarVacuna = await pool.query("SELECT * from vacunas WHERE id = ?", [id]);
        res.status(200).json({BuscarVacuna});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
