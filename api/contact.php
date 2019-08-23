<?php
include_once('classes/sendmail.php');
include_once('config.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json);
echo gettype($_POST);
echo $_POST->email;

if( empty($_POST['name']) && empty($_POST['email']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage
        ]
    );
    echo $_POST['name'];
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
//    echo $_POST['email'];
//    echo $_POST['name'];
//    echo $_POST['message'];
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