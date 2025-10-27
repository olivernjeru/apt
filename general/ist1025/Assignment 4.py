#create an empty dictionary
myDict = {}

#access content from months.txt
with open('months.txt', 'r') as content:
        for line in content:
            splitLine = line.split()
            myDict[splitLine[0]] =int(splitLine[1])

#display the dictionary with the stored content
print(myDict)

#get the July key value which is July's number of days
July = myDict["July"]
#get the September key value which is September's number of days
September = myDict["September"]

#display the months and their respective number of days
print("The number of days in July is " + str(July) + ".", "\nThe number of days in September is " + str(September) + "." )