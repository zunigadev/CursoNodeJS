function comparacion(x, y) {
    let respuesta = "No son iguales";
    if (x === y) {
        respuesta = "Son iguales";
    }
    return respuesta;
}

// Pruebas
//console.log(comparacion(2,2))

//Exportación de función comparación (CommonJs)
module.exports={
    comparacion
};