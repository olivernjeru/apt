numberofproducts = int(input("Enter number of products : "))
product = {}
for i in range(numberofproducts):
    p = input("Enter product name : ")
    product[p] = int(input("Enter its price : "))

q = True
while q:
    p = input("Enter product for price or q to exit : ")
    if p == "q":

        break

    if p in product:
        print("price of", p, "is", product[p])
    else:
        print(p, "is not here")