Public Class Form14
    Dim N As Integer
    Structure EmployeeRecord
        Dim employeenumber As Integer
        Dim employeename As String
        Dim basicsalary As Integer
        Dim allowances As Integer

        Dim netsalary As Integer
        Dim grosssalary As Integer
        Dim taxamount As Integer
    End Structure

    Private Sub Form14_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        txtNoofEmployees.Text = InputBox("How many employees:")
        N = Val(txtNoofEmployees.Text)
    End Sub

    Private Sub btnOk_Click(sender As Object, e As EventArgs) Handles btnOk.Click
        Dim i As Integer

        Dim employee(N) As EmployeeRecord
        lstBox.Items.Add("No" & vbTab & "Name" & vbTab & "Salary" & vbTab & "Allowa" & vbTab & "Gross" & vbTab & "Tax" & vbTab & "Net")
        lstBox.Items.Add("=======================================================================================================================")
        For i = 0 To N - 1
            employee(i).employeenumber = InputBox("Enter Employee Number:")
            txtEmployeeNumber.Text = employee(i).employeenumber
            employee(i).employeename = InputBox("Enter Employee Name:")
            txtEmployeeName.Text = employee(i).employeename
            employee(i).basicsalary = InputBox("Enter Basic Salary:")
            txtBasicSalary.Text = employee(i).basicsalary
            employee(i).allowances = InputBox("Enter Allowances:")
            txtAllowances.Text = employee(i).allowances
            employee(i).grosssalary = employee(i).basicsalary + employee(i).allowances

            If (employee(i).grosssalary < 10000) Then
                employee(i).taxamount = 0.05 * employee(i).grosssalary
            ElseIf (employee(i).grosssalary >= 10000 And employee(i).grosssalary <= 20000) Then
                employee(i).taxamount = 0.1 * employee(i).grosssalary
            Else
                employee(i).taxamount = 0.15 * employee(i).grosssalary
            End If
            employee(i).netsalary = employee(i).grosssalary - employee(i).taxamount
            txtGrossSalary.Text = employee(i).grosssalary
            txtTaxAmount.Text = employee(i).taxamount
            txtNetSalary.Text = employee(i).netsalary
            lstBox.Items.Add(employee(i).employeenumber & vbTab & employee(i).employeename & vbTab & employee(i).basicsalary & vbTab & employee(i).allowances & vbTab & employee(i).grosssalary & vbTab & employee(i).taxamount & vbTab & employee(i).netsalary)
        Next

    End Sub
End Class