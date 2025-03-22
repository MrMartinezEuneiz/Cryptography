function cifradoAfin(texto, a, b) {
    let cifrado = "";
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let codigo = char.charCodeAt(0);
            if (codigo >= 97 && codigo <= 122) {
                cifrado += String.fromCharCode(((a * (codigo - 97) + b) % 26) + 97);
            } else if (codigo >= 65 && codigo <= 90) {
                cifrado += String.fromCharCode(((a * (codigo - 65) + b) % 26) + 65);
            }
        } else {
            cifrado += char;
        }
    }
    return cifrado;
}

function inversoMod(a, m) {
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) {
            return x;
        }
    }
    return 1;
}

function descifradoAfin(texto, a, b) {
    let inversoModA = inversoMod(a, 26);
    let descifrado = "";
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let codigo = char.charCodeAt(0);
            if (codigo >= 97 && codigo <= 122) {
                descifrado += String.fromCharCode(((inversoModA * (codigo - 97 - b + 26)) % 26) + 97);
            } else if (codigo >= 65 && codigo <= 90) {
                descifrado += String.fromCharCode(((inversoModA * (codigo - 65 - b + 26)) % 26) + 65);
            }
        } else {
            descifrado += char;
        }
    }
    return descifrado;
}

// Ejemplo de uso
let texto = "Hola, Mundo!";
let a = 5;
let b = 8;
let cifrado = cifradoAfin(texto, a, b);
let descifrado = descifradoAfin(cifrado, a, b);
console.log("Cifrado:", cifrado);
console.log("Descifrado:", descifrado);
