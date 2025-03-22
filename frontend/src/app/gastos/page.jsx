'use client'
import NavBar from "@/componentes/NavBar"
import { Container, ContainerRow, ContainerRowButton, StyledTitle } from "@/componentes/style"
import { Button, InputAdornment, Pagination, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import TablaGastos from "./TablaGastos";
import { useEffect, useState } from "react";
import { mostrarGastos } from "./funciones";
import { jwtDecode } from "jwt-decode";
import FormCard from "./FormCard";


const Gastos = () => {

    const [gastos, setGastos] = useState([]);
    const [etiqueta, setEqueta] = useState("")
    const [formMode, setFormMode] = useState(0)
    const [id, setId] = useState(0)
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const [nuevoGasto, setNuevoGasto] = useState({
        etiqueta: "",
        descripcion: "",
        valor: ""
    })

    useEffect(() => {

        mostrarGastos(setGastos)
    }, [setGastos])

    const handleOpen = () => {
        setOpen(true)
        setFormMode(1)
    }

    const handleSearch = (e) => {
        setEqueta(e.target.value)
    }

    const gastosFiltro = () => {
        

        if (etiqueta !== "") {

            return gastos.filter((item) =>
                item.usuario_id === jwtDecode(localStorage.getItem("token")).id
                && item.etiqueta.toLowerCase().includes(etiqueta.toLowerCase()))
        }

        return gastos.filter((item) => item.usuario_id === jwtDecode(localStorage.getItem("token")).id)
    
    }
    

    const gastosPaginados = () => {
        const filtrados = gastosFiltro();
        const startIndex = (page - 1) * itemsPerPage;
        return filtrados.slice(startIndex, startIndex + itemsPerPage);
    };
   
    return (
        <>
            <NavBar></NavBar>
            <Container >
                <ContainerRow>
                    <StyledTitle>Gastos</StyledTitle>
                </ContainerRow>
                <ContainerRowButton >
                    <Button onClick={handleOpen} variant="contained">Nuevo Gasto</Button>
                    <FormCard 
                    open={open}
                     setOpen={setOpen}
                    nuevoGasto={nuevoGasto} 
                    setNuevoGasto={setNuevoGasto} 
                    formMode={formMode}
                    setFormMode={setFormMode}
                    id={id}
                    />
                    
                    <TextField
                        label="Buscar por etiqueta"
                        variant="outlined"
                        onChange={(e) => handleSearch(e)}
                        slotProps={{
                            input: {
                                componentsProps: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                },
                            },
                        }}
                    />

                </ContainerRowButton>
                <ContainerRow>
                    <TablaGastos gastos={gastosPaginados()}  
                    formMode={formMode} 
                    setFormMode={setFormMode}
                    open={open}
                    setOpen={setOpen}
                    setId={setId}
                    ></TablaGastos>

                </ContainerRow>
                <ContainerRow>
                    <Pagination
                        count={Math.ceil(gastosFiltro().length / itemsPerPage)}
                        page={page}
                        onChange={(event, value) => setPage(value)}
                        color="primary"
                    />
                </ContainerRow>

            </Container>
        </>
    )
}

export default Gastos