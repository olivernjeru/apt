<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form11
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.lblNoOfStudents = New System.Windows.Forms.Label()
        Me.lblStudentScore = New System.Windows.Forms.Label()
        Me.lblClassTotalScore = New System.Windows.Forms.Label()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.Label5 = New System.Windows.Forms.Label()
        Me.txtNoofStudents = New System.Windows.Forms.TextBox()
        Me.txtStudentScore = New System.Windows.Forms.TextBox()
        Me.txtClassTotalScore = New System.Windows.Forms.TextBox()
        Me.txtClassMeanScore = New System.Windows.Forms.TextBox()
        Me.txtClassMeanGrade = New System.Windows.Forms.TextBox()
        Me.lstBox = New System.Windows.Forms.ListBox()
        Me.btnOk = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'lblNoOfStudents
        '
        Me.lblNoOfStudents.AutoSize = True
        Me.lblNoOfStudents.Location = New System.Drawing.Point(453, 59)
        Me.lblNoOfStudents.Name = "lblNoOfStudents"
        Me.lblNoOfStudents.Size = New System.Drawing.Size(101, 15)
        Me.lblNoOfStudents.TabIndex = 0
        Me.lblNoOfStudents.Text = "NO OF STUDENTS"
        '
        'lblStudentScore
        '
        Me.lblStudentScore.AutoSize = True
        Me.lblStudentScore.Location = New System.Drawing.Point(453, 123)
        Me.lblStudentScore.Name = "lblStudentScore"
        Me.lblStudentScore.Size = New System.Drawing.Size(80, 15)
        Me.lblStudentScore.TabIndex = 1
        Me.lblStudentScore.Text = "Student Score"
        '
        'lblClassTotalScore
        '
        Me.lblClassTotalScore.AutoSize = True
        Me.lblClassTotalScore.Location = New System.Drawing.Point(453, 186)
        Me.lblClassTotalScore.Name = "lblClassTotalScore"
        Me.lblClassTotalScore.Size = New System.Drawing.Size(94, 15)
        Me.lblClassTotalScore.TabIndex = 2
        Me.lblClassTotalScore.Text = "Class Total Score"
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Location = New System.Drawing.Point(453, 253)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(99, 15)
        Me.Label4.TabIndex = 3
        Me.Label4.Text = "Class Mean Score"
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Location = New System.Drawing.Point(453, 316)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(101, 15)
        Me.Label5.TabIndex = 4
        Me.Label5.Text = "Class Mean Grade"
        '
        'txtNoofStudents
        '
        Me.txtNoofStudents.Location = New System.Drawing.Point(561, 56)
        Me.txtNoofStudents.Name = "txtNoofStudents"
        Me.txtNoofStudents.Size = New System.Drawing.Size(100, 23)
        Me.txtNoofStudents.TabIndex = 5
        '
        'txtStudentScore
        '
        Me.txtStudentScore.Location = New System.Drawing.Point(561, 120)
        Me.txtStudentScore.Name = "txtStudentScore"
        Me.txtStudentScore.Size = New System.Drawing.Size(100, 23)
        Me.txtStudentScore.TabIndex = 6
        '
        'txtClassTotalScore
        '
        Me.txtClassTotalScore.Location = New System.Drawing.Point(561, 183)
        Me.txtClassTotalScore.Name = "txtClassTotalScore"
        Me.txtClassTotalScore.Size = New System.Drawing.Size(100, 23)
        Me.txtClassTotalScore.TabIndex = 7
        '
        'txtClassMeanScore
        '
        Me.txtClassMeanScore.Location = New System.Drawing.Point(561, 250)
        Me.txtClassMeanScore.Name = "txtClassMeanScore"
        Me.txtClassMeanScore.Size = New System.Drawing.Size(100, 23)
        Me.txtClassMeanScore.TabIndex = 8
        '
        'txtClassMeanGrade
        '
        Me.txtClassMeanGrade.Location = New System.Drawing.Point(561, 313)
        Me.txtClassMeanGrade.Name = "txtClassMeanGrade"
        Me.txtClassMeanGrade.Size = New System.Drawing.Size(100, 23)
        Me.txtClassMeanGrade.TabIndex = 9
        '
        'lstBox
        '
        Me.lstBox.FormattingEnabled = True
        Me.lstBox.ItemHeight = 15
        Me.lstBox.Location = New System.Drawing.Point(64, 86)
        Me.lstBox.Name = "lstBox"
        Me.lstBox.Size = New System.Drawing.Size(120, 214)
        Me.lstBox.TabIndex = 10
        '
        'btnOk
        '
        Me.btnOk.Location = New System.Drawing.Point(473, 387)
        Me.btnOk.Name = "btnOk"
        Me.btnOk.Size = New System.Drawing.Size(75, 23)
        Me.btnOk.TabIndex = 11
        Me.btnOk.Text = "Ok"
        Me.btnOk.UseVisualStyleBackColor = True
        '
        'Form11
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.btnOk)
        Me.Controls.Add(Me.lstBox)
        Me.Controls.Add(Me.txtClassMeanGrade)
        Me.Controls.Add(Me.txtClassMeanScore)
        Me.Controls.Add(Me.txtClassTotalScore)
        Me.Controls.Add(Me.txtStudentScore)
        Me.Controls.Add(Me.txtNoofStudents)
        Me.Controls.Add(Me.Label5)
        Me.Controls.Add(Me.Label4)
        Me.Controls.Add(Me.lblClassTotalScore)
        Me.Controls.Add(Me.lblStudentScore)
        Me.Controls.Add(Me.lblNoOfStudents)
        Me.Name = "Form11"
        Me.Text = "Form11"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents lblNoOfStudents As Label
    Friend WithEvents lblStudentScore As Label
    Friend WithEvents lblClassTotalScore As Label
    Friend WithEvents Label4 As Label
    Friend WithEvents Label5 As Label
    Friend WithEvents txtNoofStudents As TextBox
    Friend WithEvents txtStudentScore As TextBox
    Friend WithEvents txtClassTotalScore As TextBox
    Friend WithEvents txtClassMeanScore As TextBox
    Friend WithEvents txtClassMeanGrade As TextBox
    Friend WithEvents lstBox As ListBox
    Friend WithEvents btnOk As Button
End Class
