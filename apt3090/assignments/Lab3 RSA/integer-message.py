import math

# step 1
p = int(input('Please enter the value of p: '))
q = int(input('Please enter the value of q: '))

# step 2
n = p*q
print("n = ", n)

# step 3
phi = (p-1)*(q-1)
print("phi(n) = ", phi)

# step 4
e = int(input('Please select a value for e: '))
while(e<phi):
    if (math.gcd(e, phi) == 1):
        break
    else:
        e += 1

print("e = ", e)

# Step 5
def extended_gcd(a, b):
    if a == 0:
        return (b, 0, 1)
    else:
        g, y, x = extended_gcd(b % a, a)
        return (g, x - (b // a) * y, y)

def modinv(a, m):
    g, x, y = extended_gcd(a, m)
    if g != 1:
        raise Exception('Modular inverse does not exist')
    else:
        return x % m

d = modinv(e, phi)
print("d = ", d)

# Step 6
print(f'Public key: {e, n}')
print(f'Private key: {d, n}')

# Step 7
msg = int(input('Please enter an integer message: '))
print(f'Original message:{msg}')

# Step 8
C = pow(msg, e, n)
print(f'Encrypted message: {C}')

# Step 9
M = pow(C, d, n)
print(f'Decrypted message: {M}')
