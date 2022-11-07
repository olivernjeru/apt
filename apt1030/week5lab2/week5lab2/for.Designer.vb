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
        Me.lblScore = New System.Windows.Forms.Label()
        Me.txtScore = New System.Windows.Forms.TextBox()
        Me.Calculate = New System.Windows.Forms.Button()
        Me.lblSum = New System.Windows.Forms.Label()
        Me.txtSum = New System.Windows.Forms.TextBox()
        Me.lblMean = New System.Windows.Forms.Label()
        Me.txtMean = New System.Windows.Forms.TextBox()
        Me.lstScores = New System.Windows.Forms.ListBox()
        Me.lblScores = New System.Windows.Forms.Label()
        Me.SuspendLayout()
        '
        'lblScore
        '
        Me.lblScore.AutoSize = True
        Me.lblScore.Location = New System.Drawing.Point(198, 68)
        Me.lblScore.Name = "lblScore"
        Me.lblScore.Size = New System.Drawing.Size(36, 15)
        Me.lblScore.TabIndex = 0
        Me.lblScore.Text = "Score"
        '
        'txtScore
        '
        Me.txtScore.Location = New System.Drawing.Point(407, 69)
        Me.txtScore.Name = "txtScore"
        Me.txtScore.Size = New System.Drawing.Size(100, 23)
        Me.txtScore.TabIndex = 1
        '
        'Calculate
        '
        Me.Calculate.Location = New System.Drawing.Point(308, 238)
        Me.Calculate.Name = "Calculate"
        Me.Calculate.Size = New System.Drawing.Size(75, 23)
        Me.Calculate.TabIndex = 2
        Me.Calculate.Text = "Calculate"
        Me.Calculate.UseVisualStyleBackColor = True
        '
        'lblSum
        '
        Me.lblSum.AutoSize = True
        Me.lblSum.Location = New System.Drawing.Point(198, 129)
        Me.lblSum.Name = "lblSum"
        Me.lblSum.Size = New System.Drawing.Size(31, 15)
        Me.lblSum.TabIndex = 3
        Me.lblSum.Text = "Sum"
        '
        'txtSum
        '
        Me.txtSum.Location = New System.Drawing.Point(407, 126)
        Me.txtSum.Name = "txtSum"
        Me.txtSum.Size = New System.Drawing.Size(100, 23)
        Me.txtSum.TabIndex = 4
        '
        'lblMean
        '
        Me.lblMean.AutoSize = True
        Me.lblMean.Location = New System.Drawing.Point(198, 181)
        Me.lblMean.Name = "lblMean"
        Me.lblMean.Size = New System.Drawing.Size(37, 15)
        Me.lblMean.TabIndex = 5
        Me.lblMean.Text = "Mean"
        '
        'txtMean
        '
        Me.txtMean.Location = New System.Drawing.Point(407, 178)
        Me.txtMean.Name = "txtMean"
        Me.txtMean.Size = New System.Drawing.Size(100, 23)
        Me.txtMean.TabIndex = 6
        '
        'lstScores
        '
        Me.lstScores.FormattingEnabled = True
        Me.lstScores.ItemHeight = 15
        Me.lstScores.Location = New System.Drawing.Point(31, 67)
        Me.lstScores.Name = "lstScores"
        Me.lstScores.Size = New System.Drawing.Size(120, 169)
        Me.lstScores.TabIndex = 7
        '
        'lblScores
        '
        Me.lblScores.AutoSize = True
        Me.lblScores.Location = New System.Drawing.Point(38, 31)
        Me.lblScores.Name = "lblScores"
        Me.lblScores.Size = New System.Drawing.Size(41, 15)
        Me.lblScores.TabIndex = 8
        Me.lblScores.Text = "Scores"
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.lblScores)
        Me.Controls.Add(Me.lstScores)
        Me.Controls.Add(Me.txtMean)
        Me.Controls.Add(Me.lblMean)
        Me.Controls.Add(Me.txtSum)
        Me.Controls.Add(Me.lblSum)
        Me.Controls.Add(Me.Calculate)
        Me.Controls.Add(Me.txtScore)
        Me.Controls.Add(Me.lblScore)
        Me.Name = "Form1"
        Me.Text = "Form1"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents lblScore As Label
    Friend WithEvents txtScore As TextBox
    Friend WithEvents Calculate As Button
    Friend WithEvents lblSum As Label
    Friend WithEvents txtSum As TextBox
    Friend WithEvents lblMean As Label
    Friend WithEvents txtMean As TextBox
    Friend WithEvents lstScores As ListBox
    Friend WithEvents lblScores As Label
End Class
