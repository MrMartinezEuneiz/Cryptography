const crypto = require('crypto');

function diffieHellman() {
    // Valores compartidos públicamente
    const p = 23;
    const g = 5;

    // Clave privada de Alice
    const a = crypto.randomInt(1, 10);
    const A = (g ** a) % p;

    // Clave privada de Bob
    const b = crypto.randomInt(1, 10);
    const B = (g ** b) % p;

    // Secreto compartido
    const s_alice = (B ** a) % p;
    const s_bob = (A ** b) % p;

    if (s_alice === s_bob) {
        return s_alice;
    } else {
        throw new Error("Los secretos compartidos no coinciden");
    }
}

// Ejemplo de uso
const secretoCompartido = diffieHellman();
console.log("Secreto Compartido:", secretoCompartido);
