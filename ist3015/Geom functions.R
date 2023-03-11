library(ggplot2)
library("tidyverse")
library("readxl")
# Load it
library(ggplot2)
library(dplyr)
library(hrbrthemes)
library(viridis)
library(plotly)
#Geoms in ggplot
df1 <-Employee_dataset
View(df1)
head(df1)
#1.Scatter plot color by gender
Plot1<- ggplot(data=df1, 
               mapping=aes(x=salary, 
                           y=educ, 
                           col=gender))+
                geom_point()
Plot1
#2.Diffentiate gender by shapes
Plot2<- ggplot(data=df1, 
               mapping=aes(x=salary, 
                           y=educ, 
                           col=gender,
                           shape=gender))+
                geom_point()
Plot2
#3.Use smoothing function
Plot3<- ggplot(data=df1, 
               mapping=aes(x=salary, 
                           y=educ,
                      col=gender,
                      shape=gender))+ 
                geom_point() + 
                geom_smooth(color = "tomato") 

Plot3
#4.Add themes
Plot4<- ggplot(data=df1, 
               mapping=aes(x=salary, 
                           y=educ,
                          col=gender,
                          shape=gender))+ 
                geom_point() + 
                geom_smooth(color = "tomato") + 
                theme_dark()
                #theme_light()

Plot4
#5.Add alpha
Plot5<- ggplot(data=df1, 
               mapping=aes(x=salary, 
                           y=educ,
                          col=gender,
                          shape=gender))+ 
                geom_point(alpha=0.7) + 
                geom_smooth(color = "tomato") 

Plot5
#6.Jitter plot
Plot6<- ggplot(data=df1, 
               mapping=aes(x=salary, 
                           y=salbegin,))+ 
                geom_jitter(alpha=0.9) + 
                geom_smooth(color="orange") 

Plot6
#7.facetwrap
#make multi-panel plots and control how the scales of one panel 
#relate to the scales of another
Plot7<- ggplot(data=df1, 
               mapping=aes(x=salary, 
                           y=salbegin,
                          color=gender, 
                          shape=gender))+ 
                geom_boxplot(alpha=0.9) + 
                facet_wrap(~jobcat)

Plot7
#8.Plotly
#Jitter
Plot8=ggplot(data = df1, 
             aes(x = gender,
                 y = salary,
                 col=jobcat, 
                 shape=gender)) + 
                geom_jitter()
Plot8
ggplotly(Plot8)
#9.Violin
Plot9=ggplot(data = df1, 
             aes(x = prevexp,
                 y = educ, 
                 fill="violet")) + 
                  geom_violin(color="tomato")
Plot9

#10.rectangles
Plot10<-ggplot(df1, 
               aes(x = educ, 
                   y = salary)) +
                    geom_tile(linetype="twodash" ) + 
                    ggtitle("raster") + 
                    theme_dark() + 
                    theme(plot.title = element_text(hjust = 0.5))

Plot10

