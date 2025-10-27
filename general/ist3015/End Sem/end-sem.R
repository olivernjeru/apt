# Create the vectors
Month <- c("July", "August", "September", "October", "November")
sales <- c(65000, 80000, 123000, 75000, 45000)
c_o_s <- c(15000, 20000, 34000, 32000, 36000)

# Create the data frame
Dataframe1 <- data.frame(Month, sales, c_o_s)

# Add Gross_profit Column
Dataframe1$Gross_profit <- Dataframe1$sales - Dataframe1$c_o_s

# Print the data frame
Dataframe1

# Add Total row using sum function
Dataframe1[nrow(Dataframe1) + 1,] <- c("Total", sum(Dataframe1$sales), sum(Dataframe1$c_o_s), sum(Dataframe1$Gross_profit))

# Print the updated data frame
Dataframe1

# Conduct EDA with Data Explorer::create_report function
DataExplorer::create_report(BankChurners_1_)

# load the dataset
bnk_crs <- BankChurners_1_

# Filter Gold or Platinum and an educational level of Postgraduate or Uneducated
subset_data <- subset(bnk_crs, Card_Category %in% c("Gold", "Platinum") & Education_Level %in% c("Post-Graduate", "Uneducated"))

# Display top 6 categories
top_categories <- head(sort(table(subset_data$Attrition_Flag)), 6)
print(top_categories)

# average months_on_book

# Calculate the average "Months_on_book" for the subset of churners
avg_months_on_book <- mean(subset_data$Months_on_book)

# Display the average "Months_on_book"
print(avg_months_on_book)

# Select only churners with Credit_Limit between 2400 and 5200
credit_limit_df <- subset(bnk_crs, Credit_Limit >= 2400 & Credit_Limit <= 5200)

# Display the new data frame
print(credit_limit_df)


# Load libraries
library(ggplot2)
library(dplyr)

# Convert Education_Level column to factor
bnk_crs$Education_Level <- factor(bnk_crs$Education_Level)

# Create the scatter plot with education levels
ggplot(data = bnk_crs, aes(x = Months_on_book, y = Credit_Limit, color = Education_Level)) + 
  geom_point() + 
  labs(title = "Relationship between Months_on_book and Credit_Limit by Education_Level", 
       x = "Months_on_book", y = "Credit_Limit")

# implemented facet wrap
ggplot(data = bnk_crs, aes(x = Months_on_book, y = Credit_Limit, color = Education_Level)) + 
  geom_point() + 
  facet_wrap(~ Marital_Status) +
  labs(title = "Relationship between Months_on_book and Credit_Limit by Education_Level and Marital_Status", 
       x = "Months_on_book", y = "Credit_Limit")

# Set the mean and standard deviation
mu <- 20
sigma <- 4.5

# Calculate the z-scores for the lower and upper bounds
z_lower <- (15 - mu) / sigma
z_upper <- (22 - mu) / sigma

# Use pnorm() to calculate the area under the normal curve between the z-scores
prob_between <- pnorm(z_upper) - pnorm(z_lower)

# Multiply the probability by the sample size to get the number of students
n_between <- round(prob_between * 75)

# Print the result
cat(n_between, "students scored between 15 and 22 on test 1.")




