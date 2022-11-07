<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form6
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
        Me.Label1 = New System.Windows.Forms.Label()
        Me.lstBox = New System.Windows.Forms.ListBox()
        Me.lblNoofstudentsinclass = New System.Windows.Forms.Label()
        Me.lblAverageclassheight = New System.Windows.Forms.Label()
        Me.lblAverageclassweight = New System.Windows.Forms.Label()
        Me.lblAverageclassbmi = New System.Windows.Forms.Label()
        Me.lblThisclassis = New System.Windows.Forms.Label()
        Me.txtNoofstudentsinclass = New System.Windows.Forms.TextBox()
        Me.txtAverageclassheight = New System.Windows.Forms.TextBox()
        Me.txtAverageclassweight = New System.Windows.Forms.TextBox()
        Me.txtAverageclassbmi = New System.Windows.Forms.TextBox()
        Me.txtThisclassis = New System.Windows.Forms.TextBox()
        Me.SuspendLayout()
        '
        'btnCalculate
        '
        Me.btnCalculate.Location = New System.Drawing.Point(227, 192)
        Me.btnCalculate.Name = "btnCalculate"
        Me.btnCalculate.Size = New System.Drawing.Size(75, 23)
        Me.btnCalculate.TabIndex = 0
        Me.btnCalculate.Text = "Calculate"
        Me.btnCalculate.UseVisualStyleBackColor = True
        '
        'btnClear
        '
        Me.btnClear.Location = New System.Drawing.Point(357, 192)
        Me.btnClear.Name = "btnClear"
        Me.btnClear.Size = New System.Drawing.Size(75, 23)
        Me.btnClear.TabIndex = 1
        Me.btnClear.Text = "Clear"
        Me.btnClear.UseVisualStyleBackColor = True
        '
        'btnPrevious
        '
        Me.btnPrevious.Location = New System.Drawing.Point(227, 241)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(75, 23)
        Me.btnPrevious.TabIndex = 2
        Me.btnPrevious.Text = "Previous"
        Me.btnPrevious.UseVisualStyleBackColor = True
        '
        'btnNext
        '
        Me.btnNext.Location = New System.Drawing.Point(357, 241)
        Me.btnNext.Name = "btnNext"
        Me.btnNext.Size = New System.Drawing.Size(75, 23)
        Me.btnNext.TabIndex = 3
        Me.btnNext.Text = "Next"
        Me.btnNext.UseVisualStyleBackColor = True
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(227, 9)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(170, 15)
        Me.Label1.TabIndex = 4
        Me.Label1.Text = "BMI CALCULATOR WITH A LIST"
        '
        'lstBox
        '
        Me.lstBox.FormattingEnabled = True
        Me.lstBox.ItemHeight = 15
        Me.lstBox.Location = New System.Drawing.Point(12, 9)
        Me.lstBox.Name = "lstBox"
        Me.lstBox.Size = New System.Drawing.Size(120, 274)
        Me.lstBox.TabIndex = 5
        '
        'lblNoofstudentsinclass
        '
        Me.lblNoofstudentsinclass.AutoSize = True
        Me.lblNoofstudentsinclass.Location = New System.Drawing.Point(170, 35)
        Me.lblNoofstudentsinclass.Name = "lblNoofstudentsinclass"
        Me.lblNoofstudentsinclass.Size = New System.Drawing.Size(127, 15)
        Me.lblNoofstudentsinclass.TabIndex = 6
        Me.lblNoofstudentsinclass.Text = "No of Students in class"
        '
        'lblAverageclassheight
        '
        Me.lblAverageclassheight.AutoSize = True
        Me.lblAverageclassheight.Location = New System.Drawing.Point(170, 68)
        Me.lblAverageclassheight.Name = "lblAverageclassheight"
        Me.lblAverageclassheight.Size = New System.Drawing.Size(137, 15)
        Me.lblAverageclassheight.TabIndex = 7
        Me.lblAverageclassheight.Text = "AVERAGE CLASS HEIGHT"
        '
        'lblAverageclassweight
        '
        Me.lblAverageclassweight.AutoSize = True
        Me.lblAverageclassweight.Location = New System.Drawing.Point(170, 102)
        Me.lblAverageclassweight.Name = "lblAverageclassweight"
        Me.lblAverageclassweight.Size = New System.Drawing.Size(139, 15)
        Me.lblAverageclassweight.TabIndex = 8
        Me.lblAverageclassweight.Text = "AVERAGE CLASS WEIGHT"
        '
        'lblAverageclassbmi
        '
        Me.lblAverageclassbmi.AutoSize = True
        Me.lblAverageclassbmi.Location = New System.Drawing.Point(170, 135)
        Me.lblAverageclassbmi.Name = "lblAverageclassbmi"
        Me.lblAverageclassbmi.Size = New System.Drawing.Size(117, 15)
        Me.lblAverageclassbmi.TabIndex = 9
        Me.lblAverageclassbmi.Text = "AVERAGE CLASS BMI"
        '
        'lblThisclassis
        '
        Me.lblThisclassis.AutoSize = True
        Me.lblThisclassis.Location = New System.Drawing.Point(170, 162)
        Me.lblThisclassis.Name = "lblThisclassis"
        Me.lblThisclassis.Size = New System.Drawing.Size(70, 15)
        Me.lblThisclassis.TabIndex = 10
        Me.lblThisclassis.Text = "This class is:"
        '
        'txtNoofstudentsinclass
        '
        Me.txtNoofstudentsinclass.Location = New System.Drawing.Point(356, 35)
        Me.txtNoofstudentsinclass.Name = "txtNoofstudentsinclass"
        Me.txtNoofstudentsinclass.Size = New System.Drawing.Size(100, 23)
        Me.txtNoofstudentsinclass.TabIndex = 11
        '
        'txtAverageclassheight
        '
        Me.txtAverageclassheight.Location = New System.Drawing.Point(356, 64)
        Me.txtAverageclassheight.Name = "txtAverageclassheight"
        Me.txtAverageclassheight.Size = New System.Drawing.Size(100, 23)
        Me.txtAverageclassheight.TabIndex = 12
        '
        'txtAverageclassweight
        '
        Me.txtAverageclassweight.Location = New System.Drawing.Point(356, 99)
        Me.txtAverageclassweight.Name = "txtAverageclassweight"
        Me.txtAverageclassweight.Size = New System.Drawing.Size(100, 23)
        Me.txtAverageclassweight.TabIndex = 13
        '
        'txtAverageclassbmi
        '
        Me.txtAverageclassbmi.Location = New System.Drawing.Point(357, 132)
        Me.txtAverageclassbmi.Name = "txtAverageclassbmi"
        Me.txtAverageclassbmi.Size = New System.Drawing.Size(100, 23)
        Me.txtAverageclassbmi.TabIndex = 14
        '
        'txtThisclassis
        '
        Me.txtThisclassis.Location = New System.Drawing.Point(356, 159)
        Me.txtThisclassis.Name = "txtThisclassis"
        Me.txtThisclassis.Size = New System.Drawing.Size(100, 23)
        Me.txtThisclassis.TabIndex = 15
        '
        'Form6
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(591, 450)
        Me.Controls.Add(Me.txtThisclassis)
        Me.Controls.Add(Me.txtAverageclassbmi)
        Me.Controls.Add(Me.txtAverageclassweight)
        Me.Controls.Add(Me.txtAverageclassheight)
        Me.Controls.Add(Me.txtNoofstudentsinclass)
        Me.Controls.Add(Me.lblThisclassis)
        Me.Controls.Add(Me.lblAverageclassbmi)
        Me.Controls.Add(Me.lblAverageclassweight)
        Me.Controls.Add(Me.lblAverageclassheight)
        Me.Controls.Add(Me.lblNoofstudentsinclass)
        Me.Controls.Add(Me.lstBox)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.btnNext)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.btnClear)
        Me.Controls.Add(Me.btnCalculate)
        Me.Name = "Form6"
        Me.Text = "Form6"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btnCalculate As Button
    Friend WithEvents btnClear As Button
    Friend WithEvents btnPrevious As Button
    Friend WithEvents btnNext As Button
    Friend WithEvents Label1 As Label
    Friend WithEvents lstBox As ListBox
    Friend WithEvents lblNoofstudentsinclass As Label
    Friend WithEvents lblAverageclassheight As Label
    Friend WithEvents lblAverageclassweight As Label
    Friend WithEvents lblAverageclassbmi As Label
    Friend WithEvents lblThisclassis As Label
    Friend WithEvents txtNoofstudentsinclass As TextBox
    Friend WithEvents txtAverageclassheight As TextBox
    Friend WithEvents txtAverageclassweight As TextBox
    Friend WithEvents txtAverageclassbmi As TextBox
    Friend WithEvents txtThisclassis As TextBox
End Class
