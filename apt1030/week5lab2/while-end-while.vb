Public Class while_end_while
    Private Sub Calculate_Click(sender As Object, e As EventArgs) Handles Calculate.Click
        Dim counter As Integer
        Dim SCORE As Double
        Dim Average As Double = 0
        Dim Sum As Double = 0
        counter = 1
        ' To clear items from a list, use the code below appropriately
        lstScores.Items.Clear()
        ' To clear items from a textbox, use the code below appropriately
        txtScore.Clear()
        txtSum.Clear()
        txtMean.Clear()

        While counter <= 10
            txtScore.Text = InputBox("Enter Student" & counter & "Score")
            SCORE = Val(txtScore.Text)
            lstScores.Items.Add(SCORE)
            Sum = Sum + SCORE
            Average = Sum / counter
            txtSum.Text = Str(Sum)
            txtMean.Text = Str(Average)
            counter = counter + 1
        End While
    End Sub
End Class