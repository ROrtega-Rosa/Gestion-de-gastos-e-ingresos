'use client'
import { ContainerColumn, ContainerForm } from "@/componentes/style";
import { TextField, Button, InputAdornment } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import LockIcon from '@mui/icons-material/Lock';

const CardRegistro = ()=>{

    const [nuevoRegistro, setNuevoRegistro] = useState({
        nombre:"",
        email: "",
        password: ""
    })
    const [error, setError] =useState({
        nombre: false,
        email: false,
        password:false
    })

    const handleChange = (valor, e) =>{

        setNuevoRegistro({
            ...nuevoRegistro,
            [valor]: e.target.value,
        })

    }
   const handleSubmit = (e) =>{
        e.preventDefault();
        if(nuevoRegistro.nombre === "" || nuevoRegistro.email==="" || nuevoRegistro.password===""){
            setError({
                nombre: true,
                email: true,
                password:true
            })
        }else{
            setError({
                nombre: false,
                email: false,
                password:false
            })

            axios
            .post('http://localhost:4000/api/usuario', {

                nombre: nuevoRegistro.nombre,
                email: nuevoRegistro.email,
                password:nuevoRegistro.password
            })
            .then((respuesta)=>{
                console.log(respuesta)
                window.location.replace('/');
            })
            .catch((err)=>{
                console.log(err)
            })


        }
   }
    return(
        <ContainerColumn>
            <ContainerForm>
                <form >
                <TextField
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre"
                        type= "text"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={error.nombre}
                        onChange={(e)=>handleChange('nombre', e)}
                      
                    />
                    <TextField
                        label="Email"
                        name="email"
                        placeholder="Email"
                        type= "email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={error.email}
                        onChange={(e)=>handleChange('email', e)}
                      
                    />
                    <TextField
                        label="Password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={error.password}
                        onChange={(e)=>handleChange('password', e)}
                        
                    />
                    
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={(e)=>handleSubmit(e)}>
                        Enviar
                    </Button>
                </form>

            </ContainerForm>

        </ContainerColumn>
    )
}

export default CardRegistro