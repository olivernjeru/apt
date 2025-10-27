#library(skimr)
# head(Employee_dataset)
# tail(Employee_dataset)
# str(Employee_dataset)
#skim(Employee_dataset)

library(DataExplorer)
DataExplorer:: create_report(Employee_dataset)

quantile(Employee_dataset$salary,0.25)
quantile(Employee_dataset$salary,0.75)
quantile(Employee_dataset$salary,0.95)
IQR(Employee_dataset$salbegin)

#correlation
View(Employee_dataset)
salary<-Employee_dataset$salary
jobcat<-Employee_dataset$jobcat
cor(salary, jobcat)

#ggplot2
library(ggplot2)
Plot1<-ggplot(Employee_dataset, aes(x=jobcat))+ geom_histogram(fill="green")
print(Plot1)

#add a data label
Plot1 + labs(title = "Jobtime")

# create a boxplot
Plot5<-ggplot(Employee_dataset, aes(x=gender, y=salary)) +geom_boxplot()
print(Plot5)

# create a violinplot
Plot5<-ggplot(Employee_dataset, aes(x=gender, y=salary, fill=gender)) +geom_violin()
print(Plot5)

# scatterplot
Plot6<-ggplot(Employee_dataset, aes(x=jobcat, y=salary, fill=jobcat)) +geom_point()
print(Plot6)
