Public Class Form6
    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click
        Dim h As Double
        Dim w As Double
        Dim nos As Integer
        nos = InputBox("Enter the Number of Students in a class")
        txtNoofstudentsinclass.Text = nos
        Dim counter As Integer
        Dim hs As Double
        Dim ws As Double

        For counter = 1 To nos
            h = InputBox("Please enter the height")
            counter = counter + counter
            lstBox.Items.Add(h)
            hs = h + h
        Next

        For counter = 1 To nos
            w = InputBox("Please enter the weight")
            counter = counter + counter
            lstBox.Items.Add(w)
            ws = w + w
        Next

        Dim wa As Double
        wa = ws / nos
        txtAverageclassweight.Text = wa

        Dim ha As Double
        ha = hs / nos
        txtAverageclassheight.Text = ha

        Dim bmi As Double
        bmi = wa / ha ^ 2
        txtAverageclassbmi.Text = bmi

        If bmi <= 18.5 Then
            txtThisclassis.Text = "Underweight"
        ElseIf bmi >= 18.5 And bmi <= 24.9 Then
            txtThisclassis.Text = "Normal Weight"
        ElseIf bmi >= 25 And bmi <= 29.9 Then
            txtThisclassis.Text = "Overweight"
        Else
            txtThisclassis.Text = "Obesse"
        End If

    End Sub

    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        lstBox.Items.Clear()
        txtAverageclassbmi.Clear()
        txtAverageclassheight.Clear()
        txtAverageclassweight.Clear()
    End Sub

    Private Sub btnNext_Click(sender As Object, e As EventArgs) Handles btnNext.Click
        Form7.Show()
        Me.Visible = False
    End Sub
End Class