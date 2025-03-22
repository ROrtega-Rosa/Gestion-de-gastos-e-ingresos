
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { StyledTable, StyledTableHead, StyledTableRow, StyleTableContainer, TableStyle } from '@/componentes/style';
import DeleteIcon from '@mui/icons-material/Delete';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { useState } from 'react';
import {  eliminarIngreso } from './funciones';


const TablaIngresos = ({ ingresos, formMode, setFormMode, open, setOpen, setId }) => {

const [openDelete, setOpenDelete] = useState(false)
const [selectedItem, setSelectedItem] = useState(0);

const handleOpenDelete =(id)=>{
    setOpenDelete(true)
    setSelectedItem(id)
}
const handleCloseDelete =()=>{
    setOpenDelete(false)
    setSelectedItem(0)
    
}

const handleDelete = () =>{

    eliminarIngreso(selectedItem)
    handleCloseDelete()
}

const handleUpdate = (id) =>{
    setFormMode(2)
    setId(id)
    setOpen(true)
}
    return (
        <StyleTableContainer component={Paper}>
            <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
                <StyledTableHead>
                    <StyledTableRow>
                        <TableCell>Etiqueta</TableCell>
                        <TableCell align="center">Descripcion</TableCell>
                        <TableCell align="center">Valor&nbsp;(€)</TableCell>
                        <TableCell align="center"> Fecha</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                       
                    </StyledTableRow>
                </StyledTableHead>
                <TableBody>
                    {ingresos.map((item, index) => (
                        <StyledTableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{item.etiqueta}</TableCell>
                            <TableCell align="center" >{item.descripcion}</TableCell>
                            <TableCell align="center">{item.valor}</TableCell>
                            <TableCell align="center">{new Date(item.fecha).toLocaleDateString("es-ES")}</TableCell>
                            <TableCell align="center">
                                <BrowserUpdatedIcon onClick={(e)=>handleUpdate(item.id)} />
                                <DeleteIcon  onClick ={(e)=>handleOpenDelete(item.id)}/>
                            </TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </StyledTable>

            <Dialog open={openDelete} onClose={handleCloseDelete}>
                <DialogTitle>Confirmar eliminación</DialogTitle>
                <DialogContent>
                    <p>¿Estás seguro de que deseas borrar este registro?</p>
                </DialogContent>
                <DialogActions>
                    <Button  color="primary" onClick={handleCloseDelete}>
                        Cancelar
                    </Button>
                    <Button  color="error" onClick={handleDelete} >
                        Borrar
                    </Button>
                </DialogActions>
            </Dialog>
        </StyleTableContainer>
    )

}

export default TablaIngresos;