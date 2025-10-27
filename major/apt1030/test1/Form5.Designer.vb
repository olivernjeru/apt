<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form5
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
        Me.lblWeight = New System.Windows.Forms.Label()
        Me.lblHeight = New System.Windows.Forms.Label()
        Me.lblBmi = New System.Windows.Forms.Label()
        Me.lblYouare = New System.Windows.Forms.Label()
        Me.txtWeight = New System.Windows.Forms.TextBox()
        Me.txtHeight = New System.Windows.Forms.TextBox()
        Me.txtBmi = New System.Windows.Forms.TextBox()
        Me.txtYouare = New System.Windows.Forms.TextBox()
        Me.lblBmicalculator = New System.Windows.Forms.Label()
        Me.SuspendLayout()
        '
        'btnCalculate
        '
        Me.btnCalculate.Location = New System.Drawing.Point(116, 198)
        Me.btnCalculate.Name = "btnCalculate"
        Me.btnCalculate.Size = New System.Drawing.Size(75, 23)
        Me.btnCalculate.TabIndex = 0
        Me.btnCalculate.Text = "Calculate"
        Me.btnCalculate.UseVisualStyleBackColor = True
        '
        'btnClear
        '
        Me.btnClear.Location = New System.Drawing.Point(254, 198)
        Me.btnClear.Name = "btnClear"
        Me.btnClear.Size = New System.Drawing.Size(75, 23)
        Me.btnClear.TabIndex = 1
        Me.btnClear.Text = "Clear"
        Me.btnClear.UseVisualStyleBackColor = True
        '
        'btnPrevious
        '
        Me.btnPrevious.Location = New System.Drawing.Point(116, 245)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(75, 23)
        Me.btnPrevious.TabIndex = 2
        Me.btnPrevious.Text = "Previous"
        Me.btnPrevious.UseVisualStyleBackColor = True
        '
        'btnNext
        '
        Me.btnNext.Location = New System.Drawing.Point(254, 245)
        Me.btnNext.Name = "btnNext"
        Me.btnNext.Size = New System.Drawing.Size(75, 23)
        Me.btnNext.TabIndex = 3
        Me.btnNext.Text = "Next"
        Me.btnNext.UseVisualStyleBackColor = True
        '
        'lblWeight
        '
        Me.lblWeight.AutoSize = True
        Me.lblWeight.Location = New System.Drawing.Point(101, 50)
        Me.lblWeight.Name = "lblWeight"
        Me.lblWeight.Size = New System.Drawing.Size(45, 15)
        Me.lblWeight.TabIndex = 4
        Me.lblWeight.Text = "Weight"
        '
        'lblHeight
        '
        Me.lblHeight.AutoSize = True
        Me.lblHeight.Location = New System.Drawing.Point(101, 79)
        Me.lblHeight.Name = "lblHeight"
        Me.lblHeight.Size = New System.Drawing.Size(43, 15)
        Me.lblHeight.TabIndex = 5
        Me.lblHeight.Text = "Height"
        '
        'lblBmi
        '
        Me.lblBmi.AutoSize = True
        Me.lblBmi.Location = New System.Drawing.Point(101, 108)
        Me.lblBmi.Name = "lblBmi"
        Me.lblBmi.Size = New System.Drawing.Size(28, 15)
        Me.lblBmi.TabIndex = 6
        Me.lblBmi.Text = "BMI"
        '
        'lblYouare
        '
        Me.lblYouare.AutoSize = True
        Me.lblYouare.Location = New System.Drawing.Point(101, 135)
        Me.lblYouare.Name = "lblYouare"
        Me.lblYouare.Size = New System.Drawing.Size(48, 15)
        Me.lblYouare.TabIndex = 7
        Me.lblYouare.Text = "You Are"
        '
        'txtWeight
        '
        Me.txtWeight.Location = New System.Drawing.Point(229, 47)
        Me.txtWeight.Name = "txtWeight"
        Me.txtWeight.Size = New System.Drawing.Size(100, 23)
        Me.txtWeight.TabIndex = 8
        '
        'txtHeight
        '
        Me.txtHeight.Location = New System.Drawing.Point(229, 76)
        Me.txtHeight.Name = "txtHeight"
        Me.txtHeight.Size = New System.Drawing.Size(100, 23)
        Me.txtHeight.TabIndex = 9
        '
        'txtBmi
        '
        Me.txtBmi.Location = New System.Drawing.Point(229, 105)
        Me.txtBmi.Name = "txtBmi"
        Me.txtBmi.Size = New System.Drawing.Size(100, 23)
        Me.txtBmi.TabIndex = 10
        '
        'txtYouare
        '
        Me.txtYouare.Location = New System.Drawing.Point(229, 132)
        Me.txtYouare.Name = "txtYouare"
        Me.txtYouare.Size = New System.Drawing.Size(100, 23)
        Me.txtYouare.TabIndex = 11
        '
        'lblBmicalculator
        '
        Me.lblBmicalculator.AutoSize = True
        Me.lblBmicalculator.Location = New System.Drawing.Point(172, 9)
        Me.lblBmicalculator.Name = "lblBmicalculator"
        Me.lblBmicalculator.Size = New System.Drawing.Size(103, 15)
        Me.lblBmicalculator.TabIndex = 12
        Me.lblBmicalculator.Text = "BMI CALCULATOR"
        '
        'Form5
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(458, 450)
        Me.Controls.Add(Me.lblBmicalculator)
        Me.Controls.Add(Me.txtYouare)
        Me.Controls.Add(Me.txtBmi)
        Me.Controls.Add(Me.txtHeight)
        Me.Controls.Add(Me.txtWeight)
        Me.Controls.Add(Me.lblYouare)
        Me.Controls.Add(Me.lblBmi)
        Me.Controls.Add(Me.lblHeight)
        Me.Controls.Add(Me.lblWeight)
        Me.Controls.Add(Me.btnNext)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.btnClear)
        Me.Controls.Add(Me.btnCalculate)
        Me.Name = "Form5"
        Me.Text = "Form5"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btnCalculate As Button
    Friend WithEvents btnClear As Button
    Friend WithEvents btnPrevious As Button
    Friend WithEvents btnNext As Button
    Friend WithEvents lblWeight As Label
    Friend WithEvents lblHeight As Label
    Friend WithEvents lblBmi As Label
    Friend WithEvents lblYouare As Label
    Friend WithEvents txtWeight As TextBox
    Friend WithEvents txtHeight As TextBox
    Friend WithEvents txtBmi As TextBox
    Friend WithEvents txtYouare As TextBox
    Friend WithEvents lblBmicalculator As Label
End Class
