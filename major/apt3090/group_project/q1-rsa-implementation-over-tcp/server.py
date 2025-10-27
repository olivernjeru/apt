import socket
from utils import *
from Crypto.PublicKey import RSA
import re
import string
import binascii


def sanitizeRequest(request):
    # Allow alphanumeric characters, spaces, and punctuation
    allowed_chars = string.ascii_letters + string.digits + string.punctuation + ' '
    pattern = f'[^{re.escape(allowed_chars)}]'
    sanitized_request = re.sub(pattern, '', request.decode())
    return sanitized_request


def Alice():

    session_key = generateSessionKey()
    print(f"Decrypted Session key: {binascii.hexlify(session_key)}\n")

    s = socket.socket()
    print('Socket created')
    s.bind(('localhost', 9999))

    s.listen(1)
    print('Waiting for connection...')

    c, addr = s.accept()
    print('Connected with ', addr)

    # to share session key using RSA
    c_public_key = RSA.import_key(c.recv(1024))
    print(f"Bob public key: {c_public_key.export_key().decode()}\n")
    enc_session_key = encryptSessionKey(session_key, c_public_key)
    print(f"Encrypted session key: {binascii.hexlify(enc_session_key)}\n")
    c.send(bytes(enc_session_key))

    while True:
        # message from Bob to Alice
        encrypted_request = b""
        while True:
            chunk = c.recv(4096)
            encrypted_request += chunk
            if len(chunk) < 1024:
                break
        if not encrypted_request:
            break
        print(f"Encrypted message: {binascii.hexlify(encrypted_request)}\n")
        request = decryptData(encrypted_request, session_key)
        sanitized_request = sanitizeRequest(request)
        print("Bob:", sanitized_request)

        # message from Alice to Bob
        response = bytes(input("Alice -> ").encode())
        encrypted_response = encryptData(response, session_key)
        print(f"Encrypted response: {binascii.hexlify(encrypted_response)}\n")
        c.send(encrypted_response)

    c.close()


if __name__ == "__main__":
    Alice()
