package oopdb;

import java.sql.*;
public class payrolldb {
    static Connection con;
    static Statement st;
    
        public static void main (String[] args){
            try{
                con=DriverManager.getConnection("jdbc:mysql://localhost:3306/hr-database", "s", "s");
                st=con.createStatement();
                st.executeUpdate("INSERT INTO payroll(empId, salary, empName) VALUES('e3333', 50000, 'ndiba')");
                st.executeUpdate("DELETE FROM payroll WHERE empId='e1111'");
                st.executeUpdate("UPDATE payroll SET empName='mambo' WHERE empid='e3333'");
            } catch(SQLException e) {
            }
        }
}
