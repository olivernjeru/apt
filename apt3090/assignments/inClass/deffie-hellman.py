import random

def compute(a, m, n):
    y = 1

    while m > 0:
        r = m % 2

        # fast exponentiation 
        if r == 1:
            y = (y * a) % n
        a = (a * a) % n

        m //= 2

    return y

def main():
    p = 311  # modulus
    g = 5    # base

    # Alice's Secret Key
    a = random.randint(300, 400)

    # Calculate Alice's Public Key
    A = compute(g, a, p)

    # Bob's Secret Key
    b = random.randint(300, 400)

    # Calculate Bob's Public Key
    B = compute(g, b, p)

    # Alice and Bob exchange their Public Key A & B with each other

    # Find Secret key
    keyA = compute(B, a, p)
    keyB = compute(A, b, p)

    print(f"Alice's Secret Key is {keyA}")
    print(f"Bob's Secret Key is {keyB}")

if __name__ == "__main__":
    main()
