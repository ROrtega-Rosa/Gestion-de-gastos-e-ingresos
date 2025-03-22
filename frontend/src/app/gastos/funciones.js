import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const mostrarGastos = (gastos) =>{

    axios.get('http://localhost:4000/api/gasto')
    .then((respuesta)=>{
        gastos(respuesta.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const mostrarUnGasto = (gastos,id) =>{

    axios.get(`http://localhost:4000/api/gasto/${id}`)
    .then((respuesta)=>{
        gastos(respuesta.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const eliminarGasto = (id) =>{
    axios.delete(`http://localhost:4000/api/gasto/${id}`)
    .then((respuesta)=>{
        console.log(respuesta)
        window.location.reload(true);
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const insertarGasto = (nuevoGasto)=>{

    axios.post('http://localhost:4000/api/gasto',{
        etiqueta:nuevoGasto.etiqueta,
        descripcion:nuevoGasto.descripcion,
        valor:nuevoGasto.valor,
        usuario_id:jwtDecode(localStorage.getItem("token")).id

    })
    .then((respuesta)=>{
        console.log(respuesta)
        window.location.reload(true);
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const actualizarGasto=(nuevoGasto, id) =>{
    axios.put(`http://localhost:4000/api/gasto/${id}`,{
        etiqueta:nuevoGasto.etiqueta,
        descripcion:nuevoGasto.descripcion,
        valor:nuevoGasto.valor,
        usuario_id:jwtDecode(localStorage.getItem("token")).id
    })
    .then((resultado)=>{
        console.log(resultado)
        window.location.reload(true);
    })
    .catch((err)=>{
        console.log(err)
    })
}