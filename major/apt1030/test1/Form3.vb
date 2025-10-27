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

    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        txtBase.Text = ""
        txtBase.Clear()
        txtHeight.Text = ""
        txtHeight.Clear()
        txtArea.Text = ""
        txtArea.Clear()
    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click
        Form2.Show()
        Me.Visible = False
    End Sub

    Private Sub btnNext_Click(sender As Object, e As EventArgs) Handles btnNext.Click
        Form4.Show()
        Me.Visible = False
    End Sub
End Class