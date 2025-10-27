Public Class Form11
    Dim n As Integer
    Private Sub btnOk_Click(sender As Object, e As EventArgs) Handles btnOk.Click
        Dim marks(500) As Double
        Dim sum As Double = 0
        Dim Average As Double = 0
        Dim i As Integer
        Dim Grade As String
        For i = 0 To n - 1
            txtStudentScore.Text = InputBox("Enter Student Score")
            lstBox.Items.Add(txtClassMeanGrade.Text)
            marks(i) = Val(txtStudentScore.Text)
            sum += marks(i)
        Next
        Average = sum / n
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
        txtClassTotalScore.Text = Str(sum)
        txtClassMeanScore.Text = Str(Average)
        txtClassMeanGrade.Text = Grade
    End Sub

    Private Sub Form11_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        n = InputBox("Enter No of students")
        txtNoofStudents.Text = n
    End Sub
End Class