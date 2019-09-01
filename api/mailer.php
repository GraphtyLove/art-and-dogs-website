<?php
// * ---------- ALLOW CROSS ORIGIN --------- *
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// * ---------- EMAIL RECEIVER --------- *
$adminEmail =  "danielesnijers@gmail.com"; // Email that SEND the emails

// * ---------- ERROR MESSAGES --------- *
$emptyErrorMessage = "Formulaire incomplet. Veuillez remplir tous les champs.";
$failedErrorMessage = "L'envoie du mail à échoué. Veuillez recommencer.";
$invalidEmailErrorMessage = "Veuillez entrer une adresse email valide.";

// * ---------- SUCCESS MESSAGES --------- *
$successMessage = "Votre mail à bien été envoyé. Nous vous répondrons le plus vite possible.";

// Get the content of the POST request from the front
$rest_json = file_get_contents("php://input");
// Convert it into json
$POST_CONTENT = json_decode($rest_json);

// Verify if all the inputs are filled
if(!empty($POST_CONTENT -> name) and !empty($POST_CONTENT -> email) and !empty($POST_CONTENT -> message)){

    // Verify if the email address is valid
    if (filter_var($POST_CONTENT -> email, FILTER_VALIDATE_EMAIL)) {

        // Subject of the email
        $subject = 'art-and-dogs.com: ' . $POST_CONTENT -> name;

        // Sender of the email
        $from = $POST_CONTENT -> email;

        // body of the email
        $message = $POST_CONTENT -> message;

        // Headers
        $headers = "MIME-Version: 1.0\r\n";
        $headers.= "Content-type: text/html; charset=UTF-8\r\n";
        $headers.= "From: <" . $from . ">";

        // Receiver of the email
        $to = $adminEmail;

        // Sending Email
        mail($to, $subject, $message, $headers);

        // * ----- Send VALID answer to front ---- *
        echo json_encode(
            [
            'sent' => true,
            'message' => $successMessage
            ]
        );
    } else{
        // * ----- Send ERROR to front ---- *
        echo json_encode(
     [
        'sent' => false,
        'message' => $invalidEmailErrorMessage,
     ]);
    }
} else{
    // * ----- Send ERROR to front ---- *
    echo json_encode(
     [
        'sent' => false,
        'message' => $emptyErrorMessage,
     ]);
}