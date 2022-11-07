Public Class Form8
    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        txtTaxVariable.Clear()
        txtTaxRate.Clear()
        txtTax.Clear()
    End Sub

    Private Sub btnNext_Click(sender As Object, e As EventArgs) Handles btnNext.Click
        Form9.Show()
        Me.Visible = False
    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click
        Form7.Show()
        Me.Visible = False
    End Sub

    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click
        Dim tv As Double
        Dim tr As Double
        Dim tax As Double

        If txtTaxVariable.Text = 1 Or txtTaxVariable.Text = 3 Then
            tr = (4 / 100) * txtTaxVariable.Text
            tax = txtTaxVariable.Text - tr
        ElseIf txtTaxVariable.Text = 2 Then
            tr = (5 / 100) * txtTaxVariable.Text
            tax = txtTaxVariable.Text - tr
        ElseIF txtTaxVariable.Text >= 4 Then
            tr = (2 / 100) * txtTaxVariable.Text
            tax = txtTaxVariable.Text - tr
        End If

        txtTaxVariable.Text = tv
        txtTaxRate.Text = tr
        txtTax.Text = tax
    End Sub
End Class