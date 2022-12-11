package benefitsmanagement;

import java.awt.Color;

public class deleteMember extends javax.swing.JFrame {

    public deleteMember() {
        initComponents();
        deleteMemberBtn.setBackground(Color.magenta);
        doneBtn.setBackground(Color.red);
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        memberIDLbl = new javax.swing.JLabel();
        memberIDTxt = new javax.swing.JTextField();
        deleteMemberBtn = new javax.swing.JButton();
        doneBtn = new javax.swing.JButton();
        jLabel3 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        memberIDLbl.setText("Member ID");

        memberIDTxt.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                memberIDTxtActionPerformed(evt);
            }
        });

        deleteMemberBtn.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        deleteMemberBtn.setText("Delete Member");
        deleteMemberBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                deleteMemberBtnActionPerformed(evt);
            }
        });

        doneBtn.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        doneBtn.setText("Done!");
        doneBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                doneBtnActionPerformed(evt);
            }
        });

        jLabel3.setText("*Only Enter the Member ID that you wanna delete");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(159, 159, 159)
                        .addComponent(memberIDTxt, javax.swing.GroupLayout.PREFERRED_SIZE, 141, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(51, 51, 51)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel3)
                            .addComponent(memberIDLbl, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(deleteMemberBtn)
                                .addGap(59, 59, 59)
                                .addComponent(doneBtn)))))
                .addContainerGap(74, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(27, 27, 27)
                .addComponent(jLabel3)
                .addGap(38, 38, 38)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(memberIDLbl)
                    .addComponent(memberIDTxt, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 69, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(deleteMemberBtn)
                    .addComponent(doneBtn))
                .addGap(34, 34, 34))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void memberIDTxtActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_memberIDTxtActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_memberIDTxtActionPerformed

    private void deleteMemberBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_deleteMemberBtnActionPerformed
        UpdInsDelSel oper=new UpdInsDelSel();
        oper.dbConnection();
        oper.dbDelete(memberIDTxt.getText());        // TODO add your handling code here:
        memberIDTxt.setText(null);
    }//GEN-LAST:event_deleteMemberBtnActionPerformed
  
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
            java.util.logging.Logger.getLogger(deleteMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(deleteMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(deleteMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(deleteMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(() -> {
            new deleteMember().setVisible(true);
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton deleteMemberBtn;
    private javax.swing.JButton doneBtn;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel memberIDLbl;
    private javax.swing.JTextField memberIDTxt;
    // End of variables declaration//GEN-END:variables
}
