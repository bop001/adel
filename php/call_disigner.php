<?php
    $recepient = "info@adelheid.ru";
    $sitename = "adel.com";

    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    $message = "Имя: $name\nТелефон: $phone\n";
    $pagetitle = "Вызов Дизайнера";
    mail($recepient, $pagetitle, $message);

   