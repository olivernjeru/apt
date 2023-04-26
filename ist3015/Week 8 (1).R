
#EDA
head(data1)
nrow(data2)
ncol(data2)
tail(data2)
skim(data2)
str(data2)
dim(data2)
View(data2)
#install packages
install.packages("readxl")
install.packages("tidyverse")

#Load dataset to the working envnt
library(readxl)
#Upload excel file
data1 <- read_excel(file.choose()) #prompts you to select file head(my_data)

#Quartiles
quantile(data1$salary,0.25)
quantile(df$`Credit amount`,0.75)
quantile(df$`Credit amount`,0.95)
IQR(df$`Credit amount`)

#further EDA
install.packages("DataExplorer")
library(DataExplorer)

DataExplorer::create_report(data1)

#Identify null values
is.na(df)
is.na(df$`Saving accounts`)

#correlations 
View(data1)
Salary<-data1$salary
Jobcat<-data1$jobcat
cor(Salary,Jobcat)

#Visualization with ggplot
install.packages("ggplot2")
library(ggplot2)
#1. Basic histogram used for Continuous data 
Plot1<-ggplot(data1, aes(x = jobtime)) + geom_histogram(fill="turquoise")
print(Plot1)

#add a data label
Plot1 + labs(title = "Jobtime")



#5. creating a boxplot
plot5<-ggplot(data1, aes(x=gender, y=salary, fill=gender)) + geom_boxplot()
plot5

#Violin
plot7=ggplot(data = df1, aes( x = gender,y = salary )) + geom_violin()
plot7

# Change the width of bins
Plot1<-ggplot(df, aes(x=jobtime)) + 
geom_histogram(binwidth=10)

#2. Column Barcharts
Plot2<-ggplot(df, aes(x=jobcat)) + geom_bar() + coord_flip()
Plot2
#add a data label
Plot2+ labs(title = "Jobcategories", x = "species_id")
 #Stacked barchart
plot3<-ggplot(df, aes(x = jobcat, fill = gender)) + geom_bar()
Plot3
 #Dotplot
plot4<-ggplot(df, aes(x = jobcat, fill = gender)) + 
geom_dotplot()
plot4
#5. creating a boxplot
plot5<-ggplot(df, aes(x=gender, y=salary)) + geom_boxplot()
plot5
#lineplot
plot6<-ggplot(df, aes( x = salbegin, y = salary)) + geom_line( )
plot6
#7. Creating a scatter plot
plot7=ggplot(data = df, aes( x = gender, y = salary )) + geom_point()
Plot7
#8. Plotting density plot
plot8<-ggplot(df, aes(x=salary))+
geom_density(linetype="dashed")
#Jitter
plot7=ggplot(data = df1, aes( x = gender,y = salary )) + geom_jitter()
Plot7
#Violin
plot7=ggplot(data = df1, aes( x = gender,y = salary )) + geom_violin()
 plot7
             

