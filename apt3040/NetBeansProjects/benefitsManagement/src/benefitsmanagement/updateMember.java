package benefitsmanagement;

import java.awt.Color;

public class updateMember extends javax.swing.JFrame {

    public updateMember() {
        initComponents();            
        updateMemberBtn.setBackground(Color.yellow);
        doneBtn.setBackground(Color.red);
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel2 = new javax.swing.JLabel();
        memberIDLbl = new javax.swing.JLabel();
        memberIDTxt = new javax.swing.JTextField();
        memberNameLbl = new javax.swing.JLabel();
        updateMemberBtn = new javax.swing.JButton();
        doneBtn = new javax.swing.JButton();
        jLabel3 = new javax.swing.JLabel();
        memberNameTxt = new javax.swing.JTextField();
        memberBenefitsLbl1 = new javax.swing.JLabel();
        memberBenefitsTxt = new javax.swing.JTextField();

        jLabel2.setText("Viewing current Employees and their benefits");

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        memberIDLbl.setText("Member ID");

        memberNameLbl.setText("Member Name");

        updateMemberBtn.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        updateMemberBtn.setText("Update Member");
        updateMemberBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                updateMemberBtnActionPerformed(evt);
            }
        });

        doneBtn.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        doneBtn.setText("Done!");
        doneBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                doneBtnActionPerformed(evt);
            }
        });

        jLabel3.setText("Updating current Employees and their benefits");

        memberBenefitsLbl1.setText("Member Benefits");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(170, 170, 170)
                        .addComponent(updateMemberBtn))
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(memberNameLbl, javax.swing.GroupLayout.PREFERRED_SIZE, 126, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(memberIDLbl, javax.swing.GroupLayout.PREFERRED_SIZE, 126, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(memberBenefitsLbl1, javax.swing.GroupLayout.PREFERRED_SIZE, 126, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(44, 44, 44)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(memberIDTxt, javax.swing.GroupLayout.DEFAULT_SIZE, 124, Short.MAX_VALUE)
                            .addComponent(memberNameTxt)
                            .addComponent(memberBenefitsTxt))))
                .addContainerGap(193, Short.MAX_VALUE))
            .addGroup(layout.createSequentialGroup()
                .addGap(144, 144, 144)
                .addComponent(jLabel3, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(doneBtn))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(133, 133, 133)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(memberNameLbl)
                            .addComponent(memberNameTxt, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jLabel3, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 34, Short.MAX_VALUE)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(memberIDTxt, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(memberIDLbl))
                        .addGap(96, 96, 96)))
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(memberBenefitsLbl1)
                    .addComponent(memberBenefitsTxt, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(29, 29, 29)
                .addComponent(updateMemberBtn)
                .addGap(23, 23, 23)
                .addComponent(doneBtn))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void updateMemberBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_updateMemberBtnActionPerformed
        UpdInsDelSel oper=new UpdInsDelSel();
        oper.dbConnection();
        oper.dbUpdate(memberIDTxt.getText(), memberNameTxt.getText(), memberBenefitsTxt.getText());
        clearFields();
    }//GEN-LAST:event_updateMemberBtnActionPerformed

    private void doneBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_doneBtnActionPerformed
        crudMenu cm = new crudMenu();        
        setVisible(false); 
        dispose();
        cm.setVisible(true);    }//GEN-LAST:event_doneBtnActionPerformed

    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(updateMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(updateMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(updateMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(updateMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(() -> {
            new updateMember().setVisible(true);
        });
    }
    
    private void clearFields() {
        memberIDTxt.setText(null);
        memberBenefitsTxt.setText(null);
        memberNameTxt.setText(null);
    }   

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton doneBtn;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel memberBenefitsLbl1;
    private javax.swing.JTextField memberBenefitsTxt;
    private javax.swing.JLabel memberIDLbl;
    private javax.swing.JTextField memberIDTxt;
    private javax.swing.JLabel memberNameLbl;
    private javax.swing.JTextField memberNameTxt;
    private javax.swing.JButton updateMemberBtn;
    // End of variables declaration//GEN-END:variables
}
