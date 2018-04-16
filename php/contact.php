<?php

    $array = array("name" => "",
                   "email" => "",
                   "message" => "",
                   "isSuccess" => false
                   );
    $emailTo = "aureliencartier@hotmail.com";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $array["name"] = verifyInput($_POST['name']);
        $array["email"] = verifyInput($_POST['email']);
        $array["message"] = verifyInput($_POST['message']);
        $array["isSuccess"] = true;
        $emailText = "";
        
        if (empty($array["name"])) {
            $array["isSuccess"] = false;
        } else
            $emailText .= "Name : {$array["name"]}\n";
        
        if (!isEmail($array["email"])) {
            $array["isSuccess"] = false;
        } else
            $emailText .= "Email : {$array["email"]}\n";
        
        if (empty($array["message"])) {
            $array["isSuccess"] = false;
        } else
            $emailText .= "Message : {$array["message"]}\n";
        
        if ($array["isSuccess"]) {
            $headers = "From: {$array["firstname"]} {$array["name"]} <{$array["email"]}>\r\nReply-To: {$array["email"]}";
            mail($emailTo, "Un message de votre site", $emailText, $headers);
        }
        
        echo json_encode($array);
    }

    function isEmail($var) {
        
        return preg_match('/^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/', $var);
    }

    function verifyInput($var) {
    
        $var = trim($var);
        $var = stripslashes($var);
        $var = htmlspecialchars($var);
    
        return $var;
    }