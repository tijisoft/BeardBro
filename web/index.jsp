<%-- 
    Document   : index
    Created on : Mar 31, 2014, 9:19:58 AM
    Author     : felix
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>BeardBro Test</title>
        <script src="../BeardBro/JS/Local/Validation.js"></script>
    </head>
    <body  >
       <%--  <h1>Welcome to BeardBro Code Test Form</h1>--%>
        <form name="beardForm" action="notDefinedYet" method="POST" >
            <label>First Name: </label><input type="text" name="firstName" value="" size="30" onclick="window.alert(splitField('beardForm','firstName'));"  />
                    </br>
                    </br>

            <label>Last Name: </label> <input type="text" name="lastName" value="" size="30" />
                        </br>
                         </br>

            <label>Favorite Food: </label><input type="text" name="favoriteFood" value="" size="30" />
                        </br>
                          </br>

            <label>Favorite Number: </label><input type="text" name="favoriteNumber" value="" size="30" />
                         </br>
                          </br>

              <label>Favorite Day: </label>
              <select name="favoriteDay">
                  <option value="day" selected>Select your favorite day</option>
                  <option></option>
              </select>
                          </br>
                          </br>

             <label>Favorite Color: </label>
              <select name="favoriteColor">
                  <option value="color" selected>Select your favorite color</option>
                  <option></option>
              </select>
                          </br>
                          </br>

                          <input type="submit" value="Submit" />
              
        </form>
    </body>
</html>
