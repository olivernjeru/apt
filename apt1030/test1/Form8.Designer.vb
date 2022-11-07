<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form8
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
        Me.lblTaxVariable = New System.Windows.Forms.Label()
        Me.lblTaxRate = New System.Windows.Forms.Label()
        Me.lblTax = New System.Windows.Forms.Label()
        Me.txtTaxVariable = New System.Windows.Forms.TextBox()
        Me.txtTaxRate = New System.Windows.Forms.TextBox()
        Me.txtTax = New System.Windows.Forms.TextBox()
        Me.btnCalculate = New System.Windows.Forms.Button()
        Me.btnClear = New System.Windows.Forms.Button()
        Me.btnPrevious = New System.Windows.Forms.Button()
        Me.btnNext = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'lblTaxVariable
        '
        Me.lblTaxVariable.AutoSize = True
        Me.lblTaxVariable.Location = New System.Drawing.Point(90, 57)
        Me.lblTaxVariable.Name = "lblTaxVariable"
        Me.lblTaxVariable.Size = New System.Drawing.Size(68, 15)
        Me.lblTaxVariable.TabIndex = 0
        Me.lblTaxVariable.Text = "Tax Variable"
        '
        'lblTaxRate
        '
        Me.lblTaxRate.AutoSize = True
        Me.lblTaxRate.Location = New System.Drawing.Point(92, 108)
        Me.lblTaxRate.Name = "lblTaxRate"
        Me.lblTaxRate.Size = New System.Drawing.Size(50, 15)
        Me.lblTaxRate.TabIndex = 1
        Me.lblTaxRate.Text = "Tax Rate"
        '
        'lblTax
        '
        Me.lblTax.AutoSize = True
        Me.lblTax.Location = New System.Drawing.Point(90, 163)
        Me.lblTax.Name = "lblTax"
        Me.lblTax.Size = New System.Drawing.Size(24, 15)
        Me.lblTax.TabIndex = 2
        Me.lblTax.Text = "Tax"
        '
        'txtTaxVariable
        '
        Me.txtTaxVariable.Location = New System.Drawing.Point(230, 54)
        Me.txtTaxVariable.Name = "txtTaxVariable"
        Me.txtTaxVariable.Size = New System.Drawing.Size(100, 23)
        Me.txtTaxVariable.TabIndex = 3
        '
        'txtTaxRate
        '
        Me.txtTaxRate.Location = New System.Drawing.Point(230, 109)
        Me.txtTaxRate.Name = "txtTaxRate"
        Me.txtTaxRate.Size = New System.Drawing.Size(100, 23)
        Me.txtTaxRate.TabIndex = 4
        '
        'txtTax
        '
        Me.txtTax.Location = New System.Drawing.Point(230, 160)
        Me.txtTax.Name = "txtTax"
        Me.txtTax.Size = New System.Drawing.Size(100, 23)
        Me.txtTax.TabIndex = 5
        '
        'btnCalculate
        '
        Me.btnCalculate.Location = New System.Drawing.Point(136, 215)
        Me.btnCalculate.Name = "btnCalculate"
        Me.btnCalculate.Size = New System.Drawing.Size(75, 23)
        Me.btnCalculate.TabIndex = 6
        Me.btnCalculate.Text = "Calculate"
        Me.btnCalculate.UseVisualStyleBackColor = True
        '
        'btnClear
        '
        Me.btnClear.Location = New System.Drawing.Point(285, 215)
        Me.btnClear.Name = "btnClear"
        Me.btnClear.Size = New System.Drawing.Size(75, 23)
        Me.btnClear.TabIndex = 7
        Me.btnClear.Text = "Clear"
        Me.btnClear.UseVisualStyleBackColor = True
        '
        'btnPrevious
        '
        Me.btnPrevious.Location = New System.Drawing.Point(140, 270)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(75, 23)
        Me.btnPrevious.TabIndex = 8
        Me.btnPrevious.Text = "Previous"
        Me.btnPrevious.UseVisualStyleBackColor = True
        '
        'btnNext
        '
        Me.btnNext.Location = New System.Drawing.Point(285, 270)
        Me.btnNext.Name = "btnNext"
        Me.btnNext.Size = New System.Drawing.Size(75, 23)
        Me.btnNext.TabIndex = 9
        Me.btnNext.Text = "Next"
        Me.btnNext.UseVisualStyleBackColor = True
        '
        'Form8
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(470, 370)
        Me.Controls.Add(Me.btnNext)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.btnClear)
        Me.Controls.Add(Me.btnCalculate)
        Me.Controls.Add(Me.txtTax)
        Me.Controls.Add(Me.txtTaxRate)
        Me.Controls.Add(Me.txtTaxVariable)
        Me.Controls.Add(Me.lblTax)
        Me.Controls.Add(Me.lblTaxRate)
        Me.Controls.Add(Me.lblTaxVariable)
        Me.Name = "Form8"
        Me.Text = "Form8"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents lblTaxVariable As Label
    Friend WithEvents lblTaxRate As Label
    Friend WithEvents lblTax As Label
    Friend WithEvents txtTaxVariable As TextBox
    Friend WithEvents txtTaxRate As TextBox
    Friend WithEvents txtTax As TextBox
    Friend WithEvents btnCalculate As Button
    Friend WithEvents btnClear As Button
    Friend WithEvents btnPrevious As Button
    Friend WithEvents btnNext As Button
End Class
