const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarExamen = async (req, res) => {
        const {tipoExamen, precio, descripccion, tiempoResultados, fechaToma} = req.body;
        const NuevoExamen = {tipoExamen, precio, descripccion, tiempoResultados, fechaToma};
        const Agrgar = await pool.query("INSERT INTO examenes set ? ",[NuevoExamen], (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send("datos exitosos")
            }
        });
}

exports.ListaExamenes = async (req, res) =>{
        const examenes = await pool.query("SELECT * from examenes", (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
}

exports.EditarExamen = async (req, res) => {
    try {
        const {id} = req.params;
        const {tipoExamen, precio, descripccion, tiempoResultados, fechaToma} = req.body;
        const Nuevo = {tipoExamen, precio, descripccion, tiempoResultados, fechaToma};
        const Editar = await pool.query('UPDATE examenes SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El examen ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarExamen = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM examenes WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El examen ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}


