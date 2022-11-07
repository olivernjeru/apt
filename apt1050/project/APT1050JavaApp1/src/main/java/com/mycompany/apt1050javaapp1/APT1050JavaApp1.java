
package com.mycompany.apt1050javaapp1;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

    public class APT1050JavaApp1 {
    /**
     * @param args the command line arguments
     */
public static void main(String[] args) { 
        
    Connection conn = null;

    Statement stmt = null;
    ResultSet rs = null;
    
    try {
        conn =
        DriverManager.getConnection("jdbc:mysql://localhost:3306/myusiudb" + "user=root&password=");
        //   "user=root&password=" +"'" + "'");

        stmt = conn.createStatement();
        //rs = stmt.executeQuery("SELECT studentID, FName, LName, Major FROM student");
        // or alternatively, if you don't know ahead of time that
        // the query will be a SELECT...
        if (stmt.execute("SELECT studentID, FName, LName, Major FROM student")) {
        rs = stmt.getResultSet();
        }
        // Now do something with the ResultSet ....
        while (rs.next()) {
          String id = rs.getString("studentID");
          String firstName = rs.getString("FName");
          String lastName = rs.getString("LName");
          String major = rs.getString("Major");

          System.out.println("Student ID: " + id);
          System.out.println("First Name: " + firstName);
          System.out.println("Last Name: " + lastName);
          System.out.println("Major: " + major);
        }

    }
    catch (SQLException ex){
        // handle any errors
        System.out.println("SQLException: " + ex.getMessage());
        System.out.println("SQLState: " + ex.getSQLState());
        System.out.println("VendorError: " + ex.getErrorCode());
        }
    finally {
        // it is a good idea to release
        // resources in a finally{} block
        // in reverse-order of their creation
        // if they are no-longer needed
        if (rs != null) {
            try {
                rs.close();
            } catch (SQLException sqlEx) { } // ignore
            rs = null;
            }
        if (stmt != null) {
            try {
                stmt.close();
            } catch (SQLException sqlEx) { } // ignore
            stmt = null;
        }
    }
      
}
    
}
