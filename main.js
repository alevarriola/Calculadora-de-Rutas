
// 3 variables para nuestros 3 componentes en html
const boton = document.getElementById("boton-principal");
const contenedor = document.getElementById("tablero");
const cuerpo = document.getElementById("cuerpo")

// una variable para la accion del boton principal
let paso = 0;

// nuestras 3 cariables globales
let tablero = [];
let filas = 0;
let columnas = 0;

// click en boton principal
boton.addEventListener("click", function() {

    // damos click a iniciar
    if (paso == 0) {

        // Crear inputs para filas y columnas
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

        // las agregamos al div cuerpo
        cuerpo.appendChild(inputFilas);
        cuerpo.appendChild(inputColumnas);

        // cambiamos texto del boton y asignamos el siguiente paso
        boton.textContent = "Generar tablero";
        paso = 1;
    }

    // damos click a generar tablero
    else if (paso === 1) {

        // guardamos en una variable los inputs
        filas = parseInt(document.getElementById("input-filas").value);
        columnas = parseInt(document.getElementById("input-columnas").value);

        // llamamos a la funcion generar tablero
        generarTablero(filas, columnas);

        // removemos los inputs del cuerpo
        document.getElementById("input-filas").remove();
        document.getElementById("input-columnas").remove();

        // cambiamos texto y asignamos el siguiente paso
        boton.textContent = "Generar calles";
        paso = 2;
    }
    
    // damos click en generar calles
    else if (paso === 2) {

        // llamamos a la funcion generar cuadras
        generarCuadras(tablero, filas, columnas);

        // cambiamos texto y vamos al ultimo paso
        boton.textContent = "Resetear tablero"; 
        paso = 3;
    }

    // damos click a resetear tablero
     else if (paso === 3) {
        resetearTablero();
     }
});


function generarTablero(filas, columnas) {

    // definimos nuestro contenedor para el tablero
    contenedor.style.display = "grid";
    contenedor.style.gridTemplateColumns = `repeat(${columnas}, 20px)`;
    contenedor.style.gridTemplateRows  = `repeat(${filas}, 20px)`;

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

function generarCuadras(tablero, filas, columnas) {
    // variable con el tamaño de nuestras cuadras
    const cuadras = [
        { ancho: 3, alto: 3 },
        { ancho: 7, alto: 3 },
        { ancho: 3, alto: 7 },
    ];

    // recorremos nuestro tablero de 4 en 4
    for (let fila = 0; fila < filas; fila += 4) {
        for (let columna = 0; columna < columnas; columna += 4) {

            // mezclamos nuestras cuadras
            const tiposAleatorios = [...cuadras].sort(() => Math.random() - 0.5);

            // verificamos si podemos colocar una cradra
            for (const tipo of tiposAleatorios) {
                if (puedeColocarCuadra(tablero, fila, columna, tipo.ancho, tipo.alto, filas, columnas)) {

                    // la colocamos y rompemos el bucle for
                    colocarCuadra(tablero, fila, columna, tipo.ancho, tipo.alto);
                    break; 
                }
            }
        }
    }
}

function puedeColocarCuadra(tablero, filaInicio, colInicio, ancho, alto, filasTotales, columnasTotales) {

    // si la fila de inicion, + el tamaño de nuestra cuadra sale del mapa no colocamos cuadra
    if (filaInicio + alto > filasTotales || colInicio + ancho > columnasTotales) return false;

    // recorremos las filas y columnas que vamos a colocar
    for (let filaColocar = filaInicio; filaColocar < filaInicio + alto; filaColocar++) {
        for (let colColocar = colInicio; colColocar < colInicio + ancho; colColocar++) {
            const celda = tablero[filaColocar][colColocar];
            // si alguna de esas celtas esta ocupada no colocamos la cuadra
            if (celda.dataset.ocupado === "true") return false;
        }
    }
    // si nada se cumple colocamos
    return true;
}

function colocarCuadra(tablero, filaInicio, colInicio, ancho, alto) {

    // recorremos nuestras filas y columnas a colocar
    for (let fila = filaInicio; fila < filaInicio + alto; fila++) {
        for (let columna = colInicio; columna < colInicio + ancho; columna++) {
            const celda = tablero[fila][columna];

            // las cuadras pintamos de gris y marcamos como ocupado
            celda.classList.add("bg-gray-700") 
            celda.dataset.ocupado = "true"; 
        }
    }
}

function resetearTablero() {
    location.reload();
};