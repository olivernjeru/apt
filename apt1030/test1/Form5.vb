Public Class Form5
    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click
        Dim w As Double
        w = txtWeight.Text
        Dim h As Double
        h = txtHeight.Text
        Dim b As Double
        b = w / (h * h)
        txtBmi.Text = b

        If b <= 18.5 Then
            txtYouare.Text = "Underweight"
        ElseIf b >= 18.5 And b <= 24.9 Then
            txtYouare.Text = "Normal Weight"
        ElseIf b >= 25 And b <= 29.9 Then
            txtYouare.Text = "Overweight"
        Else
            txtYouare.Text = "Obesse"
        End If
    End Sub

    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        txtWeight.Clear()
        txtHeight.Clear()
        txtBmi.Clear()
        txtYouare.Clear()
    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click
        Form4.Show()
        Me.Visible = False
    End Sub

    Private Sub btnNext_Click(sender As Object, e As EventArgs) Handles btnNext.Click
        Form6.Show()
        Me.Visible = False
    End Sub
End Class