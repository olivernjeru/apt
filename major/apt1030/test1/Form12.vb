Public Class Form12
    Dim N As Integer
    Structure StudentRecord
        Dim Name As String
        Dim TestScore1 As Single
        Dim TestScore2 As Single
        Dim TestScore3 As Single
        Dim TestTotal As Single
        Dim StdAverage As Single
        Dim StdGrade As String

    End Structure

    Private Sub Form12_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        txtNoofStudents.Text = InputBox("How many students:")
        N = Val(txtNoofStudents.Text)
    End Sub

    Private Sub btnOk_Click(sender As Object, e As EventArgs) Handles btnOk.Click
        Dim sum As Single = 0
        Dim sum2 As Single = 0
        Dim Average As Single = 0
        Dim StdAvg As Single = 0
        Dim i As Integer
        Dim Grade As String

        Dim student(N) As StudentRecord
        For i = 0 To N - 1
            txtName.Text = InputBox("Enter student Name:")
            student(i).Name = txtName.Text
            txtTest1.Text = InputBox("EnterTest 1 score :")
            student(i).TestScore1 = Val(txtTest1.Text)
            txtTest2.Text = InputBox("Enter Test 2 score:")
            student(i).TestScore2 = Val(txtTest2.Text)
            txtTest3.Text = InputBox("Enter Test 3 score:")
            student(i).TestScore3 = Val(txtTest3.Text)
            student(i).TestTotal = student(i).TestScore1 + student(i).TestScore2 + student(i).TestScore3
            txtTestTotal.Text = Str(student(i).TestTotal)
            sum = sum + student(i).TestTotal
            student(i).StdAverage = student(i).TestTotal / 3
            If (student(i).StdAverage < 40) Then
                student(i).StdGrade = "E"
            ElseIf (student(i).StdAverage < 50) Then
                student(i).StdGrade = "D"
            ElseIf (student(i).StdAverage < 60) Then
                student(i).StdGrade = "C"
            ElseIf (student(i).StdAverage < 70) Then
                student(i).StdGrade = "B"
            Else
                student(i).StdGrade = "A"

            End If
            txtStudentAverage.Text = Str(student(i).StdAverage)
            ListBox1.Items.Add(txtName.Text + vbTab + txtTest1.Text + vbTab + txtTest2.Text + vbTab + txtTest3.Text + vbTab + txtTestTotal.Text + vbTab + txtClassMeanScore.Text + vbTab + student(i).StdGrade)
            sum2 += student(i).StdAverage
        Next
        txtClassTotalScore.Text = Str(sum)
        Average = sum2 / N
        If (Average < 40) Then
            Grade = "E"
        ElseIf (Average < 50) Then
            Grade = "D"
        ElseIf (Average < 60) Then
            Grade = "C"
        ElseIf (Average < 70) Then
            Grade = "B"
        Else
            Grade = "A"

        End If

        txtClassMeanScore.Text = Str(Average)
        txtClassMeanGrade.Text = Grade

    End Sub
End Class