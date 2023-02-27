first_number = int(input("Enter the first number: "))
second_number = int(input("Enter the second number: "))

difference = first_number -second_number

if difference > 0:
    print("The number that is closest to 10 is ", first_number)
else:
    print("The number that is closest to 10 is ", second_number)
