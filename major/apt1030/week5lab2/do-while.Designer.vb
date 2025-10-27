<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class do_while
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
        Me.lblMean = New System.Windows.Forms.Label()
        Me.txtScore = New System.Windows.Forms.TextBox()
        Me.txtSum = New System.Windows.Forms.TextBox()
        Me.txtMean = New System.Windows.Forms.TextBox()
        Me.Calculate = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'lblScores
        '
        Me.lblScores.AutoSize = True
        Me.lblScores.Location = New System.Drawing.Point(79, 47)
        Me.lblScores.Name = "lblScores"
        Me.lblScores.Size = New System.Drawing.Size(41, 15)
        Me.lblScores.TabIndex = 9
        Me.lblScores.Text = "Scores"
        '
        'lstScores
        '
        Me.lstScores.FormattingEnabled = True
        Me.lstScores.ItemHeight = 15
        Me.lstScores.Location = New System.Drawing.Point(79, 95)
        Me.lstScores.Name = "lstScores"
        Me.lstScores.Size = New System.Drawing.Size(120, 169)
        Me.lstScores.TabIndex = 10
        '
        'lblScore
        '
        Me.lblScore.AutoSize = True
        Me.lblScore.Location = New System.Drawing.Point(295, 47)
        Me.lblScore.Name = "lblScore"
        Me.lblScore.Size = New System.Drawing.Size(36, 15)
        Me.lblScore.TabIndex = 11
        Me.lblScore.Text = "Score"
        '
        'lblSum
        '
        Me.lblSum.AutoSize = True
        Me.lblSum.Location = New System.Drawing.Point(295, 109)
        Me.lblSum.Name = "lblSum"
        Me.lblSum.Size = New System.Drawing.Size(31, 15)
        Me.lblSum.TabIndex = 12
        Me.lblSum.Text = "Sum"
        '
        'lblMean
        '
        Me.lblMean.AutoSize = True
        Me.lblMean.Location = New System.Drawing.Point(295, 180)
        Me.lblMean.Name = "lblMean"
        Me.lblMean.Size = New System.Drawing.Size(37, 15)
        Me.lblMean.TabIndex = 13
        Me.lblMean.Text = "Mean"
        '
        'txtScore
        '
        Me.txtScore.Location = New System.Drawing.Point(428, 44)
        Me.txtScore.Name = "txtScore"
        Me.txtScore.Size = New System.Drawing.Size(100, 23)
        Me.txtScore.TabIndex = 14
        '
        'txtSum
        '
        Me.txtSum.Location = New System.Drawing.Point(428, 106)
        Me.txtSum.Name = "txtSum"
        Me.txtSum.Size = New System.Drawing.Size(100, 23)
        Me.txtSum.TabIndex = 15
        '
        'txtMean
        '
        Me.txtMean.Location = New System.Drawing.Point(428, 177)
        Me.txtMean.Name = "txtMean"
        Me.txtMean.Size = New System.Drawing.Size(100, 23)
        Me.txtMean.TabIndex = 16
        '
        'Calculate
        '
        Me.Calculate.Location = New System.Drawing.Point(342, 262)
        Me.Calculate.Name = "Calculate"
        Me.Calculate.Size = New System.Drawing.Size(75, 23)
        Me.Calculate.TabIndex = 17
        Me.Calculate.Text = "Calculate"
        Me.Calculate.UseVisualStyleBackColor = True
        '
        'do_while
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.Calculate)
        Me.Controls.Add(Me.txtMean)
        Me.Controls.Add(Me.txtSum)
        Me.Controls.Add(Me.txtScore)
        Me.Controls.Add(Me.lblMean)
        Me.Controls.Add(Me.lblSum)
        Me.Controls.Add(Me.lblScore)
        Me.Controls.Add(Me.lstScores)
        Me.Controls.Add(Me.lblScores)
        Me.Name = "do_while"
        Me.Text = "do_while"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents lblScores As Label
    Friend WithEvents lstScores As ListBox
    Friend WithEvents lblScore As Label
    Friend WithEvents lblSum As Label
    Friend WithEvents lblMean As Label
    Friend WithEvents txtScore As TextBox
    Friend WithEvents txtSum As TextBox
    Friend WithEvents txtMean As TextBox
    Friend WithEvents Calculate As Button
End Class
