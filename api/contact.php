<?php
include_once('classes/sendmail.php');
include_once('config.php');

$SendMailFailederrorMessage = "Something went wrong";
$SendMailEmptyerrorMessage = "Empty form";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json);

if( empty($_POST['name']) && empty($_POST['email']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage
        ]
    );
    exit();
}
if ($_POST){
    echo "IN THE LOOP !!!";
    http_response_code(200);
    $subject = 'Contact from: ' . $_POST['name'];
    echo $subject;
    $from = $_POST['email'];
    echo $from;
    $message = $_POST['message'];
    echo $message;
    //Actual sending email
    echo "Before send";
    $sendEmail = new Sender($adminEmail, $from, $subject, $message);
    $sendEmail->send();
    echo "after send";
}
else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}