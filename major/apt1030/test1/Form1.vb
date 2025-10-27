Public Class Form1
    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click
        Dim p As Double
        p = txtPi.Text
        Dim r As Double
        r = txtRadius.Text
        Dim a As Double
        a = p * r * r
        txtArea.Text = a
    End Sub

    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        txtRadius.Text = ""
        txtRadius.Clear()
        txtArea.Text = ""
        txtArea.Clear()
    End Sub

    Private Sub btnNext_Click(sender As Object, e As EventArgs) Handles btnNext.Click
        Form2.ShowDialog()
        Me.Visible = False
    End Sub
End Class
