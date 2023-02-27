n = int(input("Enter a number between 1 and 12: "))

total = 0

i=0

if 12>= n >=1:
        while i < len(range(1+n+1)):
            total = total + i;
            i+=1
        print("The sum of numbers from 1 to", n, "is", total)
else:
    print("Please enter a number between 1 and 12.")

