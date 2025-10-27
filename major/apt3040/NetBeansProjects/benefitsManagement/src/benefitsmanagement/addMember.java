package benefitsmanagement;

import java.awt.*;  

public class addMember extends javax.swing.JFrame {
    
    public addMember() {
        initComponents();
        createMemberBtn.setBackground(Color.green);
        doneBtn.setBackground(Color.red);
    }
    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        memberIDLbl = new javax.swing.JLabel();
        memberIDTxt = new javax.swing.JTextField();
        memberNameLbl = new javax.swing.JLabel();
        memberNameTxt = new javax.swing.JTextField();
        memberBenefitsLbl = new javax.swing.JLabel();
        memberBenefitsTxt = new javax.swing.JTextField();
        createMemberBtn = new javax.swing.JButton();
        doneBtn = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();

        jLabel1.setText("Employee Benefit Management System");

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        memberIDLbl.setText("Member ID");

        memberNameLbl.setText("Member Name");

        memberBenefitsLbl.setText("Member Benefits");

        memberBenefitsTxt.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                memberBenefitsTxtActionPerformed(evt);
            }
        });

        createMemberBtn.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        createMemberBtn.setText("Create Member");
        createMemberBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                createMemberBtnActionPerformed(evt);
            }
        });

        doneBtn.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        doneBtn.setText("Done!");
        doneBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                doneBtnActionPerformed(evt);
            }
        });

        jLabel2.setText("Adding New Employee and the benefits");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(25, 25, 25)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 236, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                        .addGroup(layout.createSequentialGroup()
                            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addComponent(memberIDLbl, javax.swing.GroupLayout.PREFERRED_SIZE, 115, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(memberNameLbl, javax.swing.GroupLayout.PREFERRED_SIZE, 115, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGap(50, 50, 50)
                            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addComponent(memberNameTxt)
                                .addGroup(layout.createSequentialGroup()
                                    .addComponent(memberIDTxt, javax.swing.GroupLayout.PREFERRED_SIZE, 98, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addGap(0, 0, Short.MAX_VALUE))))
                        .addGroup(layout.createSequentialGroup()
                            .addComponent(memberBenefitsLbl, javax.swing.GroupLayout.PREFERRED_SIZE, 115, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addGap(50, 50, 50)
                            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addComponent(createMemberBtn, javax.swing.GroupLayout.PREFERRED_SIZE, 150, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(memberBenefitsTxt, javax.swing.GroupLayout.PREFERRED_SIZE, 201, javax.swing.GroupLayout.PREFERRED_SIZE)))))
                .addContainerGap(119, Short.MAX_VALUE))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(doneBtn))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(memberIDLbl, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(memberIDTxt, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(26, 26, 26)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(memberNameLbl, javax.swing.GroupLayout.PREFERRED_SIZE, 29, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(memberNameTxt, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(29, 29, 29)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(memberBenefitsLbl, javax.swing.GroupLayout.PREFERRED_SIZE, 28, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(3, 3, 3)
                        .addComponent(memberBenefitsTxt)))
                .addGap(27, 27, 27)
                .addComponent(createMemberBtn, javax.swing.GroupLayout.PREFERRED_SIZE, 39, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(13, 13, 13)
                .addComponent(doneBtn))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void memberBenefitsTxtActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_memberBenefitsTxtActionPerformed
    }//GEN-LAST:event_memberBenefitsTxtActionPerformed

    private void createMemberBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_createMemberBtnActionPerformed
        UpdInsDelSel oper = new UpdInsDelSel();
        oper.dbConnection();
        oper.dbInsert(memberIDTxt.getText(), memberNameTxt.getText(), memberBenefitsTxt.getText());
        clearFields();
    }//GEN-LAST:event_createMemberBtnActionPerformed

    private void doneBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_doneBtnActionPerformed
        crudMenu cm = new crudMenu();
        cm.setVisible(true);
        setVisible(false); 
        dispose();
    }//GEN-LAST:event_doneBtnActionPerformed

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
            java.util.logging.Logger.getLogger(addMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(addMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(addMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(addMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(() -> {
            new addMember().setVisible(true);
        });
    }
    
    private void clearFields() {
memberIDTxt.setText(null);
memberNameTxt.setText(null);
memberBenefitsTxt.setText(null);
}    

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton createMemberBtn;
    private javax.swing.JButton doneBtn;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel memberBenefitsLbl;
    private javax.swing.JTextField memberBenefitsTxt;
    private javax.swing.JLabel memberIDLbl;
    private javax.swing.JTextField memberIDTxt;
    private javax.swing.JLabel memberNameLbl;
    private javax.swing.JTextField memberNameTxt;
    // End of variables declaration//GEN-END:variables
}
