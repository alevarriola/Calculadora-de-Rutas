
const boton = document.getElementById("boton-principal");
const contenedor = document.getElementById("tablero");
const cuerpo = document.getElementById("cuerpo")

let paso = 0;


boton.addEventListener("click", function() {

    if (paso == 0) {

        // Crear inputs
        const inputFilas = document.createElement("input");
        inputFilas.type = "number";
        inputFilas.id = "input-filas";
        inputFilas.placeholder = "Filas";
        inputFilas.className = "flex border border-blue-300 bg-blue-100 text-blue-900 rounded-xl p-2 m-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400";

        const inputColumnas = document.createElement("input");
        inputColumnas.type = "number";
        inputColumnas.id = "input-columnas";
        inputColumnas.placeholder = "Columnas";
        inputColumnas.className = "flex border border-blue-300 bg-blue-100 text-blue-900 rounded-xl p-2 m-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400";

        cuerpo.appendChild(inputFilas);
        cuerpo.appendChild(inputColumnas);

        boton.textContent = "Generar tablero";
        paso = 1;
    }

    else if (paso === 1) {

        // generamos el tablero
        const filas = parseInt(document.getElementById("input-filas").value);
        const columnas = parseInt(document.getElementById("input-columnas").value);

        generarTablero(filas, columnas);

        document.getElementById("input-filas").remove();
        document.getElementById("input-columnas").remove();

        boton.textContent = "Generar caminos";
        paso = 2;
    }
    
    else if (paso === 2) {

        // generamos los caminos
        generarCaminos();
        boton.textContent = "Resetear tablero"; 
        paso = 3;
    }

     else if (paso === 3) {
        resetearTablero();
        boton.textContent = "Iniciar";
        paso = 0;
     }
});


function generarTablero(filas, columnas) {

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
            const celda = document.createElement("button");
            celda.className = "bg-blue-300 border border-white";
            celda.style.width = "20px";
            celda.style.height = "20px";

            // cada celda tiene esta funcion adentro
            celda.addEventListener("click", function() {
                celda.classList.toggle("bg-red-300");
            });

            // Agregarlo al body
            contenedor.appendChild(celda);
            fila.push(celda);
        }
        tablero.push(fila);
    }
};

function generarCaminos() {
    
};

function resetearTablero() {
    document.getElementById("tablero").innerHTML = "";
    contenedor.innerHTML = "";
    contenedor.style.height = "0";
};