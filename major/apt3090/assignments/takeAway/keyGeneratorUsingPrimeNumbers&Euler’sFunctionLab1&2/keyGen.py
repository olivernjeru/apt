import random

class PrimeNumberGenerator:
    @staticmethod
    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                return False
        return True

    @staticmethod
    def generate_prime_in_range(start, end):
        for _ in range(start, end + 1):
            num = random.randint(start, end)
            if PrimeNumberGenerator.is_prime(num):
                return num
        return None

if __name__ == "__main__":
    start_range = 0
    end_range = 1000

    p = PrimeNumberGenerator.generate_prime_in_range(start_range, end_range)
    q = PrimeNumberGenerator.generate_prime_in_range(start_range, end_range)

    if p is not None and q is not None:
        print(f"Randomly generated prime number p: {p}")
        print(f"Randomly generated prime number q: {q}")
    else:
        print("No prime number found in the specified range")
