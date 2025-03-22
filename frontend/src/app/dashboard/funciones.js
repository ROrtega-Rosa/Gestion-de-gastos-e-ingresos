import axios from "axios";

export const mostrarGastos = (gastos) =>{

    axios.get('http://localhost:4000/api/gasto')
    .then((respuesta)=>{
        gastos(respuesta.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const mostrarIngresos = (ingresos) =>{

    axios.get('http://localhost:4000/api/ingreso')
    .then((respuesta)=>{
        ingresos(respuesta.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}