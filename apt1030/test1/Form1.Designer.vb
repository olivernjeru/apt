<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()>
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
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Me.btnClear = New System.Windows.Forms.Button()
        Me.btnCalculate = New System.Windows.Forms.Button()
        Me.lblPi = New System.Windows.Forms.Label()
        Me.lblRadius = New System.Windows.Forms.Label()
        Me.lblArea = New System.Windows.Forms.Label()
        Me.txtPi = New System.Windows.Forms.TextBox()
        Me.txtRadius = New System.Windows.Forms.TextBox()
        Me.txtArea = New System.Windows.Forms.TextBox()
        Me.lblareaofacircle = New System.Windows.Forms.Label()
        Me.btnNext = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'btnClear
        '
        Me.btnClear.Location = New System.Drawing.Point(218, 184)
        Me.btnClear.Name = "btnClear"
        Me.btnClear.Size = New System.Drawing.Size(75, 23)
        Me.btnClear.TabIndex = 0
        Me.btnClear.Text = "Clear"
        Me.btnClear.UseVisualStyleBackColor = True
        '
        'btnCalculate
        '
        Me.btnCalculate.Location = New System.Drawing.Point(115, 184)
        Me.btnCalculate.Name = "btnCalculate"
        Me.btnCalculate.Size = New System.Drawing.Size(75, 23)
        Me.btnCalculate.TabIndex = 1
        Me.btnCalculate.Text = "Calculate"
        Me.btnCalculate.UseVisualStyleBackColor = True
        '
        'lblPi
        '
        Me.lblPi.AutoSize = True
        Me.lblPi.Location = New System.Drawing.Point(103, 59)
        Me.lblPi.Name = "lblPi"
        Me.lblPi.Size = New System.Drawing.Size(17, 15)
        Me.lblPi.TabIndex = 2
        Me.lblPi.Text = "Pi"
        '
        'lblRadius
        '
        Me.lblRadius.AutoSize = True
        Me.lblRadius.Location = New System.Drawing.Point(103, 100)
        Me.lblRadius.Name = "lblRadius"
        Me.lblRadius.Size = New System.Drawing.Size(42, 15)
        Me.lblRadius.TabIndex = 3
        Me.lblRadius.Text = "Radius"
        '
        'lblArea
        '
        Me.lblArea.AutoSize = True
        Me.lblArea.Location = New System.Drawing.Point(103, 138)
        Me.lblArea.Name = "lblArea"
        Me.lblArea.Size = New System.Drawing.Size(31, 15)
        Me.lblArea.TabIndex = 4
        Me.lblArea.Text = "Area"
        '
        'txtPi
        '
        Me.txtPi.Location = New System.Drawing.Point(193, 56)
        Me.txtPi.Name = "txtPi"
        Me.txtPi.Size = New System.Drawing.Size(100, 23)
        Me.txtPi.TabIndex = 5
        Me.txtPi.Text = "3.14"
        '
        'txtRadius
        '
        Me.txtRadius.Location = New System.Drawing.Point(193, 100)
        Me.txtRadius.Name = "txtRadius"
        Me.txtRadius.Size = New System.Drawing.Size(100, 23)
        Me.txtRadius.TabIndex = 6
        '
        'txtArea
        '
        Me.txtArea.Location = New System.Drawing.Point(193, 135)
        Me.txtArea.Name = "txtArea"
        Me.txtArea.Size = New System.Drawing.Size(100, 23)
        Me.txtArea.TabIndex = 7
        '
        'lblareaofacircle
        '
        Me.lblareaofacircle.AutoSize = True
        Me.lblareaofacircle.Location = New System.Drawing.Point(147, 18)
        Me.lblareaofacircle.Name = "lblareaofacircle"
        Me.lblareaofacircle.Size = New System.Drawing.Size(106, 15)
        Me.lblareaofacircle.TabIndex = 8
        Me.lblareaofacircle.Text = "AREA OF A CIRCLE"
        '
        'btnNext
        '
        Me.btnNext.Location = New System.Drawing.Point(165, 233)
        Me.btnNext.Name = "btnNext"
        Me.btnNext.Size = New System.Drawing.Size(75, 23)
        Me.btnNext.TabIndex = 9
        Me.btnNext.Text = "Next"
        Me.btnNext.UseVisualStyleBackColor = True
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(435, 450)
        Me.Controls.Add(Me.btnNext)
        Me.Controls.Add(Me.lblareaofacircle)
        Me.Controls.Add(Me.txtArea)
        Me.Controls.Add(Me.txtRadius)
        Me.Controls.Add(Me.txtPi)
        Me.Controls.Add(Me.lblArea)
        Me.Controls.Add(Me.lblRadius)
        Me.Controls.Add(Me.lblPi)
        Me.Controls.Add(Me.btnCalculate)
        Me.Controls.Add(Me.btnClear)
        Me.Name = "Form1"
        Me.Text = "Form1"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btnClear As Button
    Friend WithEvents btnCalculate As Button
    Friend WithEvents lblPi As Label
    Friend WithEvents lblRadius As Label
    Friend WithEvents lblArea As Label
    Friend WithEvents txtPi As TextBox
    Friend WithEvents txtRadius As TextBox
    Friend WithEvents txtArea As TextBox
    Friend WithEvents lblareaofacircle As Label
    Friend WithEvents btnNext As Button
End Class
