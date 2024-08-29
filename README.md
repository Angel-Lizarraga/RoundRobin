README.txt
===========

Simulación de Round Robin en JavaScript
---------------------------------------

Descripción:
------------
Este proyecto implementa una simulación simplificada del algoritmo de calendarización de procesos Round Robin utilizando JavaScript. La simulación muestra cómo varios procesos ejecutan sus líneas de código en un entorno web, utilizando tarjetas (cards) de Bootstrap para mostrar los resultados.

Archivos del proyecto:
-----------------------
1. index.html - Archivo HTML principal que carga la página web donde se muestra la simulación.
2. roundrobin.js - Archivo JavaScript que contiene la lógica de la simulación y manipula el DOM para mostrar los resultados.
3. README.txt - Este archivo de texto que explica cómo ejecutar el proyecto y qué hace.

Instrucciones para ejecutar:
----------------------------
1. Abre el archivo `index.html` en tu navegador web preferido.
2. Cuando se te solicite, ingresa el número de procesos que deseas simular.
3. Los resultados de la simulación se mostrarán en la página como tarjetas de Bootstrap, donde cada tarjeta representa un proceso y su progreso en la ejecución de las líneas de código.
4. Si ingresas un número de procesos inválido, el programa te pedirá que ingreses un número válido.

Requisitos:
-----------
- Un navegador web moderno (como Google Chrome, Mozilla Firefox, Microsoft Edge, etc.) con soporte para JavaScript.
- Conexión a Internet para cargar las librerías de Bootstrap desde un CDN.

Notas adicionales:
------------------
- La simulación no utiliza el parámetro `time slice` del algoritmo Round Robin tradicional. En su lugar, cada proceso ejecuta una sola línea de código por turno hasta completar todas sus instrucciones.
- Las líneas de código ejecutadas por los procesos son seleccionadas de manera aleatoria desde un arreglo predefinido.

Este proyecto es parte de una tarea académica que se enfoca en la comprensión y aplicación de conceptos básicos de JavaScript y manipulación del DOM en el desarrollo web.
