def encrypt(msg):
    """Encrypts a plaintext message"""
    code=''
    for ch in msg:
        code = code + str(ord(ch)) + " "
    return code
def decrypt(code):
    """Decrypts an encoded message"""
    original=''
    for number in code .split():
        original = original + chr(int(number))
    return original

def main():
    mymsg=input("Enter your message: ")
    