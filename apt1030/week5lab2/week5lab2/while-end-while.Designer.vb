<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class while_end_while
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
        Me.lblScores = New System.Windows.Forms.Label()
        Me.lstScores = New System.Windows.Forms.ListBox()
        Me.lblScore = New System.Windows.Forms.Label()
        Me.lblSum = New System.Windows.Forms.Label()
        Me.txtSum = New System.Windows.Forms.TextBox()
        Me.txtScore = New System.Windows.Forms.TextBox()
        Me.lblMean = New System.Windows.Forms.Label()
        Me.txtMean = New System.Windows.Forms.TextBox()
        Me.Calculate = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'lblScores
        '
        Me.lblScores.AutoSize = True
        Me.lblScores.Location = New System.Drawing.Point(87, 71)
        Me.lblScores.Name = "lblScores"
        Me.lblScores.Size = New System.Drawing.Size(41, 15)
        Me.lblScores.TabIndex = 10
        Me.lblScores.Text = "Scores"
        '
        'lstScores
        '
        Me.lstScores.FormattingEnabled = True
        Me.lstScores.ItemHeight = 15
        Me.lstScores.Location = New System.Drawing.Point(87, 131)
        Me.lstScores.Name = "lstScores"
        Me.lstScores.Size = New System.Drawing.Size(120, 169)
        Me.lstScores.TabIndex = 11
        '
        'lblScore
        '
        Me.lblScore.AutoSize = True
        Me.lblScore.Location = New System.Drawing.Point(320, 71)
        Me.lblScore.Name = "lblScore"
        Me.lblScore.Size = New System.Drawing.Size(36, 15)
        Me.lblScore.TabIndex = 12
        Me.lblScore.Text = "Score"
        '
        'lblSum
        '
        Me.lblSum.AutoSize = True
        Me.lblSum.Location = New System.Drawing.Point(320, 140)
        Me.lblSum.Name = "lblSum"
        Me.lblSum.Size = New System.Drawing.Size(31, 15)
        Me.lblSum.TabIndex = 13
        Me.lblSum.Text = "Sum"
        '
        'txtSum
        '
        Me.txtSum.Location = New System.Drawing.Point(436, 137)
        Me.txtSum.Name = "txtSum"
        Me.txtSum.Size = New System.Drawing.Size(100, 23)
        Me.txtSum.TabIndex = 16
        '
        'txtScore
        '
        Me.txtScore.Location = New System.Drawing.Point(436, 68)
        Me.txtScore.Name = "txtScore"
        Me.txtScore.Size = New System.Drawing.Size(100, 23)
        Me.txtScore.TabIndex = 17
        '
        'lblMean
        '
        Me.lblMean.AutoSize = True
        Me.lblMean.Location = New System.Drawing.Point(320, 211)
        Me.lblMean.Name = "lblMean"
        Me.lblMean.Size = New System.Drawing.Size(37, 15)
        Me.lblMean.TabIndex = 18
        Me.lblMean.Text = "Mean"
        '
        'txtMean
        '
        Me.txtMean.Location = New System.Drawing.Point(436, 208)
        Me.txtMean.Name = "txtMean"
        Me.txtMean.Size = New System.Drawing.Size(100, 23)
        Me.txtMean.TabIndex = 19
        '
        'Calculate
        '
        Me.Calculate.Location = New System.Drawing.Point(373, 268)
        Me.Calculate.Name = "Calculate"
        Me.Calculate.Size = New System.Drawing.Size(75, 23)
        Me.Calculate.TabIndex = 20
        Me.Calculate.Text = "Calculate"
        Me.Calculate.UseVisualStyleBackColor = True
        '
        'while_end_while
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.Calculate)
        Me.Controls.Add(Me.txtMean)
        Me.Controls.Add(Me.lblMean)
        Me.Controls.Add(Me.txtScore)
        Me.Controls.Add(Me.txtSum)
        Me.Controls.Add(Me.lblSum)
        Me.Controls.Add(Me.lblScore)
        Me.Controls.Add(Me.lstScores)
        Me.Controls.Add(Me.lblScores)
        Me.Name = "while_end_while"
        Me.Text = "while_end_while"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents lblScores As Label
    Friend WithEvents lstScores As ListBox
    Friend WithEvents lblScore As Label
    Friend WithEvents lblSum As Label
    Friend WithEvents txtSum As TextBox
    Friend WithEvents txtScore As TextBox
    Friend WithEvents lblMean As Label
    Friend WithEvents txtMean As TextBox
    Friend WithEvents Calculate As Button
End Class
