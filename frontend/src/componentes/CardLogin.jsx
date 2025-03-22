'use client'
import { ContainerColumn, ContainerForm } from "@/componentes/style";
import { TextField, Button, InputAdornment } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Link from "next/link";
import { useState } from "react";
import axios from "axios";


const CardLogin = () => {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({
        email: false,
        password: false
    })

    const handleChange = (value, e) => {
        setLogin({
            ...login,
            [value]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (login.email === "" || login.password === "") {
            setError({
                email: true,
                password: true
            })
        } else {
            setError({
                email: false,
                password: false
            })

            axios.post('http://localhost:4000/api/auth/login',{
                email:login.email,
                password:login.password
            })
            .then((respuesta)=>{
                console.log(respuesta)
                localStorage.setItem('token', respuesta.data)
                window.location.replace('/dashboard');
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
    return (
        <ContainerColumn>
            <ContainerForm>
                <form >
                    <TextField
                        label="Email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={error.email}
                        onChange={(e) => handleChange("email", e)}
                        value={login.email}
                        slotProps={{
                            input: {
                            startAdornment: (
                              <InputAdornment position="start">
                               <EmailIcon/> 
                              </InputAdornment>
                            ),
                        }
                          }}

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
                        onChange={(e) => handleChange("password", e)}
                        value={login.password}
                        slotProps={{
                            input: {
                            startAdornment: (
                              <InputAdornment position="start">
                               <LockIcon/>
                              </InputAdornment>
                            ),
                        }
                          }}
                    />
                    <p style={{ margin: "5%" }}>
                        si no te has registrado haz clic
                        <Link href={"/registro"} style={{ color: "blue" }}> Aqui</Link></p>
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={(e) => handleSubmit(e)}>
                        Enviar
                    </Button>
                </form>

            </ContainerForm>

        </ContainerColumn>
    )
}

export default CardLogin;