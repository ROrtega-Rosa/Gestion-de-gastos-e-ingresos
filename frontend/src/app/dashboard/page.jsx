'use client'

import NavBar from "@/componentes/NavBar"
import { ContainerRow, ContainerRowButton, ContainerRowGraphic, GraphicStyle, StyledTitle } from "@/componentes/style"
import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import { mostrarGastos, mostrarIngresos } from "./funciones";
import { jwtDecode } from "jwt-decode";
import CardDatos from "./CardDatos"

const Dashboard = ()=>{
  const [gastos, setGastos] = useState([])
  const [ingresos, setIngresos] = useState([])

  useEffect(()=>{
    mostrarGastos(setGastos)
    mostrarIngresos(setIngresos)

  },[setGastos, setIngresos])

const gastosFiltrados = () =>{

  return gastos.filter((item) => item.usuario_id === jwtDecode(localStorage.getItem("token")).id )
}

const ingresosFiltrados = () =>{
  return ingresos.filter((item)=> item.usuario_id === jwtDecode(localStorage.getItem("token")).id)
}



 return(
  <>
  <NavBar></NavBar> 
    <Container >
      <ContainerRowGraphic>
              <CardDatos gastos={gastosFiltrados} ingresos={ingresosFiltrados()} modoDatos ={1}></CardDatos>
              <CardDatos gastos={gastosFiltrados} ingresos={ingresosFiltrados()} modoDatos ={2}></CardDatos>
              <CardDatos gastos={gastosFiltrados} ingresos={ingresosFiltrados()} modoDatos ={3}></CardDatos>
      </ContainerRowGraphic>
      <ContainerRowGraphic>
      <CardDatos gastos={gastosFiltrados} ingresos={ingresosFiltrados()} modoDatos ={4}></CardDatos>
      <CardDatos gastos={gastosFiltrados} ingresos={ingresosFiltrados()} modoDatos ={5}></CardDatos>
      </ContainerRowGraphic>
       
    </Container>
    </>
 )
}

export default Dashboard