<?php
echo "<p>Welcome <strong>$_POST[username]</strong>!</p>
    <p>Your favorite class is $_POST[choice]</p>
    <p>Your selected topics: </p>";
if(!empty($_POST['checked'])) {
        echo"<ul>";
        foreach($_POST['checked'] as $value) {
                echo "<li>$value</li>";
        }
        echo "</ul";
}
?>