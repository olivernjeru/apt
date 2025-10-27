import socket
from utils import *
import binascii


def Bob():
    private_key, public_key = generateRSAKey()
    print(
        f"Bob public key: {public_key.export_key().decode()}\n Bob private key: {private_key.export_key().decode()}\n")

    c = socket.socket()
    c.connect(('localhost', 9999))

    # send Bob's public key to receive an encrypted session key from Alice
    c.send(public_key.export_key())
    enc_session_key = c.recv(1024)
    print(f"Encrypted session key: {binascii.hexlify(enc_session_key)}\n")

    # only Bob's private key can decrypt the encrypted session key
    session_key = decryptSessionKey(enc_session_key, private_key)
    print(f"Decrypted Session key: {binascii.hexlify(session_key)}\n")

    # message from Bob to Alice
    request = bytes(input('Bob -> ').encode())
    while request.lower().strip() != b"bye":
        encrypted_request = encryptData(request, session_key)
        print(f"Encrypted message: {binascii.hexlify(encrypted_request)}\n")
        c.send(encrypted_request)

        # message from Alice to Bob
        encrypted_response = c.recv(1024)
        print(f"Encrypted response: {binascii.hexlify(encrypted_response)}\n")
        response = decryptData(encrypted_response, session_key)
        print("Alice:", response.decode())

        request = bytes(input('Bob -> ').encode())


if __name__ == "__main__":
    Bob()
