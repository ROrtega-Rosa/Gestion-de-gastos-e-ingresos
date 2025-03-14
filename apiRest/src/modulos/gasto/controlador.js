const TABLA = "gasto";

module.exports = (dbInyectada)=>{

    const db= dbInyectada;

    if(!db){
        db = resizeByrequire ('../../DB/mysql');
    }

    const todos = ()=>{
        return db.todos(TABLA)

    }

    const uno = (id)=>{
        return db.uno(TABLA, id)
    }

    const agregar = (body)=>{
        return db.agregar(TABLA, body);
    }

    const actualizar = (body, id) =>{
        return db.actualizar(TABLA, id, body)
    }

    const eliminar =(id)=>{
        return db.eliminar(TABLA, id)
    }
    
    return {
        todos,
        uno,
        eliminar,
        agregar,
        actualizar
    }


}