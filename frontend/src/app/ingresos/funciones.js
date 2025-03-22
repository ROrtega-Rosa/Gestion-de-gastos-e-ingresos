import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const mostrarIngresos = (ingresos) =>{

    axios.get('http://localhost:4000/api/ingreso')
    .then((respuesta)=>{
        ingresos(respuesta.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const mostrarUnIngreso = (ingresos,id) =>{

    axios.get(`http://localhost:4000/api/ingreso/${id}`)
    .then((respuesta)=>{
        ingresos(respuesta.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const eliminarIngreso = (id) =>{
    axios.delete(`http://localhost:4000/api/ingreso/${id}`)
    .then((respuesta)=>{
        console.log(respuesta)
        window.location.reload(true);
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const insertarIngreso = (nuevoIngreso)=>{

    axios.post('http://localhost:4000/api/ingreso',{
        etiqueta:nuevoIngreso.etiqueta,
        descripcion:nuevoIngreso.descripcion,
        valor:nuevoIngreso.valor,
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

export const actualizarIngreso=(nuevoIngreso, id) =>{
    axios.put(`http://localhost:4000/api/ingreso/${id}`,{
        etiqueta:nuevoIngreso.etiqueta,
        descripcion:nuevoIngreso.descripcion,
        valor:nuevoIngreso.valor,
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