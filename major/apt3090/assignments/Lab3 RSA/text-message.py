import math

# Function to calculate mod inverse
def mod_inverse(e, phi):
    d = 0
    x1, x2 = 0, 1
    y1, y2 = 1, 0
    temp_phi = phi

    while e > 0:
        temp1 = temp_phi // e
        temp2 = temp_phi - temp1 * e
        temp_phi = e
        e = temp2

        x = x2 - temp1 * x1
        y = y2 - temp1 * y1

        x2 = x1
        x1 = x
        y2 = y1
        y1 = y

    if temp_phi == 1:
        d = y2 + phi

    return d

# Function to generate public and private keys
def generate_keys(p, q, e):
    n = p * q
    phi = (p - 1) * (q - 1)
    d = mod_inverse(e, phi)
    return (n, e), (n, d)

# Function to encrypt a message
def encrypt(message, public_key):
    n, e = public_key
    encrypted_message = []
    for char in message:
        encrypted_char = pow(ord(char), e, n)
        encrypted_message.append(encrypted_char)
    return encrypted_message

# Function to decrypt a message
def decrypt(encrypted_message, private_key):
    n, d = private_key
    decrypted_message = ""
    for char in encrypted_message:
        decrypted_char = pow(char, d, n)
        decrypted_message += chr(decrypted_char)
    return decrypted_message

# Get user input for Alice and Bob Message
alice_message = input('Alice message to Bob: ')
bob_message = input('Bob message to Alice: ')

# Predefined prime numbers p and q
p = 61
q = 53

# Predefined public exponent e
e = 17

# Generate keys for Alice and Bob
alice_public_key, alice_private_key = generate_keys(p, q, e)
bob_public_key, bob_private_key = generate_keys(p, q, e)

# Encryption
alice_encrypted_message = encrypt(alice_message, alice_public_key)
bob_encrypted_message = encrypt(bob_message, bob_public_key)

print("Alice's Encrypted Message:", alice_encrypted_message)
print("Bob's Encrypted Message:", bob_encrypted_message)

# Decryption
alice_decrypted_message = decrypt(alice_encrypted_message, alice_private_key)
bob_decrypted_message = decrypt(bob_encrypted_message, bob_private_key)

print("Alice's Decrypted Message:", alice_decrypted_message)
print("Bob's Decrypted Message:", bob_decrypted_message)
