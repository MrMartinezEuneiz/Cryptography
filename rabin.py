import random

def generar_claves():
    p = q = 1
    while p == q:
        p = random.getrandbits(512)
        q = random.getrandbits(512)
    n = p * q
    return (n, p, q)

def cifrado_rabin(mensaje, n):
    m = int.from_bytes(mensaje.encode(), byteorder='big')
    c = (m * m) % n
    return c

def descifrado_rabin(c, p, q):
    mp = pow(c, (p + 1) // 4, p)
    mq = pow(c, (q + 1) // 4, q)
    yp = pow(p, -1, q)
    yq = pow(q, -1, p)
    m1 = (mp * yp * q + mq * yq * p) % (p * q)
    m2 = (p * q - m1)
    return [m1.to_bytes((m1.bit_length() + 7) // 8, byteorder='big').decode(),
            m2.to_bytes((m2.bit_length() + 7) // 8, byteorder='big').decode()]

# Ejemplo de uso
n, p, q = generar_claves()
mensaje = "Hola"
cifrado = cifrado_rabin(mensaje, n)
descifrado = descifrado_rabin(cifrado, p, q)
print("Cifrado:", cifrado)
print("Descifrado:", descifrado)
