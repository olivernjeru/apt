/**
 *
 * @author gchege
 */
package APT1050;

import java.sql.*;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import oracle.jdbc.pool.OracleDataSource;
import java.sql.Statement;
import javax.servlet.http.HttpSession;
import java.lang.StringBuffer;

public class DataHandler {

// class constructor method
public DataHandler() {

}
    // in general connection declared as:

   String jdbcUrl = "jdbc:oracle:thin:@127.0.0.1:1521:XE";

    //String userid = "SYSTEM";
    //String password = "123456"; //We need to confirm password (usually the default is called oracle)

String userid = "APT1050";				//name of workspace
    String password = "gchege"; 	// workspace pwd

    Connection conn;
    Statement stmt;
    ResultSet rset;
    String query;
    String sqlString;


    /* User Authentication done here – this is the general format for production systems: 
     Method authenticateUser checks if the userid, password, and host values supplied by a user are valid:
     requires import of the javax.servlet.http.HttpSession class
    */

    /*public boolean authenticateUser(String jdbcUrl, String userid, String password,
    HttpSession session) throws SQLException {
    this.jdbcUrl = jdbcUrl;
    this.userid = userid;
    this.password = password;


    try {
        OracleDataSource ds;
        ds = new OracleDataSource();
        ds.setURL(jdbcUrl);
        conn = ds.getConnection(userid, password);
        return true;
    }
    catch ( SQLException ex ) {
        System.out.println("Invalid user credentials");
        session.setAttribute("loginerrormsg", "Invalid Login. Try Again...");
        this.jdbcUrl = null;
        this.userid = null;
        this.password = null;
        return false;
      }
    }

*/

// our getDBConnection connection method defined here
public  Connection  getDBConnection() throws SQLException {
         try {
             OracleDataSource ds;
             ds = new OracleDataSource();
             ds.setURL(jdbcUrl);
             conn = ds.getConnection(userid, password);
         } catch ( SQLException ex ) {
             //logException( ex );
         }
         return conn;
    }



    // READ DATA from your Database (e.g. from PARTS Table)
    public ResultSet getData(Connection conn) throws SQLException{

      try {
          stmt = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, 
                  ResultSet.CONCUR_READ_ONLY);

          query = "SELECT PNO, PNAME, COLOR, WEIGHT, STATUS FROM PARTS";

          rset = stmt.executeQuery(query);

      }
      catch ( SQLException ex ) {
          //logException( ex );
      }
      return rset;
    }

}
