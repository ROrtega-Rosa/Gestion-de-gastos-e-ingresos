const express = require ('express');
const router = express.Router();
const respuesta = require('../../red/respuestas');
const controlador = require('./index');




//select id login
const login = async (req, res,next)=>{
    try{
    const token = await controlador.login(req.body.email, req.body.password);
   
      respuesta.success(req,res,token, 200);
    }catch(err){
  
      next(err);
    }
     
  }

  
//rutas

    router.post('/login', login)

  module.exports= router;