# Calculadora de Rutas

Simulación visual del algoritmo A* sobre un tablero dinámico hecho en JavaScript y HTML.  
El usuario puede generar una grilla, diseñar obstáculos, establecer un punto de entrada y uno de salida, y visualizar cómo el algoritmo encuentra el camino más corto.

---

## Características

-  Generación dinámica de tableros personalizables
-  Colocación de obstáculos (cuadras) de manera automática
-  Selección manual de entrada y salida
-  Visualización paso a paso del algoritmo A*

---

## Captura de pantalla

<img src="https://github.com/alevarriola/Calculadora-de-Rutas/blob/main/img/captura.png" alt="Captura del simulador" width="600" />

---

## ¿Cómo funciona?

-  **Inicio**: el usuario presiona el botón y elige el tamaño del tablero.
-  **Generar Tablero**: se crea una grilla con celdas interactivas.
-  **Generar Calles**: se insertan automáticamente bloques ocupados (cuadras).
-  **Marcar entrada/salida**: clic en celdas para elegir origen (verde) y destino (rojo).
-  **Resolver**: se ejecuta el algoritmo A* y muestra el recorrido en verde claro.
-  **Reiniciar**: Reinicio completo del entorno con un clic.

---

##  Algoritmo utilizado

Se implementó el **algoritmo A\*** (A-star), una técnica heurística basada en:
`f(n) = g(n) + h(n)`
- `g(n)`: Costo real desde el inicio hasta el nodo `n`
- `h(n)`: Estimación de la distancia hasta el destino  
Se utilizó la **distancia Manhattan** como heurística (`Math.abs(a.x - b.x) + Math.abs(a.y - b.y)`).

---
##  Cómo usar
### Con Visual Studio Code

- Cloná el repositorio:

```
git clone https://github.com/alevarriola/Calculadora-de-Rutas.git 
```
- Abrí el archivo index.html en tu navegador.

---

## Autor

Alejandro A.

Desarrollador en constante formación.

GitHub: @alevarriola

---

## Licencia

Este proyecto está bajo la Licencia MIT.
Consultá el archivo LICENSE para más información.

---
