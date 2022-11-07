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
        Me.lblPi = New System.Windows.Forms.Label()
        Me.lblRadius = New System.Windows.Forms.Label()
        Me.lblArea = New System.Windows.Forms.Label()
        Me.btnClear = New System.Windows.Forms.Button()
        Me.txtPi = New System.Windows.Forms.TextBox()
        Me.txtRadius = New System.Windows.Forms.TextBox()
        Me.txtArea = New System.Windows.Forms.TextBox()
        Me.SuspendLayout()
        '
        'btnCalculate
        '
        Me.btnCalculate.Location = New System.Drawing.Point(99, 200)
        Me.btnCalculate.Name = "btnCalculate"
        Me.btnCalculate.Size = New System.Drawing.Size(75, 23)
        Me.btnCalculate.TabIndex = 0
        Me.btnCalculate.Text = "Calculate"
        Me.btnCalculate.UseVisualStyleBackColor = True
        '
        'lblPi
        '
        Me.lblPi.AutoSize = True
        Me.lblPi.Location = New System.Drawing.Point(87, 41)
        Me.lblPi.Name = "lblPi"
        Me.lblPi.Size = New System.Drawing.Size(17, 15)
        Me.lblPi.TabIndex = 1
        Me.lblPi.Text = "Pi"
        '
        'lblRadius
        '
        Me.lblRadius.AutoSize = True
        Me.lblRadius.Location = New System.Drawing.Point(87, 92)
        Me.lblRadius.Name = "lblRadius"
        Me.lblRadius.Size = New System.Drawing.Size(42, 15)
        Me.lblRadius.TabIndex = 2
        Me.lblRadius.Text = "Radius"
        '
        'lblArea
        '
        Me.lblArea.AutoSize = True
        Me.lblArea.Location = New System.Drawing.Point(87, 138)
        Me.lblArea.Name = "lblArea"
        Me.lblArea.Size = New System.Drawing.Size(31, 15)
        Me.lblArea.TabIndex = 3
        Me.lblArea.Text = "Area"
        '
        'btnClear
        '
        Me.btnClear.Location = New System.Drawing.Point(218, 200)
        Me.btnClear.Name = "btnClear"
        Me.btnClear.Size = New System.Drawing.Size(75, 23)
        Me.btnClear.TabIndex = 4
        Me.btnClear.Text = "Clear"
        Me.btnClear.UseVisualStyleBackColor = True
        '
        'txtPi
        '
        Me.txtPi.Location = New System.Drawing.Point(229, 38)
        Me.txtPi.Name = "txtPi"
        Me.txtPi.Size = New System.Drawing.Size(100, 23)
        Me.txtPi.TabIndex = 5
        '
        'txtRadius
        '
        Me.txtRadius.Location = New System.Drawing.Point(229, 89)
        Me.txtRadius.Name = "txtRadius"
        Me.txtRadius.Size = New System.Drawing.Size(100, 23)
        Me.txtRadius.TabIndex = 6
        '
        'txtArea
        '
        Me.txtArea.Location = New System.Drawing.Point(229, 135)
        Me.txtArea.Name = "txtArea"
        Me.txtArea.Size = New System.Drawing.Size(100, 23)
        Me.txtArea.TabIndex = 7
        '
        'Form2
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(431, 450)
        Me.Controls.Add(Me.txtArea)
        Me.Controls.Add(Me.txtRadius)
        Me.Controls.Add(Me.txtPi)
        Me.Controls.Add(Me.btnClear)
        Me.Controls.Add(Me.lblArea)
        Me.Controls.Add(Me.lblRadius)
        Me.Controls.Add(Me.lblPi)
        Me.Controls.Add(Me.btnCalculate)
        Me.Name = "Form2"
        Me.Text = "Form2"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btnCalculate As Button
    Friend WithEvents lblPi As Label
    Friend WithEvents lblRadius As Label
    Friend WithEvents lblArea As Label
    Friend WithEvents btnClear As Button
    Friend WithEvents txtPi As TextBox
    Friend WithEvents txtRadius As TextBox
    Friend WithEvents txtArea As TextBox
End Class
