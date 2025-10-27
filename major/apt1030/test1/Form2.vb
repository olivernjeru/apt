Public Class Form2
    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click
        Dim s As Integer
        Dim sum As Integer
        sum = 0
        Dim cm As Double
        Dim cg As String

        For counter = 1 To 10
            s = InputBox("Enter the score:")
            lstBox.Items.Add(s)
            sum += s

        Next

        cm = sum / 10

        If cm <= 39 Then
            cg = "E"
        ElseIf cm <= 49 And cm >= 40 Then
            cg = "D"
        ElseIf cm <= 59 And cm >= 50 Then
            cg = "C"
        ElseIf cm <= 69 And cm >= 60 Then
            cg = "B"
        Else
            cg = "A"
        End If

        txtClassMean.Text = cm
        txtTotal.Text = sum
        txtClassMeanGrade.Text = cg

    End Sub

    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        txtClassMean.Text = ""
        txtTotal.Text = ""
        txtClassMeanGrade.Clear()
        lstBox.Items.Clear()
    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click
        Form1.Show()
        Me.Visible = False
    End Sub

    Private Sub btnNext_Click(sender As Object, e As EventArgs) Handles btnNext.Click
        Form3.Show()
        Me.Visible = False
    End Sub
End Class