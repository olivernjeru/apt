import random
import math

class PrimeNumberGenerator:
    @staticmethod
    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, int(math.sqrt(num)) + 1):
            if num % i == 0:
                return False
        return True

    @staticmethod
    def generate_prime_in_range(start, end):
        prime = None  # Initialize prime to None
        for _ in range(start, end + 1):
            num = random.randint(start, end)
            if PrimeNumberGenerator.is_prime(num):
                return num
        return prime

class EulerTotientCalculator:
    @staticmethod
    def euler_totient_function(n):
        result = n

        for p in range(2, int(math.sqrt(n)) + 1):
            if n % p == 0:
                while n % p == 0:
                    n //= p
                result -= result // p

        if n > 1:
            result -= result // n

        return result

def main():
    start_range = 0
    end_range = 200

    p = PrimeNumberGenerator.generate_prime_in_range(start_range, end_range)
    q = PrimeNumberGenerator.generate_prime_in_range(start_range, end_range)

    if p is not None and q is not None:
        n = p * q
        euler_totient_p = EulerTotientCalculator.euler_totient_function(p)
        euler_totient_q = EulerTotientCalculator.euler_totient_function(q)
        euler_totient = euler_totient_p * euler_totient_q


        print(f"Randomly generated prime number p: {p}")

        print(f"Randomly generated prime number q: {q}")

        print(f"n value is {n}")

        print(f"Euler's Totient function applied to values: {euler_totient_p} and {euler_totient_q} is {euler_totient}")
    else:
        print("No prime numbers found in the specified range.")

if __name__ == "__main__":
    main()
