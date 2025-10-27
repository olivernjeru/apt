num1=int(input("Please Enter your first Number: "))
num2=int(input("Please Enter your second Number: "))

def sum(num1, num2):
    sum=num1+num2
    return sum

def subtraction(num1, num2):
    subtraction=num1-num2
    return subtraction

def multiplication(num1, num2):
    multiplication=num1*num2
    return multiplication

def division(num1, num2):
    division=num1/num2
    return division

print("The sum of the numbers is: ", sum(num1, num2))
print("The subtraction of the numbers is: ", subtraction(num1, num2))
print("The multiplication of the numbers is: ", multiplication(num1, num2))
print("The division of the numbers is: ", division(num1, num2))