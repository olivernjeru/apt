Public Class Form4
    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click
        Dim l As Double
        l = txtLength.Text
        Dim w As Double
        w = txtWidth.Text
        Dim s As Double
        s = l + w
        Dim p As Double
        p = 2 * s
        txtPerimeter.Text = p
        Dim a As Double
        a = l * w
        txtPerimeter.Text = a
    End Sub

    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        txtLength.Clear()
        txtWidth.Clear()
        txtPerimeter.Clear()
        txtArea.Clear()
    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click
        Form3.Show()
        Me.Visible = False
    End Sub

    Private Sub btnNext_Click(sender As Object, e As EventArgs) Handles btnNext.Click
        Form5.Show()
        Me.Visible = False
    End Sub
End Class