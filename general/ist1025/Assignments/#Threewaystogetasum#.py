#Threewaystogetasum#
a = [4, 9, 1, 5, 7, 23]
#add all the elements in the list together
total = 0 
#set accumulator to zero
for i in  range(len(a)):
    if i !=0:   
        total=total+a[i]

print("#1", total)

total=0
for item in a:
    total=total+item

print("Total #2", total)