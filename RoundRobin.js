// Arreglo de líneas de código
const lineasDeCodigo = [
    'a = 1 + 2;',
    'console.log("1+2");',
    'b = 3 + 4;',
    'console.log("3+4");',
    'c = 5 + 6;',
    'console.log("5+6");'
];

// Clase para representar un Proceso
class Proceso {
    constructor(id, lineas) {
        this.id = id;
        this.lineas = lineas;
        this.lineaActual = 0;
    }

    // Ejecutar la siguiente línea de código
    ejecutarLinea() {
        if (this.lineaActual < this.lineas.length) {
            agregarAlDOM(`Proceso ${this.id}`, `Línea de código: ${this.lineas[this.lineaActual]}`);
            this.lineaActual++;
        } else {
            agregarAlDOM(`Proceso ${this.id}`, `Terminado`);
        }
    }
}

// Función para inicializar los procesos
function inicializarProcesos(numProcesos) {
    let procesos = [];
    for (let i = 1; i <= numProcesos; i++) {
        let lineas = [];
        let numLineas = Math.floor(Math.random() * 3) + 1; // Número aleatorio de líneas (1-3)
        for (let j = 0; j < numLineas; j++) {
            let linea = lineasDeCodigo[Math.floor(Math.random() * lineasDeCodigo.length)];
            lineas.push(linea);
        }
        procesos.push(new Proceso(i, lineas));
    }
    return procesos;
}

// Función para iniciar la simulación
function iniciarSimulacion(procesos) {
    let procesoTerminado = false;
    while (!procesoTerminado) {
        procesoTerminado = true;
        procesos.forEach(proceso => {
            if (proceso.lineaActual < proceso.lineas.length) {
                proceso.ejecutarLinea();
                procesoTerminado = false;
            }
        });
    }
}

// Función para agregar resultados al DOM
function agregarAlDOM(proceso, lineaDeCodigo) {
    const resultadosDiv = document.getElementById('resultados');
    const card = document.createElement('div');
    card.className = 'col-sm-4 mb-4';
    card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${proceso}</h5>
                <p class="card-text">${lineaDeCodigo}</p>
            </div>
        </div>
    `;
    resultadosDiv.appendChild(card);
}

// Función principal para iniciar todo
function main() {
    const numProcesos = parseInt(prompt("Introduce el número de procesos a simular:"), 10);
    if (!isNaN(numProcesos) && numProcesos > 0) {
        const procesos = inicializarProcesos(numProcesos);
        iniciarSimulacion(procesos);
    } else {
        alert("Por favor, introduce un número válido de procesos.");
    }
}

// Esperar a que el DOM esté cargado para iniciar
document.addEventListener('DOMContentLoaded', main);