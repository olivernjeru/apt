# def tri_recursion(k):
#   if(k>0):
#     result = k+tri_recursion(k-1)
#     print(result)
#   else:
#     result = 0
#   return result

# print("\n\nRecursion Example Results")
# tri_recursion(6)

def get_recursive_factorial(n):
  if n < 0:
    return -1
  elif n < 2:
    return 1
  else:
    return n * get_recursive_factorial(n-1)

def get_iterative_factorial(n):
  if n < 0:
    return -1
  else:
    fact=1
    for i in range(1, n+1):
      fact *=i
    return fact

print(get_recursive_factorial(5))
print(get_recursive_factorial(6))