import numpy as np

def cifrado_hill(texto, clave):
    matriz_clave = np.array(clave)
    texto = texto.replace(" ", "").upper()
    n = int(np.sqrt(len(clave)))
    texto_cifrado = ""

    for i in range(0, len(texto), n):
        bloque = np.array([ord(char) - ord('A') for char in texto[i:i+n]])
        bloque_cifrado = np.dot(matriz_clave, bloque) % 26
        texto_cifrado += "".join(chr(char + ord('A')) for char in bloque_cifrado)

    return texto_cifrado

def descifrado_hill(texto_cifrado, clave):
    matriz_clave = np.array(clave)
    det = int(round(np.linalg.det(matriz_clave)))
    det_inv = pow(det, -1, 26)
    adjugada = np.round(det * np.linalg.inv(matriz_clave)).astype(int) % 26
    matriz_clave_inv = (det_inv * adjugada) % 26

    texto_plano = ""
    n = int(np.sqrt(len(clave)))

    for i in range(0, len(texto_cifrado), n):
        bloque = np.array([ord(char) - ord('A') for char in texto_cifrado[i:i+n]])
        bloque_descifrado = np.dot(matriz_clave_inv, bloque) % 26
        texto_plano += "".join(chr(char + ord('A')) for char in bloque_descifrado)

    return texto_plano

# Ejemplo de uso
texto = "HELLO"
clave = [
    [3, 3],
    [2, 5]
]
cifrado = cifrado_hill(texto, clave)
descifrado = descifrado_hill(cifrado, clave)
print("Cifrado:", cifrado)
print("Descifrado:", descifrado)
