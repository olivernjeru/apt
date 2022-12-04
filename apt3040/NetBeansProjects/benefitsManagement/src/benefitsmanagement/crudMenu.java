package benefitsmanagement;

import java.awt.Color;

public class crudMenu extends javax.swing.JFrame {

    public crudMenu() {
        initComponents();
            addMemberBtn.setBackground(Color.green);
            viewMemberBtn.setBackground(Color.cyan);            
            updateMemberBtn.setBackground(Color.yellow);
            deleteMemberBtn.setBackground(Color.magenta);
            logoutBtn.setBackground(Color.red);
    }
    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jScrollPane1 = new javax.swing.JScrollPane();
        jTextArea1 = new javax.swing.JTextArea();
        jScrollPane2 = new javax.swing.JScrollPane();
        jTextArea2 = new javax.swing.JTextArea();
        addMemberBtn = new javax.swing.JButton();
        viewMemberBtn = new javax.swing.JButton();
        updateMemberBtn = new javax.swing.JButton();
        deleteMemberBtn = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();
        logoutBtn = new javax.swing.JButton();

        jTextArea1.setColumns(20);
        jTextArea1.setRows(5);
        jScrollPane1.setViewportView(jTextArea1);

        jTextArea2.setColumns(20);
        jTextArea2.setRows(5);
        jScrollPane2.setViewportView(jTextArea2);

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        addMemberBtn.setFont(new java.awt.Font("Tahoma", 0, 36)); // NOI18N
        addMemberBtn.setText("Add Member");
        addMemberBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                addMemberBtnActionPerformed(evt);
            }
        });

        viewMemberBtn.setFont(new java.awt.Font("Tahoma", 0, 36)); // NOI18N
        viewMemberBtn.setText("View Member");
        viewMemberBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                viewMemberBtnActionPerformed(evt);
            }
        });

        updateMemberBtn.setFont(new java.awt.Font("Tahoma", 0, 36)); // NOI18N
        updateMemberBtn.setText("Update Member");
        updateMemberBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                updateMemberBtnActionPerformed(evt);
            }
        });

        deleteMemberBtn.setFont(new java.awt.Font("Tahoma", 0, 36)); // NOI18N
        deleteMemberBtn.setText("Delete Member");
        deleteMemberBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                deleteMemberBtnActionPerformed(evt);
            }
        });

        jLabel1.setText("Employee Benefit Management System");

        logoutBtn.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        logoutBtn.setText("LogOut");
        logoutBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                logoutBtnActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(103, 103, 103)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(deleteMemberBtn, javax.swing.GroupLayout.PREFERRED_SIZE, 284, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(addMemberBtn, javax.swing.GroupLayout.PREFERRED_SIZE, 284, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(viewMemberBtn, javax.swing.GroupLayout.PREFERRED_SIZE, 284, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(updateMemberBtn))
                .addGap(0, 123, Short.MAX_VALUE))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 236, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(120, 120, 120))
                    .addComponent(logoutBtn, javax.swing.GroupLayout.Alignment.TRAILING)))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(addMemberBtn, javax.swing.GroupLayout.PREFERRED_SIZE, 44, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(viewMemberBtn, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(updateMemberBtn, javax.swing.GroupLayout.PREFERRED_SIZE, 47, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(deleteMemberBtn)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 10, Short.MAX_VALUE)
                .addComponent(logoutBtn))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void addMemberBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_addMemberBtnActionPerformed
        addMember am = new addMember();
        am.setVisible(true);
        setVisible(false); 
        dispose();
    }//GEN-LAST:event_addMemberBtnActionPerformed

    private void viewMemberBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_viewMemberBtnActionPerformed
        viewMember vm = new viewMember();
        vm.setVisible(true);
        setVisible(false); 
        dispose();
    }//GEN-LAST:event_viewMemberBtnActionPerformed

    private void updateMemberBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_updateMemberBtnActionPerformed
        updateMember um = new updateMember();
        um.setVisible(true);
        setVisible(false); 
        dispose();
    }//GEN-LAST:event_updateMemberBtnActionPerformed

    private void deleteMemberBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_deleteMemberBtnActionPerformed
        deleteMember dm = new deleteMember();
        dm.setVisible(true);
        setVisible(false); 
        dispose();
    }//GEN-LAST:event_deleteMemberBtnActionPerformed

    private void logoutBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_logoutBtnActionPerformed
        welcomeForm wf = new welcomeForm();
        wf.setVisible(true);
        setVisible(false); 
        dispose();
    }//GEN-LAST:event_logoutBtnActionPerformed

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
            java.util.logging.Logger.getLogger(crudMenu.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(crudMenu.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(crudMenu.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(crudMenu.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new crudMenu().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton addMemberBtn;
    private javax.swing.JButton deleteMemberBtn;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JTextArea jTextArea1;
    private javax.swing.JTextArea jTextArea2;
    private javax.swing.JButton logoutBtn;
    private javax.swing.JButton updateMemberBtn;
    private javax.swing.JButton viewMemberBtn;
    // End of variables declaration//GEN-END:variables
}
