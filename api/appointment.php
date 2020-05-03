<?php
echo("Php API running...");

// * ---------- ALLOW CROSS ORIGIN --------- *
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// * ---------- ERROR MESSAGES --------- *
$emptyErrorMessage = "Formulaire incomplet. Veuillez remplir tous les champs.";
$failedErrorMessage = "La demande de rendez-vous à échoué. Veuillez recommencer plus tard.";
$invalidPhoneErrorMessage = "Veuillez entrer un numéro de téléphone valide.";

// * ---------- SUCCESS MESSAGES --------- *
$successMessage = "Votre demande de rendez-vous à bien été envoyé. Nous vous recontacterons le plus vite possible.";

// Get the content of the POST request from the front
$rest_json = file_get_contents("php://input");
// Convert it into json
$POST_CONTENT = json_decode($rest_json);

// Verify if all the inputs are filled
if( !empty($POST_CONTENT -> lastName) 
    and !empty($POST_CONTENT -> firstName) 
    and !empty($POST_CONTENT -> phone)
    and !empty($POST_CONTENT -> dogName)
    and !empty($POST_CONTENT -> dogBreed)
    ){

    // TODO: Add a regex for the phone
    if (filter_var($POST_CONTENT -> phone, FILTER_VALIDATE_EMAIL)) {
        // Admin note: drones email linked.
        // TODO: Send the data the DB here
        // * ----- Send data to the DB ----- *
        // Connection to DB
        $m = new MongoClient("CONNECTION_STRING_HERE_DO_NOT_COMMIT");
        // DB Selection
        $db = $m -> website;
        // Collection selection
        $collection = $db -> appointments;
        // Create a new document
        $document = array( 
            "lastName" => $POST_CONTENT -> lastName, 
            "firstName" => $POST_CONTENT -> firstName, 
            "phone" => $POST_CONTENT -> phone, 
            "dogName" => $POST_CONTENT -> dogName, 
            "dogBreed" => $POST_CONTENT -> dogBreed, 
        );
        // Insert the document
        $collection -> insertOne($document);

        // * ----- Send VALID answer to front ---- *
        echo(json_encode(
            [
            'sent' => true,
            'message' => $successMessage
            ]
        ));
    } else{
        // * ----- Send ERROR to front ---- *
        echo(json_encode([
        'sent' => false,
        'message' => $invalidEmailErrorMessage,
    ]));
    }
} else{
    // * ----- Send ERROR to front ---- *
    echo(json_encode([
        'sent' => false,
        'message' => $emptyErrorMessage,
    ]));
}