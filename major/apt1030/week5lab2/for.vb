Public Class Form1
    Private Sub Calculate_Click(sender As Object, e As EventArgs) Handles Calculate.Click
        Dim counter As Integer
        Dim SCORE As Double
        Dim Average As Double = 0
        Dim Sum As Double = 0

        For counter = 1 To 10
            txtScore.Text = InputBox("Enter Student" & counter & "Score")
            SCORE = Val(txtScore.Text)
            lstScores.Items.Add(SCORE)
            Sum = Sum + SCORE
            Average = Sum / counter
            txtSum.Text = Str(Sum)
            txtMean.Text = Str(Average)
        Next
    End Sub
End Class
