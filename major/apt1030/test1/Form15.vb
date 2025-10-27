Public Class Form15
    Dim N As Integer

    Structure StudentRecord
        Dim studentname As String
        Dim studentweight As Double
        Dim studentheight As Double
        Dim sumheight As Double
        Dim classBMI As Double
        Dim remark As String
    End Structure
    'Private Sub Form15_Load(sender As Object, e As EventArgs) Handles MyBase.Load
    'N = InputBox("Please Enter the Number of Students in the class: ")
    'txtNoofStudents.Text = N
    'End Sub

    Private Sub btnOk_Click(sender As Object, e As EventArgs) Handles btnOk.Click
        N = InputBox("Please Enter the Number of Students in the class: ")
        txtNoofStudents.Text = N
        Dim counter As Integer

        Dim student(N) As StudentRecord
        lstBox.Items.Add("Name" & vbTab & "Weight" & vbTab & "Height" & vbTab & "BMI" & vbTab & "Remark")
        lstBox.Items.Add("===============================================================================")

        For counter = 0 To N - 1
            student(counter).studentweight = InputBox("Please enter the student's weight")
            txtStudentWeight.Text = student(counter).studentweight
            student(counter).studentheight = InputBox("Please enter the student's height")
            txtStudentHeight.Text = student(counter).studentheight
            student(counter).studentname = InputBox("Please enter student name: ")
            txtStudentName.Text = student(counter).studentname
            Dim sumweight As Double
            sumweight += student(counter).studentweight
            Dim averageclassweight As Double
            averageclassweight = Math.Round((sumweight / N), 2)
            txtAverageClassWeight.Text = averageclassweight
            Dim sumheight As Double
            sumheight += student(counter).studentheight
            Dim averageclassheight As Double
            averageclassheight = Math.Round((sumheight / N), 2)
            txtAverageClassHeight.Text = averageclassheight
            Dim averageclassbmi As Double
            averageclassbmi = Math.Round(averageclassweight / (averageclassheight ^ 2), 2)
            txtAverageClassBMI.Text = averageclassbmi
            If N <= 1 Then
                Dim bmi As Double
                bmi = Math.Round(student(counter).studentweight / (student(counter).studentheight ^ 2), 2)
                If bmi <= 18.5 Then
                    student(counter).remark = "Underweight"
                    txtRemark.Text = student(counter).remark
                ElseIf bmi > 18.5 And bmi <= 24.9 Then
                    student(counter).remark = "Normal weight"
                    txtRemark.Text = student(counter).remark
                ElseIf bmi >= 25 And bmi <= 29.9 Then
                    student(counter).remark = "Overweight"
                    txtRemark.Text = student(counter).remark
                Else
                    student(counter).remark = "Obesse"
                    txtRemark.Text = student(counter).remark
                End If
                lstBox.Items.Add(student(counter).studentname & vbTab & student(counter).studentweight & vbTab & student(counter).studentheight & vbTab & bmi & vbTab & student(counter).remark)

            Else
                Dim bmi As Double
                bmi = Math.Round(student(counter).studentweight / (student(counter).studentheight ^ 2), 2)
                If bmi <= 18.5 Then
                    student(counter).remark = "Underweight"
                ElseIf bmi > 18.5 And bmi <= 24.9 Then
                    student(counter).remark = "Normal weight"
                ElseIf bmi >= 25 And bmi <= 29.9 Then
                    student(counter).remark = "Overweight"
                Else
                    student(counter).remark = "Obesse"
                    txtRemark.Text = student(counter).remark
                End If
                lstBox.Items.Add(student(counter).studentname & vbTab & student(counter).studentweight & vbTab & student(counter).studentheight & vbTab & bmi & vbTab & student(counter).remark)
                If averageclassbmi <= 18.5 Then
                    student(counter).remark = "Underweight"
                    txtRemark.Text = student(counter).remark
                ElseIf averageclassbmi > 18.5 And averageclassbmi <= 24.9 Then
                    student(counter).remark = "Normal weight"
                    txtRemark.Text = student(counter).remark
                ElseIf averageclassbmi >= 25 And averageclassbmi <= 29.9 Then
                    student(counter).remark = "Overweight"
                    txtRemark.Text = student(counter).remark
                Else
                    student(counter).remark = "Obesse"
                    txtRemark.Text = student(counter).remark
                End If
            End If
        Next

    End Sub

    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        txtAverageClassBMI.Clear()
        txtAverageClassHeight.Clear()
        txtAverageClassWeight.Clear()
        txtNoofStudents.Clear()
        txtRemark.Clear()
        txtStudentHeight.Clear()
        txtStudentName.Clear()
        txtStudentWeight.Clear()
        lstBox.Items.Clear()
    End Sub
End Class