// =============================================
// TRABAJO 1: CALCULADORA DE FRACCIONES
// =============================================

// Esta función se ejecuta cuando le das clic al botón Calcular
function hacerOperacion() {

    // PASO 1: Tomar los números que escribió el usuario
    let numeroArriba1 = document.getElementById('num-arriba-1').value;
    let numeroAbajo1 = document.getElementById('num-abajo-1').value;
    let numeroArriba2 = document.getElementById('num-arriba-2').value;
    let numeroAbajo2 = document.getElementById('num-abajo-2').value;
    let operacion = document.getElementById('que-operacion').value;

    // Convertir los textos a números
    numeroArriba1 = parseInt(numeroArriba1);
    numeroAbajo1 = parseInt(numeroAbajo1);
    numeroArriba2 = parseInt(numeroArriba2);
    numeroAbajo2 = parseInt(numeroAbajo2);

    // PASO 2: Proteger si alguien escribe 0 abajo
    if (numeroAbajo1 === 0 || numeroAbajo2 === 0) {
        document.getElementById('resultado-fracciones').innerHTML = "⚠️ No puedes poner 0 abajo";
        return; // Detener aquí la función
    }

    // PASO 3: Crear cajitas para guardar el resultado
    let resultadoArriba;
    let resultadoAbajo;

    // PASO 4: Hacer la cuenta según la operación
    if (operacion === 'sumar') {
        resultadoArriba = (numeroArriba1 * numeroAbajo2) + (numeroArriba2 * numeroAbajo1);
        resultadoAbajo = numeroAbajo1 * numeroAbajo2;
    }

    if (operacion === 'restar') {
        resultadoArriba = (numeroArriba1 * numeroAbajo2) - (numeroArriba2 * numeroAbajo1);
        resultadoAbajo = numeroAbajo1 * numeroAbajo2;
    }

    if (operacion === 'multiplicar') {
        resultadoArriba = numeroArriba1 * numeroArriba2;
        resultadoAbajo = numeroAbajo1 * numeroAbajo2;
    }

    if (operacion === 'dividir') {
        resultadoArriba = numeroArriba1 * numeroAbajo2;
        resultadoAbajo = numeroAbajo1 * numeroArriba2;
    }

    // PASO 5: Mostrar el resultado en la página
    document.getElementById('resultado-fracciones').innerHTML = 
        resultadoArriba + " / " + resultadoAbajo;
}


// =============================================
// TRABAJO 2: EJERCICIOS DE FUNCIONES
// =============================================

// Guardaremos aquí la respuesta correcta
let respuestaCorrecta = "";

// Crear un ejercicio nuevo
function crearNuevoEjercicio() {

    // Números al azar del 1 al 10
    let numero1 = Math.floor(Math.random() * 10) + 1;
    let numero2 = Math.floor(Math.random() * 10) + 1;

    // Elegir qué tipo de pregunta
    let tipo = Math.floor(Math.random() * 3);
    let pregunta = "";

    if (tipo === 0) {
        pregunta = "Si f(x) = " + numero1 + "x + " + numero2 + " , ¿cuánto vale f(2)?";
        respuestaCorrecta = (numero1 * 2 + numero2).toString();
    }

    if (tipo === 1) {
        pregunta = "Si f(x) = " + numero1 + "x - " + numero2 + " , ¿cuánto vale f(3)?";
        respuestaCorrecta = (numero1 * 3 - numero2).toString();
    }

    if (tipo === 2) {
        pregunta = "Si f(x) = " + numero1 + "x , ¿cuánto vale f(" + numero2 + ")?";
        respuestaCorrecta = (numero1 * numero2).toString();
    }

    // Mostrar la pregunta en la página
    document.getElementById('texto-pregunta').textContent = pregunta;

    // Crear opciones sencillas (la correcta y dos más)
    document.getElementById('opcion-a').textContent = "A) " + respuestaCorrecta;
    document.getElementById('opcion-b').textContent = "B) " + (parseInt(respuestaCorrecta) + 2);
    document.getElementById('opcion-c').textContent = "C) " + (parseInt(respuestaCorrecta) - 1);

    // Guardar cuál es cuál
    document.getElementById('opcion-a').dataset.valor = respuestaCorrecta;
    document.getElementById('opcion-b').dataset.valor = (parseInt(respuestaCorrecta) + 2).toString();
    document.getElementById('opcion-c').dataset.valor = (parseInt(respuestaCorrecta) - 1).toString();

    // Borrar mensaje anterior
    document.getElementById('resultado-ejercicios').innerHTML = "";
}


// Verificar si la respuesta está bien
function verificarRespuesta(letra) {

    // Tomar el valor que dice el botón que se presionó
    let valorDelBoton = document.getElementById('opcion-' + letra.toLowerCase()).dataset.valor;

    // Comparar con la respuesta correcta
    if (valorDelBoton === respuestaCorrecta) {
        document.getElementById('resultado-ejercicios').innerHTML = "🎉 ¡Correcto! Muy bien hecho 💜";
    } else {
        document.getElementById('resultado-ejercicios').innerHTML = "❌ Incorrecto. Intenta de nuevo.";
    }
}