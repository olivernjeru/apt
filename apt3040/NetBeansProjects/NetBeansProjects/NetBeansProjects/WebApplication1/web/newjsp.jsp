<%-- 
    Document   : javaDBJSPConnectivity
    Created on : June 23, 2022, 03:16:27 PM
    Author     : Gerald Chege
--%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=windows-1252"   import="java.sql.*"%>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252"/>
    <title>APT1050 JAVA/ORACLE DATABASE CONNECTIVITY </title>


  </head>
  <body>
  <jsp:useBean id="dataBean" class="APT1050.DataHandler" scope="session"/>

  <h2> APT1050 JAVA/ORACLE DATABASE CONNECTIVITY   </h2>

   <%
    Connection conn;
    ResultSet rset;
    //String pno, pname, colour, weight, status
    
    // get a connection
    conn = dataBean.getDBConnection();

    rset = dataBean.getData(conn);
    %>

     <table cellspacing="0" cellpadding="1" border="1" width="100%">


  <% while (rset.next()) {
        %>
 <tr bgcolor="#00adff">
    <td width="12%"> <%= rset.getString("PNO")%></td>
	   <td width="12%"> <%= rset.getString("PNAME")%></td>
	   <td width="12%"> <%= rset.getString("COLOR")%></td>
    <td width="12%"> <%= rset.getString("WEIGHT")%></td>
<td width="12%"> <%= rset.getString("STATUS")%></td>
 </tr>
        <%} %>

     <% rset.close();%>

    </table></body>
</html>

