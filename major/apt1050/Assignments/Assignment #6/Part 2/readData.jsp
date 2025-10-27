<%-- 
    Document   : javaDBConnectivity
    Created on : June 29, 2022, 12:14:27 PM
    Author     : Gerald Chege
--%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=windows-1252"   import="java.sql.*"%>
<jsp:useBean id="myBean" class="APT1050.DataHandler" scope="session"/>     <br>

<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252"/>
    <title> THREE-TIER DATABASE SOLUTIONS </title>

  </head>
  <body>


  <h2> APT1050 JSP/JAVA/ORACLE DATABASE CONNECTIVITY   </h2>

   <%
    Connection conn;
    ResultSet rset;

    // get a connection
    conn = myBean.getDBConnection();           
        
        String dataStr = request.getParameter("dataField");   // retrive posted data from Form

	query = "SELECT " + dataStr  +  " FROM PARTS ";

    rset = myBean.readData (conn, query); 
    %>

     <table cellspacing="0" cellpadding="1" border="1" width="100%">      	 

         <% while (rset.next()) 
			{%>
			<tr bgcolor="#00adcc"> 

			 <td width="12%"> <%= rset.getString("dataStr")%></td>
			 <td width="12%"> <%= rset.getString(dataStr)%></td>
			 </tr>
        <%} %>

      
     <% rset.close();%>

    </table>
</body>
</html>


