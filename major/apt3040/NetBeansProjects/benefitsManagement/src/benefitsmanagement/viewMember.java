package benefitsmanagement;

import java.awt.Color;
import javax.swing.*;
import java.sql.*;

public class viewMember extends javax.swing.JFrame  {
     
    public viewMember() {
        initComponents();
        memberNameTxt.setEditable(false);  
        memberBenefitsTxt.setEditable(false);
        viewMemberBtn.setBackground(Color.cyan);            
        doneBtn.setBackground(Color.red);
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jScrollPane1 = new javax.swing.JScrollPane();
        jTable1 = new javax.swing.JTable();
        memberIDLbl = new javax.swing.JLabel();
        memberIDTxt = new javax.swing.JTextField();
        viewMemberBtn = new javax.swing.JButton();
        doneBtn = new javax.swing.JButton();
        memberNameLbl = new javax.swing.JLabel();
        memberBenefitsLbl = new javax.swing.JLabel();
        memberNameTxt = new javax.swing.JTextField();
        memberBenefitsTxt = new javax.swing.JTextField();
        jLabel2 = new javax.swing.JLabel();

        jTable1.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null}
            },
            new String [] {
                "Title 1", "Title 2", "Title 3", "Title 4"
            }
        ));
        jScrollPane1.setViewportView(jTable1);

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        memberIDLbl.setText("Member ID");

        memberIDTxt.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                memberIDTxtActionPerformed(evt);
            }
        });
        memberIDTxt.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyPressed(java.awt.event.KeyEvent evt) {
                memberIDTxtKeyPressed(evt);
            }
        });

        viewMemberBtn.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        viewMemberBtn.setText("View Member");
        viewMemberBtn.setToolTipText("");
        viewMemberBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                viewMemberBtnActionPerformed(evt);
            }
        });

        doneBtn.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        doneBtn.setText("Done!");
        doneBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                doneBtnActionPerformed(evt);
            }
        });

        memberNameLbl.setText("Member Name");

        memberBenefitsLbl.setText("Member Benefits");

        memberNameTxt.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                memberNameTxtActionPerformed(evt);
            }
        });

        memberBenefitsTxt.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                memberBenefitsTxtActionPerformed(evt);
            }
        });

        jLabel2.setText("*Only Enter the Member ID then Click View Member Button to Fetch Results");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(73, 73, 73)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(memberNameLbl, javax.swing.GroupLayout.PREFERRED_SIZE, 115, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(memberIDLbl)
                            .addComponent(memberBenefitsLbl))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                            .addComponent(memberNameTxt, javax.swing.GroupLayout.DEFAULT_SIZE, 191, Short.MAX_VALUE)
                            .addComponent(memberIDTxt)
                            .addComponent(memberBenefitsTxt))
                        .addGap(78, 78, 78))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(96, 96, 96)
                        .addComponent(viewMemberBtn)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(doneBtn)
                        .addGap(52, 52, 52))))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap(82, Short.MAX_VALUE)
                .addComponent(jLabel2)
                .addGap(92, 92, 92))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel2)
                .addGap(23, 23, 23)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(memberIDTxt, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(memberIDLbl))
                .addGap(32, 32, 32)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(memberNameTxt, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(memberNameLbl))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 28, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(memberBenefitsTxt, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(memberBenefitsLbl))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 72, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(viewMemberBtn)
                    .addComponent(doneBtn))
                .addGap(34, 34, 34))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void doneBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_doneBtnActionPerformed
        crudMenu cm = new crudMenu();
        setVisible(false); 
        dispose();
        cm.setVisible(true);    }//GEN-LAST:event_doneBtnActionPerformed

    
    
    private void viewMemberBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_viewMemberBtnActionPerformed
        try {  
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/payrolldb","root","");  
            PreparedStatement st = con.prepareStatement("SELECT * FROM memberbenefits where memID=?"); 
            String str = memberIDTxt.getText();  
            st.setString(1, str);  
            //Excuting Query  
            ResultSet rs = st.executeQuery();  
            if (rs.next()) {  
                String s1 = rs.getString(2);  
                String s2 = rs.getString(3);  
                //Sets Records in TextFields.  
                memberNameTxt.setText(s1);  
                memberBenefitsTxt.setText(s2);  
            } else {  
                JOptionPane.showMessageDialog(null, "Member with that ID not Found");  
            }  
            //Create Exception Handler  
        } catch (SQLException e) {  
        }  

    }//GEN-LAST:event_viewMemberBtnActionPerformed

    private void memberNameTxtActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_memberNameTxtActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_memberNameTxtActionPerformed

    private void memberBenefitsTxtActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_memberBenefitsTxtActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_memberBenefitsTxtActionPerformed

    private void memberIDTxtKeyPressed(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_memberIDTxtKeyPressed
        // TODO add your handling code here:
    }//GEN-LAST:event_memberIDTxtKeyPressed

    private void memberIDTxtActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_memberIDTxtActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_memberIDTxtActionPerformed
    
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
            java.util.logging.Logger.getLogger(viewMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(viewMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(viewMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(viewMember.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(() -> {
            new viewMember().setVisible(true);
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton doneBtn;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTable jTable1;
    private javax.swing.JLabel memberBenefitsLbl;
    private javax.swing.JTextField memberBenefitsTxt;
    private javax.swing.JLabel memberIDLbl;
    private javax.swing.JTextField memberIDTxt;
    private javax.swing.JLabel memberNameLbl;
    private javax.swing.JTextField memberNameTxt;
    private javax.swing.JButton viewMemberBtn;
    // End of variables declaration//GEN-END:variables
}
