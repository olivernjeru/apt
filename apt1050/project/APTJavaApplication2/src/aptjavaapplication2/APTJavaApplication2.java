package aptjavaapplication2;

import javax.swing.JFrame; 
import javax.swing.JTextField;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JButton;
import java.awt.GridLayout;
import java.awt.FlowLayout;
import java.awt.Color;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

public class APTJavaApplication2 extends JFrame implements ActionListener
{
    public static final int WIDTH = 400;
    public static final int HEIGHT = 400;
    public static final int NUMBER_OF_CHAR = 30;
    
    public Connection conn = null;
    public Statement stmt = null;
    public ResultSet  rs = null;
    
    public JTextField stdIDtxt = new JTextField(NUMBER_OF_CHAR);
    public JTextField stdFNtxt = new JTextField(NUMBER_OF_CHAR);  
    public JTextField stdLNtxt = new JTextField(NUMBER_OF_CHAR);  
    public JTextField stdMjtxt = new JTextField(NUMBER_OF_CHAR);

    public JLabel idLabel = new JLabel("Student ID:");
    public JLabel fNLabel = new JLabel("First Name:");
    public JLabel lNLabel = new JLabel("Last Name:");
    public JLabel mjLabel = new JLabel("Major:");

    public JLabel statusLabel = new JLabel("");

    public static void main(String[] args)
    {
        APTJavaApplication2 gui = new APTJavaApplication2( );
        gui.setVisible(true);
    }


    public APTJavaApplication2( )
    {
        super("GUI Database Connecivity: USIU Students");
        setSize(WIDTH, HEIGHT);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(3, 1));
    
        JPanel dataPanel = new JPanel( ); 
        dataPanel.setBackground(Color.WHITE); 
        dataPanel.setLayout(new GridLayout(4, 2));

        dataPanel.add(idLabel);
        dataPanel.add(stdIDtxt);		

        dataPanel.add(fNLabel);   
        dataPanel.add(stdFNtxt);

        dataPanel.add(lNLabel);   
        dataPanel.add(stdLNtxt);

        dataPanel.add(mjLabel);   
        dataPanel.add(stdMjtxt);		

        add(dataPanel);
		
        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new FlowLayout( ));
        buttonPanel.setBackground(Color.WHITE); 
        JButton actionButton = new JButton("Next"); 
        actionButton.addActionListener(this);
        buttonPanel.add(actionButton);

        JButton closeButton = new JButton("Close"); 
        closeButton.addActionListener(this);
        buttonPanel.add(closeButton); 

        add(buttonPanel);
    
        JPanel statusPanel = new JPanel();
        statusPanel.setLayout(new FlowLayout());
        statusPanel.setBackground(Color.BLUE); 
        statusPanel.add(statusLabel);
        add(statusPanel);

       // DB connection starts here  
    
    try {
        conn =
        DriverManager.getConnection("jdbc:mysql://localhost:3306/myusiudb?" + "user=root&password=");
        stmt = conn.createStatement();
        // rs = stmt.executeQuery("SELECT studentID, FName, LName, Major FROM student");
        // or alternatively, if you don't know ahead of time that
        // the query will be a SELECT...
        if (stmt.execute("SELECT studentID, FName, LName, Major FROM student")) {
            rs = stmt.getResultSet();        
        }
        
    }
    catch (SQLException ex){
        // handle any errors
        System.out.println("SQLException: " + ex.getMessage());
        System.out.println("SQLState: " + ex.getSQLState());
        System.out.println("VendorError: " + ex.getErrorCode());
        }
    } 
    
    // Events start here (Next Record or terminate)
    public void actionPerformed(ActionEvent e) 
    {
        String actionCommand = e.getActionCommand( );

        if (actionCommand.equals("Next")) {
            try {
            if (rs.next()) {
                stdIDtxt.setText( rs.getString("studentID") );            
                stdFNtxt.setText( rs.getString("FName"));
                stdLNtxt.setText(rs.getString("LName") );
                stdMjtxt.setText( rs.getString("Major") );
            }
            else
               statusLabel.setText("End of data reached"); 
            }
            catch (SQLException ex){
                // handle any errors
                System.out.println("SQLException: " + ex.getMessage());
                System.out.println("SQLState: " + ex.getSQLState());
                System.out.println("VendorError: " + ex.getErrorCode());
            }
           
        }
        else if (actionCommand.equals("Close")) {
            // close all
            terminateAll();   // graceful shutdown of our open database
            System.exit(0);
        }
        else
            System.exit(1);
    } 

    void terminateAll() {
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
  