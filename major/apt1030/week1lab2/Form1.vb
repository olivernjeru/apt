'areaofarectangle
Public Class Form1
    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click
        Dim l As Double
        l = txtLength.Text
        '' To capture input via an input box from the user ''
        '' l = InputBox("Enter the length")
        Dim w As Double
        w = txtWidth.Text
        '' To capture the input via an input box from the user
        '' w = InputBox("Enter the width")
        Dim s As Integer
        s = l + w
        Dim p As Double
        p = 2 * s
        txtPerimeter.Text = p
        Dim a As Double
        a = l * w
        txtArea.Text = a
    End Sub

    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        txtLength.Text = ""
        txtLength.Clear()
        txtWidth.Text = ""
        txtWidth.Clear()
        txtPerimeter.Text = ""
        txtPerimeter.Clear()
        txtArea.Text = ""
        txtArea.Clear()
    End Sub
End Class
