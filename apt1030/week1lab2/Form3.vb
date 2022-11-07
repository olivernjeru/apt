'areaofatriangle
Public Class Form3
    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click
        Dim b As Double
        b = txtBase.Text
        Dim h As Double
        h = txtHeight.Text
        Dim a As Double
        a = 0.5 * b * h
        txtArea.Text = a
    End Sub
End Class