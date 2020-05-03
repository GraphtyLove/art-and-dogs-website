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
    and !empty($POST_CONTENT -> userName) 
    and !empty($POST_CONTENT -> password)
){
    $appointmentList = [];
    // Admin note: drones email linked.
    // * ----- Get USER from DB ----- *
    // Connection to DB
    $m = new MongoClient("CONNECTION_STRING_HERE_DO_NOT_COMMIT");
    // DB Selection
    $db = $m -> website;
    // Collection selection
    $collection = $db -> users;

    // Find the document
    $isAdmin = $collection -> findOne(
        array('userName' => $POST_CONTENT -> userName), 
        array('password' => $POST_CONTENT -> password)
    );
    echo('ADMIN: ' + $isAdmin);
    
    // * ----- Get APPOINTMENTS from DB ----- *
    if ($isAdmin){
        $collection = $db -> appointments;
        $appointments = $collection -> find();
        echo("appointements: " + $appointments);
    }








    // * ----- Send VALID answer to front ---- *
    echo(json_encode(
        [
        'logged' => true,
        'appointmentList' => $appointmentList
        ]
    ));
} else{
    // * ----- Send ERROR to front ---- *
    echo(json_encode([
        'logged' => false,
        'message' => $emptyErrorMessage
    ]));
}