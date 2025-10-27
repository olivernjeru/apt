#countingentries
scorelist=[]
score=float(input("Enter a score or -1 to quit: "))
if score !=-1:
    scorelist.append(score)
    count=1

while score!=-1:
    score=float(input("Enter a score or -1 to quit:"))
if score!=-1:
    scorelist.append(score)
    count=count+1

print("You have", count, "scores.")
print("The total is", sum(scorelist))

print("The average )