# Assignment 6 Addendum

## Part II

This addendum to Lab #6 is an aid to help you answer the questions dealing with data input and data output forms

There are three simple files you need to complete Part II of  the Lab.
The readData.jsp file is called by the form defined in formTest.jsP fie.

1)	Create the two JSP files inside your Web folder of Lab#6  (The Oracle three-tier Solution)
2)	Create a first user interface JSP file (call it index.jsp)  with a hyperlink. The purpose of the link is to call the form in the file formTest.jps.  Ensure your href calls this file;

3)	Now copy all the code in the file readDataMethod.doc file and paste it into the DataHandler file   (you are creating a method for reading user defined data from the database)
4)	Now run the project as before and observe the retrieved data (this is the page we had with tabular data so far).  Now click on the link to experiment with two new files.
5)	This should give you data for PNO, PName, WEIGHT, COLOR or STATUS depending on what you select on the form.
6)	Use the techniques demonstrated here to complete the remainder of Lab#6

## Read Data Method

```
/**** Include this method in Data Handler class  ******/


 // READ DATA from your Database
    public ResultSet readData(Connection conn, String dataQuery) throws SQLException {

      try {
          stmt = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,  ResultSet.CONCUR_READ_ONLY);

          rset = stmt.executeQuery(dataQuery);

      }
      catch ( SQLException ex ) {
          //logException( ex );
      }
      return rset;
    }
```

