#pythonafter-classexercise1#
username = str(input("Enter your name: "))
userwallet = float(input("Enter the amount of money you have: $"))
priceofitem = float(input("Enter the price of the item you wish to purchase: $"))
userupdatedwallet = userwallet - priceofitem
print(username , ", your wallet balance is: $" , userupdatedwallet)