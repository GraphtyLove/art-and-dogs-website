<?php
// Email that will receive emails
$adminEmail =  "maxim.berge@gmail.com"; // Email that SEND the emails

// * ---------- ERROR MESSAGES --------- *
$emptyErrorMessage = 'Formulaire incomplet. Veuillez remplir tous les champs.';
$failedErrorMessage = "L'envoie du mail à échoué. Veuillez recommencer.";

// Allow cross origin
header("Access-Control-Allow-Origin: *");
// Allow cross Header (tp have access to application/json
header("Access-Control-Allow-Headers: *");

// Get the react's state
$rest_json = file_get_contents("php://input");
// Store the json data
$POST2 = json_decode($rest_json);



echo json_last_error_msg();
echo ' ---- ';
print_r($POST2);
echo ' ---- ';

// Send an error if the user doesn't fill the form
if( empty($POST2['name']) || empty($POST2['email']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $emptyErrorMessage
        ]
    );
    exit();
}

if ($POST2){
    echo "IN THE CONDITION !!!";
    http_response_code(200);
    $subject = 'Contact from: ' . $POST2['name'];
    $from = $POST2['email'];
    $message = $POST2['message'];
    $headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	$to = $adminEmail;

	// Sending Email
	mail($to, $subject, $message, $headers);

	// Send answer to FRONT
	echo json_encode(array(
		"sent" => true
	));

} else {
 // tell the user about the error
 echo json_encode(
     [
        "sent" => false,
        "message" => $failedErrorMessage
     ]
 );
}