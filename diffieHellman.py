import random

def diffie_hellman():
    # Valores compartidos públicamente
    p = 23
    g = 5

    # Clave privada de Alice
    a = random.randint(1, 10)
    A = (g ** a) % p

    # Clave privada de Bob
    b = random.randint(1, 10)
    B = (g ** b) % p

    # Secreto compartido
    s_alice = (B ** a) % p
    s_bob = (A ** b) % p

    assert s_alice == s_bob
    return s_alice

# Ejemplo de uso
secreto_compartido = diffie_hellman()
print("Secreto Compartido:", secreto_compartido)
