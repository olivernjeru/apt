<%-- 
    Document   : javaDBConnectivity
    Created on : June 27, 2022, 11:20:46 AM
    Author     : Gerald Chege
--%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=windows-1252"   import="java.sql.*"%>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252"/>    
<title> THREE-TIER DATABASE SOLUTIONS </title>

  </head>
  <body>


  <h2> APT1050 JSP/JAVA/ORACLE DATABASE CONNECTIVITY   </h2>


 			<form action = "readData.jsp"  method = POST>
                     <table width="700" cellspacing=0 border="0" cellpadding="0" align="left" >
                         <tr>
                              <td width="50%">Select Field</td>                            
                            <td>
                              <select name="dataField" style="color:rgb(0,0,255);">
                                <option> PNO </option>
                                <option> PNAME </option>						<option> WEIGHT </option>
                                <option> COLOR </option>						<option> STATUS </option>
                              </select>
                          </td>
                          </tr>

                          <tr> 
                                <td>  <p>&nbsp;</p></td>  
                                <td>  <p>&nbsp;</p></td>   
                          </tr> 
                          <tr>
                            <td> 
                                <input type="submit" name="Submit " />
                            </td>
                          </tr>
                          
                        </table> 
                        
                    </form>
</body>
</html>
