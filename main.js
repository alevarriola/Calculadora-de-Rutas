
const generador = document.getElementById("generar");
const contenedor = document.getElementById("tablero");


generador.addEventListener("click", function() {
    
    // limpiar el tablero anterior, eliminar luego cuando avances mas, hace que el boton haga off
    contenedor.innerHTML = "";


    // definimos filas y columnas
    const filas = 30;
    const columnas = 30;

    // definimos nuestro contenedor para el tablero
    contenedor.style.display = "grid";
    contenedor.style.gridTemplateColumns = `repeat(${columnas}, 20px)`;
    contenedor.style.gridTemplateRows  = `repeat(${filas}, 20px)`;

    // creamos nuestro tablero vacio
    const tablero = [];

    // recorremos nuestro tablero 
    for (let i = 0; i < filas; i++) {
         const fila = [];

        for (let j = 0; j < columnas; j++) {

            // Crear elemento celda
            const celda = document.createElement("div");
            celda.className = "bg-blue-300 border border-white";
            celda.style.width = "20px";
            celda.style.height = "20px";

            // Agregarlo al body
            contenedor.appendChild(celda);
            fila.push(celda);
        }
        tablero.push(fila);
    }
});