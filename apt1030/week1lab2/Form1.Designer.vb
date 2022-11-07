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
        Me.btnCalculate = New System.Windows.Forms.Button()
        Me.btnClear = New System.Windows.Forms.Button()
        Me.lblLength = New System.Windows.Forms.Label()
        Me.lblWidth = New System.Windows.Forms.Label()
        Me.lblPerimeter = New System.Windows.Forms.Label()
        Me.txtLength = New System.Windows.Forms.TextBox()
        Me.txtWidth = New System.Windows.Forms.TextBox()
        Me.txtPerimeter = New System.Windows.Forms.TextBox()
        Me.txtArea = New System.Windows.Forms.TextBox()
        Me.lblArea = New System.Windows.Forms.Label()
        Me.SuspendLayout()
        '
        'btnCalculate
        '
        Me.btnCalculate.Location = New System.Drawing.Point(109, 247)
        Me.btnCalculate.Name = "btnCalculate"
        Me.btnCalculate.Size = New System.Drawing.Size(75, 23)
        Me.btnCalculate.TabIndex = 0
        Me.btnCalculate.Text = "Calculate"
        Me.btnCalculate.UseVisualStyleBackColor = True
        '
        'btnClear
        '
        Me.btnClear.Location = New System.Drawing.Point(294, 247)
        Me.btnClear.Name = "btnClear"
        Me.btnClear.Size = New System.Drawing.Size(75, 23)
        Me.btnClear.TabIndex = 1
        Me.btnClear.Text = "Clear"
        Me.btnClear.UseVisualStyleBackColor = True
        '
        'lblLength
        '
        Me.lblLength.AutoSize = True
        Me.lblLength.Location = New System.Drawing.Point(98, 37)
        Me.lblLength.Name = "lblLength"
        Me.lblLength.Size = New System.Drawing.Size(44, 15)
        Me.lblLength.TabIndex = 2
        Me.lblLength.Text = "Length"
        '
        'lblWidth
        '
        Me.lblWidth.AutoSize = True
        Me.lblWidth.Location = New System.Drawing.Point(98, 96)
        Me.lblWidth.Name = "lblWidth"
        Me.lblWidth.Size = New System.Drawing.Size(39, 15)
        Me.lblWidth.TabIndex = 3
        Me.lblWidth.Text = "Width"
        '
        'lblPerimeter
        '
        Me.lblPerimeter.AutoSize = True
        Me.lblPerimeter.Location = New System.Drawing.Point(98, 146)
        Me.lblPerimeter.Name = "lblPerimeter"
        Me.lblPerimeter.Size = New System.Drawing.Size(58, 15)
        Me.lblPerimeter.TabIndex = 4
        Me.lblPerimeter.Text = "Perimeter"
        '
        'txtLength
        '
        Me.txtLength.Location = New System.Drawing.Point(283, 37)
        Me.txtLength.Name = "txtLength"
        Me.txtLength.Size = New System.Drawing.Size(100, 23)
        Me.txtLength.TabIndex = 5
        '
        'txtWidth
        '
        Me.txtWidth.Location = New System.Drawing.Point(283, 93)
        Me.txtWidth.Name = "txtWidth"
        Me.txtWidth.Size = New System.Drawing.Size(100, 23)
        Me.txtWidth.TabIndex = 6
        '
        'txtPerimeter
        '
        Me.txtPerimeter.Location = New System.Drawing.Point(283, 143)
        Me.txtPerimeter.Name = "txtPerimeter"
        Me.txtPerimeter.Size = New System.Drawing.Size(100, 23)
        Me.txtPerimeter.TabIndex = 7
        '
        'txtArea
        '
        Me.txtArea.Location = New System.Drawing.Point(283, 195)
        Me.txtArea.Name = "txtArea"
        Me.txtArea.Size = New System.Drawing.Size(100, 23)
        Me.txtArea.TabIndex = 8
        '
        'lblArea
        '
        Me.lblArea.AutoSize = True
        Me.lblArea.Location = New System.Drawing.Point(98, 198)
        Me.lblArea.Name = "lblArea"
        Me.lblArea.Size = New System.Drawing.Size(31, 15)
        Me.lblArea.TabIndex = 9
        Me.lblArea.Text = "Area"
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(536, 450)
        Me.Controls.Add(Me.lblArea)
        Me.Controls.Add(Me.txtArea)
        Me.Controls.Add(Me.txtPerimeter)
        Me.Controls.Add(Me.txtWidth)
        Me.Controls.Add(Me.txtLength)
        Me.Controls.Add(Me.lblPerimeter)
        Me.Controls.Add(Me.lblWidth)
        Me.Controls.Add(Me.lblLength)
        Me.Controls.Add(Me.btnClear)
        Me.Controls.Add(Me.btnCalculate)
        Me.Name = "Form1"
        Me.Text = "Form1"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btnCalculate As Button
    Friend WithEvents btnClear As Button
    Friend WithEvents lblLength As Label
    Friend WithEvents lblWidth As Label
    Friend WithEvents lblPerimeter As Label
    Friend WithEvents txtLength As TextBox
    Friend WithEvents txtWidth As TextBox
    Friend WithEvents txtPerimeter As TextBox
    Friend WithEvents txtArea As TextBox
    Friend WithEvents lblArea As Label
End Class
