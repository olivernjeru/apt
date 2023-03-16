#q2)a
ngara_district_data<-Ngara_district_dataset

# Display Histogram for the Second column
hist(ngara_district_data$`Total Rural population`)

# Display Histogram for the third column
hist(ngara_district_data$`Population_with_ Clean Water`)

#q2)b
# create a dataframe
ngara_data_frame<-data.frame(ward=ngara_district_data$Ward,
                             Total_Rural_Population=ngara_district_data$`Total Rural population`, 
                              Population_with_Clean_Water=ngara_district_data$`Population_with_ Clean Water`,
                              Percent_Population_Served_with_Clean_Water=ngara_district_data$`Percent Population Served with Clean Water`)

# Rename the respective dataframe columns
names(ngara_data_frame)[2:4] <- c("A", "B", "C")

# Show the renamed dataframe columns
head(ngara_data_frame)

#q2)c, d
# Create a line plot for column B and C
line_plot<-ggplot(ngara_data_frame,
            aes(x=B, y=C)) +
            geom_line() +
          labs(title="Total Rural population vs Population with_ Clean Water")
line_plot

#q2)e
# Create a new data frame that does not have B
df_new <- ngara_data_frame[, c("ward", "A", "C")]
head(df_new, n=6)

#q2)f
# Add a new column 'D' to the dataframe where 'A - B' = 'D'
ngara_data_frame$D <- (ngara_data_frame$A - ngara_data_frame$B)
head(ngara_data_frame)

#q2)g
# Drop rows with 'Kabanga' and 'Bukiriro' in the 'ward' column
df_updated <- ngara_data_frame[!ngara_data_frame$ward %in% c("Kabanga", "Bukiriro"), ]

# Count the new total number of wards in the new dataframe
total_wards <- nrow(df_updated)

# Print the new dataframe and the total number of wards
print(df_updated)
cat("\nTotal number of wards: ", total_wards)
