Public Class Form9
    Dim marks(10) As Double
    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click
        Dim marks(500) As Double
        Dim i As Integer
        Dim sum As Double = 0
        sum = 0
        For i = 0 To 5
            txtStudentMarks.Text = InputBox("Please enter student marks:")
            lstBox.Items.Add(i + 1 & "." & "  " & txtStudentMarks.Text & "%")
            marks(i) = Val(txtStudentMarks.Text)
            sum += marks(i)
        Next

        txtSum.Text = sum

    End Sub

    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        txtStudentMarks.Text = ""
        txtSum.Text = ""
        lstBox.Items.Clear()
    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click
        Form8.Show()
        Me.Visible = "False"
    End Sub

    Private Sub btnNext_Click(sender As Object, e As EventArgs) Handles btnNext.Click
        Form10.Show()
        Me.Visible = "False"
    End Sub
End Class