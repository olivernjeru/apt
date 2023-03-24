library(DataExplorer)
survey_data<-Survey_dataset
DataExplorer:: create_report(survey_data)

a <- c(2, 4, 6, 8)
b <- c(1, 3, 5, 7)
c <- c(-1, -2, -3, -4)
d <- c(0, 1, 0, -1)
a
b
c
d

M1 <- cbind(a, b, c, d)
M1
M1[3, 2]
rownames(M1) <- c("Vec1", "Vec2", "Vec3", "Vec4")
rownames
M1

# Subset the survey dataset for November only
november_data <- subset(survey_data, month == 11)
november_data

# Subset of survey dataset for September only
september_data <- subset(survey_data, month == 9)
september_data
