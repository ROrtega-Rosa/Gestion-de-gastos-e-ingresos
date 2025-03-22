'use client'
import NavBar from "@/componentes/NavBar"
import { Container, ContainerRow, ContainerRowButton, StyledTitle } from "@/componentes/style"
import { Button, InputAdornment, Pagination, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import {  mostrarIngresos } from "./funciones";
import { jwtDecode } from "jwt-decode";
import FormCard from "./FormCard";
import TablaIngresos from "./TablaIngresos";

const Ingresos = () => {
    const [ingresos, setIngresos] = useState([]);
    const [etiqueta, setEqueta] = useState("")
    const [formMode, setFormMode] = useState(0)
    const [id, setId] = useState(0)
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const [nuevoIngreso, setNuevoIngreso] = useState({
        etiqueta: "",
        descripcion: "",
        valor: ""
    })

    useEffect(() => {

        mostrarIngresos(setIngresos)
    }, [setIngresos])

    const handleOpen = () => {
        setOpen(true)
        setFormMode(1)
    }

    const handleSearch = (e) => {
        setEqueta(e.target.value)
    }

    const ingresosFiltro = () => {


        if (etiqueta !== "") {

            return ingresos.filter((item) =>
                item.usuario_id === jwtDecode(localStorage.getItem("token")).id
                && item.etiqueta.toLowerCase().includes(etiqueta.toLowerCase()))
        }

        return ingresos.filter((item) => item.usuario_id === jwtDecode(localStorage.getItem("token")).id)

    }


    const ingresosPaginados = () => {
        const filtrados = ingresosFiltro();
        const startIndex = (page - 1) * itemsPerPage;
        return filtrados.slice(startIndex, startIndex + itemsPerPage);
    };

    return (
        <>
            <NavBar></NavBar>
            <Container >
                <ContainerRow>
                    <StyledTitle>Ingresos</StyledTitle>
                </ContainerRow>
                <ContainerRowButton >
                    <Button onClick={handleOpen} variant="contained">Nuevo Ingreso</Button>
                    <FormCard
                        open={open}
                        setOpen={setOpen}
                        nuevoIngreso={nuevoIngreso}
                        setNuevoIngreso={setNuevoIngreso}
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
                    <TablaIngresos ingresos={ingresosPaginados()}
                        formMode={formMode}
                        setFormMode={setFormMode}
                        open={open}
                        setOpen={setOpen}
                        setId={setId}
                    ></TablaIngresos>

                </ContainerRow>
                <ContainerRow>
                    <Pagination
                        count={Math.ceil(ingresosFiltro().length / itemsPerPage)}
                        page={page}
                        onChange={(event, value) => setPage(value)}
                        color="primary"
                    />
                </ContainerRow>

            </Container>
        </>
    )
}

export default Ingresos