#q3)a
# Load the 'iris' dataset
data(iris)

# Print the first few rows of the dataset
head(iris)

# Check whether it is a data frame
is.data.frame(iris)

tail(iris)

#q3)b
# Create the vectors
Vec1_Age <- c(34, 40, 30, 23, 21, 24, 44, 60, 90, 94)
Vec2_Height <- c(1.7, 1.65, 1.2, 1.69, 1.51, 1.36, 2.37, 2.08, 1.5, 1.6)

# Combine the vectors into a matrix
age_height <- cbind(Vec1_Age, Vec2_Height)

# Print the resulting matrix
age_height


#q3)c
# Calculate the sum, mean, and product of the vectors
vec1_sum <- sum(Vec1_Age)
vec2_sum <- sum(Vec2_Height)
vec1_mean <- mean(Vec1_Age)
vec2_mean <- mean(Vec2_Height)
vec1_product <- prod(Vec1_Age)
vec2_product <- prod(Vec2_Height)

# Print the results
cat("Results for Vec1_Age:\n")
cat("Sum =", vec1_sum, "\n")
cat("Mean =", vec1_mean, "\n")
cat("Product =", vec1_product, "\n\n")
cat("Results for Vec2_Height:\n")
cat("Sum =", vec2_sum, "\n")
cat("Mean =", vec2_mean, "\n")
cat("Product =", vec2_product, "\n")

#q3)d
df <- data.frame(Age = Vec1_Age, Height = Vec2_Height)

#print the dataframe
df

#q3)d)i
library(ggplot2)
plot <- ggplot(df, aes(x=Age, y=Height)) + geom_line()
plot

#q3)d)ii
plot2 <- ggplot(df, aes(y=Height)) +geom_boxplot()
plot2

#q3)d)iii
hist(Vec1_Age)
