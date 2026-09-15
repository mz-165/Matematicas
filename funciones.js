function hacerOperacion() {

    let numeroArriba1 = document.getElementById('num-arriba-1').value;
    let numeroAbajo1 = document.getElementById('num-abajo-1').value;
    let numeroArriba2 = document.getElementById('num-arriba-2').value;
    let numeroAbajo2 = document.getElementById('num-abajo-2').value;
    let operacion = document.getElementById('que-operacion').value;

    numeroArriba1 = parseInt(numeroArriba1);
    numeroAbajo1 = parseInt(numeroAbajo1);
    numeroArriba2 = parseInt(numeroArriba2);
    numeroAbajo2 = parseInt(numeroAbajo2);

    if (numeroAbajo1 === 0 || numeroAbajo2 === 0) {
        document.getElementById('resultado-fracciones').innerHTML = "⚠️ No puedes poner 0 abajo";
        return; // Detener aquí la función
    }

    let resultadoArriba;
    let resultadoAbajo;

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

let respuestaCorrecta = "";

function crearNuevoEjercicio() {

    let numero1 = Math.floor(Math.random() * 10) + 1;
    let numero2 = Math.floor(Math.random() * 10) + 1;

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

    document.getElementById('texto-pregunta').textContent = pregunta;

    document.getElementById('opcion-a').textContent = "A) " + respuestaCorrecta;
    document.getElementById('opcion-b').textContent = "B) " + (parseInt(respuestaCorrecta) + 2);
    document.getElementById('opcion-c').textContent = "C) " + (parseInt(respuestaCorrecta) - 1);

    document.getElementById('opcion-a').dataset.valor = respuestaCorrecta;
    document.getElementById('opcion-b').dataset.valor = (parseInt(respuestaCorrecta) + 2).toString();
    document.getElementById('opcion-c').dataset.valor = (parseInt(respuestaCorrecta) - 1).toString();

    document.getElementById('resultado-ejercicios').innerHTML = "";
}

function verificarRespuesta(letra) {

    let valorDelBoton = document.getElementById('opcion-' + letra.toLowerCase()).dataset.valor;

    if (valorDelBoton === respuestaCorrecta) {
        document.getElementById('resultado-ejercicios').innerHTML = "🎉 ¡Correcto! Muy bien hecho 💜";
    } else {
        document.getElementById('resultado-ejercicios').innerHTML = "❌ Incorrecto. Intenta de nuevo.";
    }
}

function calcularCuadrado() {
    let lado = document.getElementById('cuadrado-lado').value;
    lado = parseInt(lado);

    if (!lado || lado <= 0) {
        document.getElementById('cuadrado-resultado').innerHTML = "Debe escribir un número mayor a 0";
        return;
    }

    let perimetro = lado + lado + lado + lado;
    let area = lado * lado;

    document.getElementById('cuadrado-resultado').innerHTML = 
        "Perímetro: " + perimetro + "<br>Área: " + area;
}

function calcularRectangulo() {
    let base = document.getElementById('rectangulo-base').value;
    let altura = document.getElementById('rectangulo-altura').value;
    base = parseInt(base);
    altura = parseInt(altura);

    if (!base || !altura || base <= 0 || altura <= 0) {
        document.getElementById('rectangulo-resultado').innerHTML = "Debe escribir números mayores a 0";
        return;
    }

    let perimetro = (base * 2) + (altura * 2);
    let area = base * altura;

    document.getElementById('rectangulo-resultado').innerHTML = 
        "Perímetro: " + perimetro + "<br>Área: " + area;
}

function calcularTriangulo() {
    let lado1 = document.getElementById('triangulo-lado1').value;
    let lado2 = document.getElementById('triangulo-lado2').value;
    let lado3 = document.getElementById('triangulo-lado3').value;
    let base = document.getElementById('triangulo-base').value;
    let altura = document.getElementById('triangulo-altura').value;

    lado1 = parseInt(lado1);
    lado2 = parseInt(lado2);
    lado3 = parseInt(lado3);
    base = parseInt(base);
    altura = parseInt(altura);

    if (!lado1 || !lado2 || !lado3 || !base || !altura || lado1 <= 0) {
        document.getElementById('triangulo-resultado').innerHTML = "Debe escribir todos los valores mayores a 0";
        return;
    }

    let perimetro = lado1 + lado2 + lado3;
    let area = (base * altura) / 2;

    document.getElementById('triangulo-resultado').innerHTML = 
        "Perímetro: " + perimetro + "<br>Área: " + area;
}

function calcularCirculo() {
    let radio = document.getElementById('circulo-radio').value;
    radio = parseInt(radio);

    if (!radio || radio <= 0) {
        document.getElementById('circulo-resultado').innerHTML = "Debe escribir un número mayor a 0";
        return;
    }

    let PI = 3.1416;
    let perimetro = 2 * PI * radio;
    let area = PI * radio * radio;

    document.getElementById('circulo-resultado').innerHTML = 
        "Perímetro: " + perimetro.toFixed(2) + "<br>Área: " + area.toFixed(2);
}

function calcularTrapecio() {
    let baseMayor = document.getElementById('trapecio-baseMayor').value;
    let baseMenor = document.getElementById('trapecio-baseMenor').value;
    let lado1 = document.getElementById('trapecio-lado1').value;
    let lado2 = document.getElementById('trapecio-lado2').value;
    let altura = document.getElementById('trapecio-altura').value;

    baseMayor = parseInt(baseMayor);
    baseMenor = parseInt(baseMenor);
    lado1 = parseInt(lado1);
    lado2 = parseInt(lado2);
    altura = parseInt(altura);

    if (!baseMayor || !baseMenor || !lado1 || !lado2 || !altura || baseMayor <= 0) {
        document.getElementById('trapecio-resultado').innerHTML = "Debe escribir todos los valores mayores a 0";
        return;
    }

    let perimetro = baseMayor + baseMenor + lado1 + lado2;
    let area = ((baseMayor + baseMenor) / 2) * altura;

    document.getElementById('trapecio-resultado').innerHTML = 
        "Perímetro: " + perimetro + "<br>Área: " + area;
}