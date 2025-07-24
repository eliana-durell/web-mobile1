<!DOCTYPE html>
<html lang="en">
<body>
<?php
Echo "<h1>PHP Date</h1>";
$today = date("l F \t\h\e jS Y");
$time = date("H");
Echo "<h2> Today is </h2>
      <h3>$today</h3>";
if ($time<="10")
    Echo "<h2>The time is $time </h2><p>
         Have a good day!</p>";
    else
    Echo "<h2>The time is $time </h2>
        <p> Have a good night!</p>";
?>  
</body>
</html>