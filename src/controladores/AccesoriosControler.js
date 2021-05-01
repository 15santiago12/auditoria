const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarAccesorio = async (req, res) => {
        const {nombre, precio, cantidad,tipo, marca, descripccion} = req.body;
        const NuevoAccesorio = {nombre, precio, cantidad, tipo, marca, descripccion};
        const Agregar = await pool.query("INSERT INTO accesorios set ? ",[NuevoAccesorio], (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send("datos exitosos")
            }
        });
}

exports.ListaAccesorios = async (req, res) =>{
        const accesortios = await pool.query("SELECT * from accesorios", (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
}

exports.EditarAccesorio = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, precio, cantidad,tipo, marca, descripccion} = req.body;
        const Nuevo = {nombre, precio, cantidad,tipo, marca, descripccion};
        const Editar = await pool.query('UPDATE accesorios SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El accesorio ha sido actualizad0"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarAccesorio = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM accesorios WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El accesorio ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarAccesorio = async (req, res) =>{
    try {
        const {id} = req.params;
        const BuscarAccesorio = await pool.query("SELECT * from accesorios WHERE id = ?", [id]);
        res.status(200).json({BuscarAccesorio});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
