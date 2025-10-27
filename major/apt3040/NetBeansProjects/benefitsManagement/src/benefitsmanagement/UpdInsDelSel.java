package benefitsmanagement;
import java.sql.*;
import javax.swing.JOptionPane;

public class UpdInsDelSel {
    Connection con;
    Statement st;
     
    public void dbConnection(){
        try {
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/payrolldb","root","");
            st= con.createStatement();
        } 
        catch (SQLException e) {
            System.out.println("Error:" + e);
        } 
    }

    public  void dbInsert(String imemID, String imemName, String imemBenefits) {
        try {
            st.executeUpdate("INSERT INTO memberbenefits (memID, memName, memBenefits) values ('"+imemID+"','"+imemName+"','"+imemBenefits+"')");
            JOptionPane.showMessageDialog(null, "Member Record Successfully Added");
         } 
        catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Member Record NOT Added");
            System.out.println("Error:" + e);
        }
       } 

    public void dbDelete(String dmemID) {
        try {
            st.executeUpdate("DELETE  FROM memberbenefits WHERE memID='"+dmemID+"' ");
            JOptionPane.showMessageDialog(null, "Member Record Successfully Deleted"); 
        } 
        catch(SQLException e) {
            JOptionPane.showMessageDialog(null, "Member Record NOT Deleted");
            System.out.println("Error:" + e);
        }
    }


    public void dbUpdate(String umemID, String umemName, String umemBenefits) {
        try {
            st.executeUpdate("UPDATE memberbenefits SET memName = '"+umemName+"', memBenefits = '"+umemBenefits+"' WHERE memID='"+umemID+"' ");
            JOptionPane.showMessageDialog(null, "Member Record Successfully Updated"); 
        } 
        catch(SQLException e) {
            JOptionPane.showMessageDialog(null, "Member Record NOT Updated");
            System.out.println("Error:" + e);
        }
    }
}