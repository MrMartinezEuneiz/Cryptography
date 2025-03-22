const crypto = require('crypto');

function generarClaves() {
    const p = crypto.randomBytes(64).readBigUInt64BE();
    const q = crypto.randomBytes(64).readBigUInt64BE();
    const n = p * q;
    return { n, p, q };
}

function cifradoRabin(mensaje, n) {
    const m = BigInt("0x" + Buffer.from(mensaje).toString('hex'));
    const c = (m * m) % n;
    return c.toString(16);
}

function descifradoRabin(c, p, q) {
    const cBigInt = BigInt("0x" + c);
    const mp = BigInt(cBigInt ** ((p + 1n) / 4n) % p);
    const mq = BigInt(cBigInt ** ((q + 1n) / 4n) % q);
    const yp = BigInt(p ** -1n % q);
    const yq = BigInt(q ** -1n % p);
    const m1 = (mp * yp * q + mq * yq * p) % (p * q);
    const m2 = (p * q - m1);
    return [m1.toString(16), m2.toString(16)];
}

// Ejemplo de uso
const { n, p, q } = generarClaves();
const mensaje = "Hola";
const cifrado = cifradoRabin(mensaje, n);
const descifrado = descifradoRabin(cifrado, p, q);
console.log("Cifrado:", cifrado);
console.log("Descifrado:", descifrado);
