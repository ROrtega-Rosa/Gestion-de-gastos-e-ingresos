import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { actualizarGasto, actualizarIngreso, insertarGasto, insertarIngreso, mostrarUnIngreso } from './funciones';



const FormCard = ({ open, setOpen, nuevoIngreso, setNuevoIngreso, formMode, setFormMode, id }) => {

  useEffect(()=>{
    if(open && formMode == 2 ){
      mostrarUnIngreso(setNuevoIngreso,id)
    }

  },[formMode,open])


  const handleClose = () => {
    setFormMode(0)
    setOpen(false)
   setNuevoIngreso({
    etiqueta: "",
    descripcion: "",
    valor: null
   })
    
  }

  const handleChange = (valor, e) => {
    setNuevoIngreso({
      ...nuevoIngreso,
      [valor]: e.target.value
    })
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}

      slotProps={{
        paper: {
          component: 'form',
          onSubmit: (e) => {
            e.preventDefault();
            switch (formMode) {

              case 1:
                insertarIngreso(nuevoIngreso)
                handleClose();
                break;
              case 2:
                actualizarIngreso(nuevoIngreso,id)
                handleClose()
                break;
              default:
                console.log("err")
                break;
            }


          },
        },
      }}
    >

      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="etiqueta"
          name="etiqueta"
          label="Etiqueta"
          type="text"
          defaultValue={nuevoIngreso[0]?.etiqueta}
          fullWidth
          variant="filled"
          onChange={(e) => handleChange("etiqueta", e)}
        />
        <TextField
          autoFocus
          multiline
          required
          margin="dense"
          id="descripcion"
          name="descripcion"
          label="Descripción"
          type="text"
          defaultValue={nuevoIngreso[0]?.descripcion}
          fullWidth
          variant="filled"
          rows={4}
          onChange={(e) => handleChange("descripcion", e)}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="valor"
          name="valor"
          label="Valor"
          type="text"
          defaultValue={nuevoIngreso[0]?.valor}
          fullWidth
          variant="filled"
          onChange={(e) => handleChange("valor", e)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">{ formMode ===1 ? "Aceptar" : "Actualizar"}</Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormCard