def cifrado_afin(texto, a, b):
    cifrado = ""
    for char in texto:
        if char.isalpha():
            if char.islower():
                cifrado += chr((a * (ord(char) - ord('a')) + b) % 26 + ord('a'))
            elif char.isupper():
                cifrado += chr((a * (ord(char) - ord('A')) + b) % 26 + ord('A'))
        else:
            cifrado += char
    return cifrado

def descifrado_afin(texto, a, b):
    inverso_mod_a = pow(a, -1, 26)
    descifrado = ""
    for char in texto:
        if char.isalpha():
            if char.islower():
                descifrado += chr((inverso_mod_a * (ord(char) - ord('a') - b)) % 26 + ord('a'))
            elif char.isupper():
                descifrado += chr((inverso_mod_a * (ord(char) - ord('A') - b)) % 26 + ord('A'))
        else:
            descifrado += char
    return descifrado

# Ejemplo de uso
texto = "Hola, Mundo!"
a = 5
b = 8
cifrado = cifrado_afin(texto, a, b)
descifrado = descifrado_afin(cifrado, a, b)
print("Cifrado:", cifrado)
print("Descifrado:", descifrado)
