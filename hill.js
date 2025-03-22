function cifradoHill(texto, clave) {
    const n = Math.sqrt(clave.length);
    const matrizClave = clave;
    texto = texto.replace(/ /g, "").toUpperCase();
    let textoCifrado = "";

    for (let i = 0; i < texto.length; i += n) {
        const bloque = [];
        for (let j = 0; j < n; j++) {
            bloque.push(texto.charCodeAt(i + j) - 65);
        }
        const bloqueCifrado = multiplicarMatriz(matrizClave, bloque, n);
        textoCifrado += bloqueCifrado.map(char => String.fromCharCode(char + 65)).join("");
    }

    return textoCifrado;
}

function multiplicarMatriz(matriz, vector, n) {
    const resultado = [];
    for (let i = 0; i < n; i++) {
        let suma = 0;
        for (let j = 0; j < n; j++) {
            suma += matriz[i * n + j] * vector[j];
        }
        resultado.push(suma % 26);
    }
    return resultado;
}

function descifradoHill(textoCifrado, clave) {
    const n = Math.sqrt(clave.length);
    const matrizClave = clave;
    const det = determinante(matrizClave, n);
    const detInv = inversoMod(det, 26);
    const adjugada = matrizAdjugada(matrizClave, n);
    const matrizClaveInv = multiplicarMatrizPorEscalar(adjugada, detInv, n);

    let textoPlano = "";

    for (let i = 0; i < textoCifrado.length; i += n) {
        const bloque = [];
        for (let j = 0; j < n; j++) {
            bloque.push(textoCifrado.charCodeAt(i + j) - 65);
        }
        const bloqueDescifrado = multiplicarMatriz(matrizClaveInv, bloque, n);
        textoPlano += bloqueDescifrado.map(char => String.fromCharCode(char + 65)).join("");
    }

    return textoPlano;
}

function determinante(matriz, n) {
    if (n === 2) {
        return matriz[0] * matriz[3] - matriz[1] * matriz[2];
    }
    // Implementar cálculo de determinante para matrices más grandes si es necesario
}

function matrizAdjugada(matriz, n) {
    if (n === 2) {
        return [matriz[3], -matriz[1], -matriz[2], matriz[0]];
    }
    // Implementar cálculo de matriz adjugada para matrices más grandes si es necesario
}

function multiplicarMatrizPorEscalar(matriz, escalar, n) {
    const resultado = [];
    for (let i = 0; i < n * n; i++) {
        resultado.push((matriz[i] * escalar) % 26);
    }
    return resultado;
}

// Ejemplo de uso
let texto = "HELLO";
let clave = [3, 3, 2, 5];
let cifrado = cifradoHill(texto, clave);
let descifrado = descifradoHill(cifrado, clave);
console.log("Cifrado:", cifrado);
console.log("Descifrado:", descifrado);
