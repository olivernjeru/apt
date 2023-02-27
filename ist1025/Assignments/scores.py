studentmarks = int(input("Enter a score and when you are done, enter -1: "))
numberofmarks = 0
totalmarks = 0


while studentmarks != -1:
    totalmarks += int(studentmarks)
    numberofmarks += 1
    studentmarks = int(input("Enter a score and when you are done, enter -1: "))

averagescore=totalmarks/numberofmarks   
print("The average score of", numberofmarks ,"students is ",averagescore) 
if averagescore >= 90:
    print("Well done class!")