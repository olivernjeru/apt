Public Class Form7
    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click
        Dim ip As Double
        ip = InputBox("Please enter the Item Price")
        txtItemPrice.Text = ip
        Dim iq As Integer
        iq = InputBox("Please enter the Item Quantity")
        txtItemQuantity.Text = iq
        Dim d As Double
        Dim t As Double
        t = ip * iq

        If iq <= 5 Then
            d = 0.05 * t
            t -= d
            txtTotal.Text = t
        ElseIf iq > 5 Then
            d = 0.1 * t
            t -= d
            txtTotal.Text = t
        End If

    End Sub

    Private Sub btnNext_Click(sender As Object, e As EventArgs) Handles btnNext.Click
        Form8.Show()
        Me.Visible = False
    End Sub

    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        txtItemPrice.Text = ""
        txtItemQuantity.Clear()
        txtTotal.Clear()
    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click
        Form6.Show()
        Me.Visible = False
    End Sub
End Class