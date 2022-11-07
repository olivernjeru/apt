'areaofacircle
Public Class Form2
    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click
        Dim p As Double
        p = txtPi.Text
        txtPi.Text = 3.14
        Dim r As Double
        r = txtRadius.Text
        Dim a As Double
        a = p * r * r
        txtArea.Text = a
    End Sub
End Class