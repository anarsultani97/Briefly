<?php

$txtName = &_POST['txtName'];
$txtEmail = &_POST['txtEmail'];
$txtMsg = &_POST['txtMsg'];
$to = "rauf.huseynov.77@mail.ru";
$subject = "New message"
mail($to, $subject, $txtMsg, "From : " . $txtName);

echo "Your message has been sent)";
?>