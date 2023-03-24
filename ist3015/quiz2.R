# create friends vector
friends<-c("Robert", 
           "Ochiel", 
           "Onchienku", 
           "Michelle", 
           "Mursi", 
           "Japeth", 
           "Rambo", 
           "Lorraine")
# display 2nd and 3rd friend
friends[2:3]

# sort() function
friends_sorted <- sort(friends)
print(friends_sorted)

# order() function
friends_ordered <- friends[order(friends)]
print(friends_ordered)



library(dplyr)

# JobID 1 subset
JobID_1 <- CRB_score_dataset %>%filter(JobID == 1)
JobID_1
# JobID 2 subset
JobID_2 <- CRB_score_dataset %>%filter(JobID == 2)
JobID_2


# Merge the data frames
merged_df <- rbind(JobID_1, JobID_2)
merged_df

# Sort by "Housing"
sorted_merged_df <- arrange(merged_df, Housing)
sorted_merged_df

library(ggplot2)
plot1<-ggplot(merged_df, 
              mapping=aes(x=`Credit amount`,
                          y=`Duration`,
                          color=`Housing`)) +
              geom_boxplot()+
              facet_wrap(merged_df$JobID)
plot1


plot2<-ggplot(data = CRB_score_dataset, 
              aes(x = Age, 
                  y = Duration, 
                  color = Housing, 
                  shape = Sex)) +
                  geom_point() +
                  geom_line() +
                  labs(title = "Duration distribution", 
                       x = "Age", 
                       y = "Duration")
plot2

# check for correlation
cust_age<-CRB_score_dataset$Age
duration<-CRB_score_dataset$Duration
cor(cust_age, duration)

contigency_tbl<- table(merged_df$Defaulter, cut(merged_df$`Credit amount`, breaks = 5))
chisq.test(contigency_tbl)
