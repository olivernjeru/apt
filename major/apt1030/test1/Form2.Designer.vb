<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form2
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
        Me.btnCalculate = New System.Windows.Forms.Button()
        Me.btnClear = New System.Windows.Forms.Button()
        Me.btnPrevious = New System.Windows.Forms.Button()
        Me.btnNext = New System.Windows.Forms.Button()
        Me.lblTotal = New System.Windows.Forms.Label()
        Me.lblClassMean = New System.Windows.Forms.Label()
        Me.txtTotal = New System.Windows.Forms.TextBox()
        Me.txtClassMean = New System.Windows.Forms.TextBox()
        Me.lblSimpleGradeCalculator = New System.Windows.Forms.Label()
        Me.lstBox = New System.Windows.Forms.ListBox()
        Me.lblClassMeanGrade = New System.Windows.Forms.Label()
        Me.txtClassMeanGrade = New System.Windows.Forms.TextBox()
        Me.SuspendLayout()
        '
        'btnCalculate
        '
        Me.btnCalculate.Location = New System.Drawing.Point(275, 192)
        Me.btnCalculate.Name = "btnCalculate"
        Me.btnCalculate.Size = New System.Drawing.Size(75, 23)
        Me.btnCalculate.TabIndex = 0
        Me.btnCalculate.Text = "Calculate"
        Me.btnCalculate.UseVisualStyleBackColor = True
        '
        'btnClear
        '
        Me.btnClear.Location = New System.Drawing.Point(371, 192)
        Me.btnClear.Name = "btnClear"
        Me.btnClear.Size = New System.Drawing.Size(75, 23)
        Me.btnClear.TabIndex = 1
        Me.btnClear.Text = "Clear"
        Me.btnClear.UseVisualStyleBackColor = True
        '
        'btnPrevious
        '
        Me.btnPrevious.Location = New System.Drawing.Point(275, 234)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(75, 23)
        Me.btnPrevious.TabIndex = 2
        Me.btnPrevious.Text = "Previous"
        Me.btnPrevious.UseVisualStyleBackColor = True
        '
        'btnNext
        '
        Me.btnNext.Location = New System.Drawing.Point(371, 234)
        Me.btnNext.Name = "btnNext"
        Me.btnNext.Size = New System.Drawing.Size(75, 23)
        Me.btnNext.TabIndex = 3
        Me.btnNext.Text = "Next"
        Me.btnNext.UseVisualStyleBackColor = True
        '
        'lblTotal
        '
        Me.lblTotal.AutoSize = True
        Me.lblTotal.Location = New System.Drawing.Point(241, 58)
        Me.lblTotal.Name = "lblTotal"
        Me.lblTotal.Size = New System.Drawing.Size(32, 15)
        Me.lblTotal.TabIndex = 4
        Me.lblTotal.Text = "Total"
        '
        'lblClassMean
        '
        Me.lblClassMean.AutoSize = True
        Me.lblClassMean.Location = New System.Drawing.Point(241, 107)
        Me.lblClassMean.Name = "lblClassMean"
        Me.lblClassMean.Size = New System.Drawing.Size(67, 15)
        Me.lblClassMean.TabIndex = 5
        Me.lblClassMean.Text = "Class Mean"
        '
        'txtTotal
        '
        Me.txtTotal.Location = New System.Drawing.Point(358, 50)
        Me.txtTotal.Name = "txtTotal"
        Me.txtTotal.Size = New System.Drawing.Size(100, 23)
        Me.txtTotal.TabIndex = 6
        '
        'txtClassMean
        '
        Me.txtClassMean.Location = New System.Drawing.Point(358, 104)
        Me.txtClassMean.Name = "txtClassMean"
        Me.txtClassMean.Size = New System.Drawing.Size(100, 23)
        Me.txtClassMean.TabIndex = 7
        '
        'lblSimpleGradeCalculator
        '
        Me.lblSimpleGradeCalculator.AutoSize = True
        Me.lblSimpleGradeCalculator.Location = New System.Drawing.Point(154, 20)
        Me.lblSimpleGradeCalculator.Name = "lblSimpleGradeCalculator"
        Me.lblSimpleGradeCalculator.Size = New System.Drawing.Size(134, 15)
        Me.lblSimpleGradeCalculator.TabIndex = 8
        Me.lblSimpleGradeCalculator.Text = "Simple Grade Calculator"
        '
        'lstBox
        '
        Me.lstBox.FormattingEnabled = True
        Me.lstBox.ItemHeight = 15
        Me.lstBox.Location = New System.Drawing.Point(26, 58)
        Me.lstBox.Name = "lstBox"
        Me.lstBox.Size = New System.Drawing.Size(120, 214)
        Me.lstBox.TabIndex = 9
        '
        'lblClassMeanGrade
        '
        Me.lblClassMeanGrade.AutoSize = True
        Me.lblClassMeanGrade.Location = New System.Drawing.Point(241, 151)
        Me.lblClassMeanGrade.Name = "lblClassMeanGrade"
        Me.lblClassMeanGrade.Size = New System.Drawing.Size(101, 15)
        Me.lblClassMeanGrade.TabIndex = 10
        Me.lblClassMeanGrade.Text = "Class Mean Grade"
        '
        'txtClassMeanGrade
        '
        Me.txtClassMeanGrade.Location = New System.Drawing.Point(358, 148)
        Me.txtClassMeanGrade.Name = "txtClassMeanGrade"
        Me.txtClassMeanGrade.Size = New System.Drawing.Size(100, 23)
        Me.txtClassMeanGrade.TabIndex = 11
        '
        'Form2
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(470, 450)
        Me.Controls.Add(Me.txtClassMeanGrade)
        Me.Controls.Add(Me.lblClassMeanGrade)
        Me.Controls.Add(Me.lstBox)
        Me.Controls.Add(Me.lblSimpleGradeCalculator)
        Me.Controls.Add(Me.txtClassMean)
        Me.Controls.Add(Me.txtTotal)
        Me.Controls.Add(Me.lblClassMean)
        Me.Controls.Add(Me.lblTotal)
        Me.Controls.Add(Me.btnNext)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.btnClear)
        Me.Controls.Add(Me.btnCalculate)
        Me.Name = "Form2"
        Me.Text = "Form2"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btnCalculate As Button
    Friend WithEvents btnClear As Button
    Friend WithEvents btnPrevious As Button
    Friend WithEvents btnNext As Button
    Friend WithEvents lblTotal As Label
    Friend WithEvents lblClassMean As Label
    Friend WithEvents txtTotal As TextBox
    Friend WithEvents txtClassMean As TextBox
    Friend WithEvents lblSimpleGradeCalculator As Label
    Friend WithEvents lstBox As ListBox
    Friend WithEvents lblClassMeanGrade As Label
    Friend WithEvents txtClassMeanGrade As TextBox
End Class
