<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form9
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
        Me.lstBox = New System.Windows.Forms.ListBox()
        Me.txtStudentMarks = New System.Windows.Forms.TextBox()
        Me.txtSum = New System.Windows.Forms.TextBox()
        Me.btnCalculate = New System.Windows.Forms.Button()
        Me.lblStudentMarks = New System.Windows.Forms.Label()
        Me.lblSum = New System.Windows.Forms.Label()
        Me.lblStudentMarkslst = New System.Windows.Forms.Label()
        Me.btnNext = New System.Windows.Forms.Button()
        Me.btnPrevious = New System.Windows.Forms.Button()
        Me.btnClear = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'lstBox
        '
        Me.lstBox.FormattingEnabled = True
        Me.lstBox.ItemHeight = 15
        Me.lstBox.Location = New System.Drawing.Point(48, 62)
        Me.lstBox.Name = "lstBox"
        Me.lstBox.Size = New System.Drawing.Size(120, 184)
        Me.lstBox.TabIndex = 0
        '
        'txtStudentMarks
        '
        Me.txtStudentMarks.Location = New System.Drawing.Point(300, 67)
        Me.txtStudentMarks.Name = "txtStudentMarks"
        Me.txtStudentMarks.Size = New System.Drawing.Size(100, 23)
        Me.txtStudentMarks.TabIndex = 1
        '
        'txtSum
        '
        Me.txtSum.Location = New System.Drawing.Point(300, 167)
        Me.txtSum.Name = "txtSum"
        Me.txtSum.Size = New System.Drawing.Size(100, 23)
        Me.txtSum.TabIndex = 2
        '
        'btnCalculate
        '
        Me.btnCalculate.Location = New System.Drawing.Point(191, 241)
        Me.btnCalculate.Name = "btnCalculate"
        Me.btnCalculate.Size = New System.Drawing.Size(75, 23)
        Me.btnCalculate.TabIndex = 3
        Me.btnCalculate.Text = "Calculate"
        Me.btnCalculate.UseVisualStyleBackColor = True
        '
        'lblStudentMarks
        '
        Me.lblStudentMarks.AutoSize = True
        Me.lblStudentMarks.Location = New System.Drawing.Point(191, 70)
        Me.lblStudentMarks.Name = "lblStudentMarks"
        Me.lblStudentMarks.Size = New System.Drawing.Size(83, 15)
        Me.lblStudentMarks.TabIndex = 4
        Me.lblStudentMarks.Text = "Student Marks"
        '
        'lblSum
        '
        Me.lblSum.AutoSize = True
        Me.lblSum.Location = New System.Drawing.Point(191, 170)
        Me.lblSum.Name = "lblSum"
        Me.lblSum.Size = New System.Drawing.Size(31, 15)
        Me.lblSum.TabIndex = 5
        Me.lblSum.Text = "Sum"
        '
        'lblStudentMarkslst
        '
        Me.lblStudentMarkslst.AutoSize = True
        Me.lblStudentMarkslst.Location = New System.Drawing.Point(48, 40)
        Me.lblStudentMarkslst.Name = "lblStudentMarkslst"
        Me.lblStudentMarkslst.Size = New System.Drawing.Size(83, 15)
        Me.lblStudentMarkslst.TabIndex = 6
        Me.lblStudentMarkslst.Text = "Student Marks"
        '
        'btnNext
        '
        Me.btnNext.Location = New System.Drawing.Point(300, 286)
        Me.btnNext.Name = "btnNext"
        Me.btnNext.Size = New System.Drawing.Size(75, 23)
        Me.btnNext.TabIndex = 7
        Me.btnNext.Text = "Next"
        Me.btnNext.UseVisualStyleBackColor = True
        '
        'btnPrevious
        '
        Me.btnPrevious.Location = New System.Drawing.Point(191, 286)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(75, 23)
        Me.btnPrevious.TabIndex = 8
        Me.btnPrevious.Text = "Previous"
        Me.btnPrevious.UseVisualStyleBackColor = True
        '
        'btnClear
        '
        Me.btnClear.Location = New System.Drawing.Point(300, 241)
        Me.btnClear.Name = "btnClear"
        Me.btnClear.Size = New System.Drawing.Size(75, 23)
        Me.btnClear.TabIndex = 9
        Me.btnClear.Text = "Clear"
        Me.btnClear.UseVisualStyleBackColor = True
        '
        'Form9
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(482, 321)
        Me.Controls.Add(Me.btnClear)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.btnNext)
        Me.Controls.Add(Me.lblStudentMarkslst)
        Me.Controls.Add(Me.lblSum)
        Me.Controls.Add(Me.lblStudentMarks)
        Me.Controls.Add(Me.btnCalculate)
        Me.Controls.Add(Me.txtSum)
        Me.Controls.Add(Me.txtStudentMarks)
        Me.Controls.Add(Me.lstBox)
        Me.Name = "Form9"
        Me.Text = "Form9"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents lstBox As ListBox
    Friend WithEvents txtStudentMarks As TextBox
    Friend WithEvents txtSum As TextBox
    Friend WithEvents btnCalculate As Button
    Friend WithEvents lblStudentMarks As Label
    Friend WithEvents lblSum As Label
    Friend WithEvents lblStudentMarkslst As Label
    Friend WithEvents btnNext As Button
    Friend WithEvents btnPrevious As Button
    Friend WithEvents btnClear As Button
End Class
