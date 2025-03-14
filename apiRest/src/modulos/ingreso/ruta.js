const express = require ('express');

const router = express.Router();
const respuesta = require('../../red/respuestas');
const controlador = require('./index');

//select

    const todos = async (req, res, next) =>{
        try{
            const items= await controlador.todos();
            respuesta.success(req,res,items,200);

        }catch(err){
            next(err);
        }
    }

// select uno
    const uno = async (req, res, next)=>{
        try{
            const items = await controlador.uno(req.params.id);
            respuesta.success(req, res, items, 200);
        }catch(err){
            next(err)
        }
    }
// agregar

const agregar = async (req, res, next)=>{
    try{
        const items = await controlador.agregar(req.body);
        respuesta.success(req,res, "se agrega un registro",200)
    }catch(err){
        next(err)
    }

}
//actualizar
 const actualizar = async (req, res, next) =>{
    try{
        const item = await controlador.actualizar(req.body, req.params.id);
        respuesta.success(req, res, "se actualiza registro", 200)
    }catch(err){
        next(err)
    }
 }

 //eliminar

 const eliminar = async (req, res, next)=>{
    try{
        const item = await controlador.eliminar(req.params.id);
        respuesta.success(req, res, "se eliminó un registro", 200)
    }catch(err){
        next(err);
    }
 }

    //rutas
    router.get('/',todos);
    router.get('/:id', uno);
    router.put('/:id', actualizar);
    router.delete('/:id', eliminar);
    router.post('/', agregar);

    module.exports= router;