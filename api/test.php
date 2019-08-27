<?php
// Email that will receive emails
$adminEmail =  "maxim.berge@gmail.com"; // Email that SEND the emails

// * ---------- ERROR MESSAGES --------- *
$emptyErrorMessage = 'Formulaire incomplet. Veuillez remplir tous les champs.';
$failedErrorMessage = "L'envoie du mail à échoué. Veuillez recommencer.";

// Allow cross origin
header("Access-Control-Allow-Origin: *");
// Allow cross Header (to have access to application/json)
header("Access-Control-Allow-Headers: content-type");

$json = '{"name": "maxim", "email": "maxim@gmail.com", "message": "lol"}';

$rest_json = file_get_contents("php://input");
$POST_CONTENT = json_decode($rest_json);

//echo json_encode(
//     [
//        'sent' => true,
//        'message' => 'HAAA',
//     ]);
//var_dump($POST_CONTENT);

if($POST_CONTENT){
    echo json_encode(
     [
        'sent' => true,
        'message' => 'OK'
     ]
 );
}
else{
    echo json_encode(
     [
        'sent' => false,
        'message' => 'HAAA',
     ]);
//}