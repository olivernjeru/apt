dict={}
file=open("months.txt")
for line in file:
    key,value=line.split()
    dict[key]=value
    print(dict)